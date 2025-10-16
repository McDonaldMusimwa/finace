// backend/controllers/itemController.js
const ddbDocClient = require('../services/dynamoService.js');
const PutCommand =require ("@aws-sdk/lib-dynamodb");;

export const insertItem = async (req, res) => {
  const { examcode, question, answers, correctAnswer, explanation } = req.body;

  if (!examcode || !question) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const params = {
    TableName: "practiceaws",
    Item: {
      examcode,
      question,
      answers,
      correctAnswer,
      explanation
    },
  };

  try {
    await ddbDocClient.send(new PutCommand(params));
    res.status(201).json({ message: "Question inserted successfully" });
  } catch (err) {
    console.error("Error inserting question:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
import { putItem, getAllItems } from '../services/dynamoService.js';

export const getItems = async (req, res) => {
  const items = await getAllItems();
  res.json(items);
};

export const createItem = async (req, res) => {
  const newItem = req.body;
  await putItem(newItem);
  res.status(201).json({ message: 'Item created' });
};
