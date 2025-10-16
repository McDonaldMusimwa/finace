import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid'; 
import data from "../data.mjs";
const client = new DynamoDBClient({
  region: process.env.AWS_REG || "us-east-1",
});
const docClient = DynamoDBDocumentClient.from(client);
// Your question data

// Setup DynamoDB client
async function seedData() {
  //console.log("Starting data seeding...");

  for (const question of data.cloudPractitioner2) {
    const item = {
      examcode: "CP-C03",            // Partition Key
      questionid: uuidv4(), // Sort Key (must match schema)
      section_module: question.section,             // Now a regular attribute
      domain: question.domain,
      questionText: question.question,
      choices: question.answers,
      correctAnswer: question.correctanswer,
      explanation: question.explantion,
      difficulty: "medium",
      isFree: question.isFree ?? true,
      isGeneral: question.isGeneral ?? false
    };

    try {
      await docClient.send(
        new PutCommand({
          TableName: "practiceaws",
          Item: item
        })
      );
      console.log(`Inserted question for exam ${item.examcode} and section ${item.section_module}`);
    } catch (error) {
      console.error("Error inserting question:", error);
      process.exit(1);
    }
  }
  console.log("Question injections completed.");
}

seedData().catch(error => {
  console.error("An unhandled error occurred:", error);
  process.exit(1);
});



