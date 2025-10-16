# Back-end Architecture and Usage

This back-end system is built around a custom **Node.js script** designed to manage and provision application data within Amazon Web Services (AWS). It primarily functions as a **seeding utility** for populating a persistent database with content.

---

## 💻 Technology Stack

The core components used in this back-end are:

- **Node.js:** Serves as the high-performance JavaScript runtime environment for executing the custom script.  
- **AWS SDK (Node.js):** The official Amazon Web Services Software Development Kit, which allows the script to securely and programmatically interact with AWS services, such as reading data and performing database operations.  
- **DynamoDB:** A fast, flexible, and fully managed **NoSQL key-value database** used for the persistent storage of the application's structured content.  

---

## 💾 Data Source and Management

The application's content, consisting of quiz or exam questions, is structured for easy management:

- **Data Structure:** Questions are defined locally as an **array of JavaScript objects** within the project files. This allows developers to easily edit, version control, and review the content.  
- **Seeding Mechanism:** The custom script's primary role is to read this in-memory array and perform a **Batch Write** operation to load the question data into the specified **DynamoDB table**.  

---

## 🚀 Execution and Usage

The entire back-end initialization process is simplified into a single command:

| Command        | Action        | Purpose                                                                 |
| -------------- | ------------- | ----------------------------------------------------------------------- |
| `npm run seed` | Execution     | Executes the pre-defined script in the `package.json` file.             |
| **Script Output** | Database Initialization | Connects to AWS using the configured credentials and populates the DynamoDB table with all questions from the array, establishing the initial state of the database. |

### Prerequisites

1. **Dependencies:** Ensure all required npm packages, including the AWS SDK, are installed (`npm install`).  
2. **AWS Credentials:** Valid AWS credentials (IAM User or Role) must be configured in the execution environment to allow write access to the target DynamoDB table.  

---

## 💡 Future Expansion

While currently focused on seeding, this Node.js foundation can be easily expanded into a full API back-end by adding:

- **RESTful Endpoints:** Utilizing frameworks (e.g., Express.js) or serverless services (e.g., AWS Lambda + API Gateway) to serve the questions via HTTP requests.  
- **CRUD Operations:** Implementing logic for Create, Read, Update, and Delete operations on the DynamoDB questions outside of the initial seeding process.  
