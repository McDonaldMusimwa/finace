
const { QueryCommand } = require("@aws-sdk/lib-dynamodb");
const DynamoDBClient = require("@aws-sdk/client-dynamodb");
// backend/controllers/itemController.js

const client = new DynamoDBClient({
  region: process.env.AWS_REGION, // set your region
});


const ItemController = async (event,context) => {
  const { querytype, examcode } = event;
  if (!querytype || !examcode) {
    return { statusCode: 400, body: JSON.stringify({ message: 'Missing required parameters' }) };
  }

  if (querytype === "get") {
    const params = {
      TableName: "practiceaws",
      KeyConditionExpression: "examcode = :examcode",
      ExpressionAttributeValues: {
        ":examcode": examcode
      }
    };

    try {
      const command = new QueryCommand(params);
      const data = await client.send(command);

      return {statusCodeus:200,body:JSON.stringify(data.Items)};
    } catch (error) {
      console.error("Error querying DynamoDB:", error);
      return {statusCode:500,body:JSON.stringify({message:"Error querying DynamoDB"})}; 
    }
  } else if (querytype === "put") {
    if (!req || !req.body) {
      return {statusCode:400,body:JSON.stringify({ message: 'Missing request body' })};
    }

    try {
      const newItem = req.body;
      await putItem(newItem);
      return {statusCode:201,body:JSON.stringify({ message: "Item created" })};
    } catch (error) {
      console.error("Error inserting item:", error);
      return {statusCode:500,body:JSON.stringify({message:"Error inserting item"})};
    }
  } else {
    return {statusCode:400,body:JSON.stringify({ message: 'Invalid query type' })};
  }
};

module.exports = {ItemController};