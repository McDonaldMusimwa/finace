// testDynamoConnection.ts
import { DynamoDBClient, ListTablesCommand, ScanCommand } from "@aws-sdk/client-dynamodb";

const REGION = "us-east-1"; // e.g., "us-east-1"
const TABLE_NAME = "practiceaws";

const client = new DynamoDBClient({ region: REGION });

async function testConnection() {
  try {
    // Option 1: List all tables
    const listTables = await client.send(new ListTablesCommand({}));
    console.log("✅ Connected. Tables in DynamoDB:", listTables.TableNames);

    // Option 2: Scan your table
    const scanResult = await client.send(new ScanCommand({ TableName: TABLE_NAME }));
    console.log(`✅ Connected to "${TABLE_NAME}". Number of items:`, scanResult.Count);
  } catch (error) {
    console.error("❌ Failed to connect to DynamoDB:", error);
  }
}

testConnection();
