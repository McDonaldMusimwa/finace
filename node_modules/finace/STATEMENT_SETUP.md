# Bank Statement Processing Setup

This guide explains how to set up and use the bank statement upload and AI processing feature.

## Installation

### 1. Install Required Dependencies

```bash
cd backend
npm install multer @types/multer
```

### 2. Create Upload Directory

```bash
mkdir -p backend/uploads
```

Add to `.gitignore`:
```
uploads/
```

### 3. Enable File Upload in Routes

In `backend/src/routes/statements.ts`, uncomment the multer configuration section:

```typescript
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});
```

Then uncomment the POST route:
```typescript
statementsRouter.post("/", upload.single('statement'), statementController.uploadStatement.bind(statementController));
```

## AI Integration Options

### Option 1: OpenAI GPT-4 Vision

Install OpenAI SDK:
```bash
npm install openai
```

Add to `.env`:
```
OPENAI_API_KEY=your_api_key_here
```

Update `backend/src/services/aiStatementProcessor.ts`:
```typescript
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async processStatement(fileBuffer: Buffer, mimeType: string, fileName: string) {
  const base64Image = fileBuffer.toString('base64');
  
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [{
      role: "user",
      content: [
        { type: "text", text: this.generatePrompt() },
        { 
          type: "image_url", 
          image_url: { url: `data:${mimeType};base64,${base64Image}` } 
        }
      ]
    }],
    max_tokens: 4096
  });

  const extractedData = response.choices[0].message.content;
  return this.parseAIResponse(extractedData);
}
```

### Option 2: Anthropic Claude

Install Anthropic SDK:
```bash
npm install @anthropic-ai/sdk
```

Add to `.env`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

### Option 3: Azure Document Intelligence

Install Azure SDK:
```bash
npm install @azure/ai-form-recognizer
```

Add to `.env`:
```
AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT=your_endpoint
AZURE_DOCUMENT_INTELLIGENCE_KEY=your_key
```

## API Endpoints

### Upload Statement
```http
POST /api/statements
Content-Type: multipart/form-data

Body:
- statement: [file] (PDF or image)
```

Response:
```json
{
  "success": true,
  "message": "Statement uploaded and processed successfully",
  "data": {
    "bankname": "Chase Bank",
    "ownerfirstname": "John",
    "ownerlastname": "Doe",
    "periodstart": "2024-01-01T00:00:00.000Z",
    "periodend": "2024-01-31T00:00:00.000Z",
    "currency": "USD",
    "transactions": [
      {
        "date": "2024-01-05T00:00:00.000Z",
        "description": "Grocery Store Purchase",
        "amount": -45.67,
        "debit": 45.67,
        "balance": 1954.33
      }
    ]
  }
}
```

### Get All Statements
```http
GET /api/statements
```

### Get Statement by ID
```http
GET /api/statements/:id
```

### Delete Statement
```http
DELETE /api/statements/:id
```

## Frontend Integration

Update the frontend upload form to send files to the backend:

```typescript
const handleFileUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('statement', file);

  try {
    const response = await fetch('http://localhost:3000/api/statements', {
      method: 'POST',
      body: formData,
      headers: {
        // Don't set Content-Type, let browser set it with boundary
      }
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('Processed statement:', result.data);
      // Update UI with processed statement
    }
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

## Data Format

The AI agent returns data in this format:

```typescript
type BankStatement = {
  bankname: string;          // e.g., "Chase Bank"
  ownerfirstname: string;    // e.g., "John"
  ownerlastname: string;     // e.g., "Doe"
  periodstart: Date;         // Statement start date
  periodend: Date;           // Statement end date
  currency: string;          // e.g., "USD"
  transactions: Transaction[];
}

type Transaction = {
  date: Date;                // Transaction date
  description: string;       // e.g., "Grocery Store Purchase"
  amount: number;            // Negative for debits, positive for credits
  credit?: number;           // Optional: credit amount
  debit?: number;            // Optional: debit amount
  balance: number;           // Running balance
}
```

## Testing

Currently using mock data. To test with real AI:

1. Set up your chosen AI service (OpenAI, Claude, or Azure)
2. Add API keys to `.env`
3. Update the `processStatement` method in `aiStatementProcessor.ts`
4. Test with sample bank statements

## Next Steps

- [ ] Install multer and uncomment file upload routes
- [ ] Choose and set up an AI service
- [ ] Create database schema for storing statements
- [ ] Add user authentication/authorization
- [ ] Implement statement persistence
- [ ] Add error handling and validation
- [ ] Set up proper logging
- [ ] Add rate limiting for AI API calls
