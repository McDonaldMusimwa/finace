import { Request, Response } from "express";
import type { BankStatement } from "../types/BankStatement";
import type { Transanction } from "../types/Transaction";
import aiStatementProcessor from "../services/aiStatementProcessor";

/**
 * Controller for processing uploaded bank statements
 * Receives file uploads and prepares them for AI agent processing
 */
export class StatementController {
  /**
   * Upload and process bank statement
   * This endpoint receives the uploaded statement file and will send it to an AI agent
   * The AI agent will extract and return data in BankStatement format
   */
  async uploadStatement(req: Request, res: Response): Promise<void> {
    try {
      // Check if file was uploaded (multer adds this)
      const file = (req as any).file;
      
      if (!file) {
        res.status(400).json({
          success: false,
          error: "No file uploaded. Please upload a bank statement file.",
        });
        return;
      }

      // Validate file type (PDF or images)
      const allowedMimeTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      if (!allowedMimeTypes.includes(file.mimetype)) {
        res.status(400).json({
          success: false,
          error: "Invalid file type. Please upload PDF or image files only.",
        });
        return;
      }

      // TODO: Send file to AI agent for processing
      // The AI agent should return data in this format:
      // {
      //   bankname: string
      //   ownerfirstname: string
      //   ownerlastname: string
      //   periodstart: Date
      //   periodend: Date
      //   currency: string
      //   transactions: Transanction[]
      // }

      // Mock response for now - replace with actual AI agent call
      const processedStatement: BankStatement = await this.processWithAI(file);

      res.status(200).json({
        success: true,
        message: "Statement uploaded and processed successfully",
        data: processedStatement,
      });
      console.log("Statement processed:", processedStatement);
    } catch (error) {
      console.error("Error processing statement:", error);
      res.status(500).json({
        success: false,
        error: "Failed to process bank statement",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  /**
   * Get all processed statements for a user
   * TODO: Implement database storage and retrieval
   */
  async getStatements(req: Request, res: Response): Promise<void> {
    try {
      // TODO: Retrieve statements from database
      // For now, return empty array
      res.status(200).json({
        success: true,
        data: [],
      });
    } catch (error) {
      console.error("Error fetching statements:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch statements",
      });
    }
  }

  /**
   * Get a single statement by ID
   */
  async getStatementById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      // TODO: Retrieve statement from database by ID
      res.status(200).json({
        success: true,
        data: null,
      });
    } catch (error) {
      console.error("Error fetching statement:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch statement",
      });
    }
  }

  /**
   * Delete a statement by ID
   */
  async deleteStatement(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      // TODO: Delete statement from database
      res.status(200).json({
        success: true,
        message: "Statement deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting statement:", error);
      res.status(500).json({
        success: false,
        error: "Failed to delete statement",
      });
    }
  }

  /**
   * Process file with AI agent
   * This is where you'll integrate your AI agent to extract statement data
   */
  private async processWithAI(file: any): Promise<BankStatement> {
    if (!file) {
      throw new Error("No file provided for processing");
    }

    // Use the AI service to process the statement
    // The service handles the actual AI integration (Gemini)
    const statement = await aiStatementProcessor.processStatement(
      file.buffer,
      file.mimetype,
      file.originalname
    );

    return statement;
  }
}

export default new StatementController();
