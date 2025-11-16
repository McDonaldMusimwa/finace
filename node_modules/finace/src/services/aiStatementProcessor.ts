import type { BankStatement } from "../types/BankStatement";
import type { Transanction } from "../types/Transaction";
import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * AI Statement Processor Service
 * Uses Google Gemini 1.5 Flash for free PDF processing
 */
export class AIStatementProcessor {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    console.log(apiKey)
    if (!apiKey) {
      console.warn("GEMINI_API_KEY not found. Using mock data.");
      this.genAI = null as any;
      this.model = null;
    } else {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    }
  }

  /**
   * Process a bank statement file using Google Gemini AI
   * @param fileBuffer - The file buffer to process
   * @param mimeType - The MIME type of the file
   * @returns Extracted BankStatement data
   */
  async processStatement(
    fileBuffer: Buffer,
    mimeType: string,
    fileName: string
  ): Promise<BankStatement> {
    console.log(`Processing file: ${fileName} (${mimeType})`);

    // If no API key, return mock data
    if (!this.model) {
      console.log("No API key - returning mock data");
      return this.generateMockStatement(fileName);
    }

    try {
      // Convert buffer to base64
      const base64Data = fileBuffer.toString("base64");

      // Prepare the file for Gemini
      const imagePart = {
        inlineData: {
          data: base64Data,
          mimeType: mimeType,
        },
      };

      // Generate content with prompt and file
      const result = await this.model.generateContent([
        this.generatePrompt(),
        imagePart,
      ]);

      const response = await result.response;
      const text = response.text();

      // Parse the AI response
      return this.parseAIResponse(text);
    } catch (error) {
      console.error("Error processing with Gemini:", error);
      throw new Error(`Failed to process statement: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }

  /**
   * Generate a prompt for the AI agent
   * This prompt instructs the AI on how to extract and format the data
   */
  private generatePrompt(): string {
    return `
You are a bank statement data extraction specialist. Analyze the provided bank statement document and extract the following information.

Extract this data in valid JSON format:

{
  "bankname": "Name of the bank",
  "ownerfirstname": "Account owner's first name",
  "ownerlastname": "Account owner's last name", 
  "periodstart": "Statement period start date (YYYY-MM-DD format)",
  "periodend": "Statement period end date (YYYY-MM-DD format)",
  "currency": "Currency code (USD, EUR, GBP, etc.)",
  "transactions": [
    {
      "date": "Transaction date (YYYY-MM-DD format)",
      "description": "Transaction description",
      "amount": "Transaction amount (negative for debits, positive for credits)",
      "credit": "Credit amount if shown separately (optional)",
      "debit": "Debit amount if shown separately (optional)",
      "balance": "Running balance after this transaction"
    }
  ]
}

CRITICAL RULES:
1. Extract ALL transactions visible in the statement
2. Use negative numbers for debits/withdrawals/expenses (e.g., -45.67)
3. Use positive numbers for credits/deposits (e.g., 2500.00)
4. Dates must be YYYY-MM-DD format (e.g., "2024-01-15")
5. Preserve exact transaction descriptions as shown
6. Include running balance for each transaction
7. If debit/credit columns exist separately, include both fields
8. All amounts must be numbers with 2 decimal places
9. Return ONLY the JSON object, no markdown, no explanations, no code blocks
10. Ensure the JSON is valid and parseable

Begin extraction:
    `.trim();
  }

  /**
   * Parse AI response and validate the structure
   */
  private parseAIResponse(response: string): BankStatement {
    try {
      // Clean the response - remove markdown code blocks if present
      let cleanResponse = response.trim();
      if (cleanResponse.startsWith("```json")) {
        cleanResponse = cleanResponse.replace(/```json\n?/g, "").replace(/```\n?/g, "");
      } else if (cleanResponse.startsWith("```")) {
        cleanResponse = cleanResponse.replace(/```\n?/g, "");
      }

      const parsed = JSON.parse(cleanResponse);

      // Validate required fields
      if (!parsed.bankname || !parsed.ownerfirstname || !parsed.ownerlastname) {
        throw new Error("Missing required owner/bank information");
      }

      if (!parsed.transactions || !Array.isArray(parsed.transactions)) {
        throw new Error("Invalid or missing transactions array");
      }

      if (parsed.transactions.length === 0) {
        throw new Error("No transactions found in statement");
      }

      // Convert date strings to Date objects and validate
      const statement: BankStatement = {
        bankname: parsed.bankname,
        ownerfirstname: parsed.ownerfirstname,
        ownerlastname: parsed.ownerlastname,
        periodstart: new Date(parsed.periodstart),
        periodend: new Date(parsed.periodend),
        currency: parsed.currency || "USD",
        transactions: parsed.transactions.map((t: any, index: number) => {
          // Validate transaction fields
          if (!t.date || !t.description || t.amount === undefined || t.balance === undefined) {
            throw new Error(`Invalid transaction at index ${index}: missing required fields`);
          }

          return {
            date: new Date(t.date),
            description: t.description,
            amount: parseFloat(t.amount),
            credit: t.credit ? parseFloat(t.credit) : undefined,
            debit: t.debit ? parseFloat(t.debit) : undefined,
            balance: parseFloat(t.balance),
          };
        }),
      };

      console.log(`Successfully parsed statement with ${statement.transactions.length} transactions`);
      return statement;
    } catch (error) {
      console.error("Failed to parse AI response:", error);
      console.error("Raw response:", response);
      throw new Error(`Invalid AI response format: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }

  /**
   * Generate mock statement data for testing
   */
  private generateMockStatement(fileName: string): BankStatement {
    const now = new Date();
    const lastMonth = new Date(now);
    lastMonth.setMonth(now.getMonth() - 1);

    return {
      bankname: "Chase Bank",
      ownerfirstname: "John",
      ownerlastname: "Doe",
      periodstart: lastMonth,
      periodend: now,
      currency: "USD",
      transactions: [
        {
          date: new Date(now.getFullYear(), now.getMonth(), 1),
          description: "Opening Balance",
          amount: 0,
          balance: 2500.0,
        },
        {
          date: new Date(now.getFullYear(), now.getMonth(), 3),
          description: "ATM Withdrawal - Main St",
          amount: -100.0,
          debit: 100.0,
          balance: 2400.0,
        },
        {
          date: new Date(now.getFullYear(), now.getMonth(), 5),
          description: "Online Transfer from Savings",
          amount: 500.0,
          credit: 500.0,
          balance: 2900.0,
        },
        {
          date: new Date(now.getFullYear(), now.getMonth(), 7),
          description: "Walmart Purchase",
          amount: -85.43,
          debit: 85.43,
          balance: 2814.57,
        },
        {
          date: new Date(now.getFullYear(), now.getMonth(), 10),
          description: "Payroll Deposit - ACME Corp",
          amount: 3200.0,
          credit: 3200.0,
          balance: 6014.57,
        },
        {
          date: new Date(now.getFullYear(), now.getMonth(), 12),
          description: "Electric Bill - Auto Pay",
          amount: -145.67,
          debit: 145.67,
          balance: 5868.9,
        },
        {
          date: new Date(now.getFullYear(), now.getMonth(), 15),
          description: "Amazon Purchase",
          amount: -67.89,
          debit: 67.89,
          balance: 5801.01,
        },
      ],
    };
  }
}

export default new AIStatementProcessor();
