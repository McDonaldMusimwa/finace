
const saaQuestions = [
  {
    question: "A company has developed public APIs hosted in Amazon EC2 instances behind an Elastic Load Balancer. The APIs will be used by clients from on-premises networks that require whitelisting IP addresses. What should the Solutions Architect do to meet this requirement?",
    answers: [
      { selection: "A", answer: "Associate an Elastic IP address to an Application Load Balancer." },
      { selection: "B", answer: "Create a CloudFront distribution whose origin points to the private IP addresses of your web servers." },
      { selection: "C", answer: "Associate an Elastic IP address to a Network Load Balancer." },
      { selection: "D", answer: "Create an Alias Record in Route 53 that maps to the DNS name of the load balancer." }
    ],
    correctanswer: "C",
    explantion: "Network Load Balancers support static IPs via Elastic IPs, which can be whitelisted by clients' firewalls. ALBs and CloudFront do not offer this capability."
  },
  {
    question: "A company runs a financial application that requires low-latency block storage and high availability across multiple Availability Zones. Which storage solution should be used?",
    answers: [
      { selection: "A", answer: "Amazon EFS" },
      { selection: "B", answer: "Amazon S3" },
      { selection: "C", answer: "Amazon FSx for Windows File Server" },
      { selection: "D", answer: "Amazon FSx for NetApp ONTAP" }
    ],
    correctanswer: "D",
    explantion: "FSx for NetApp ONTAP offers multi-AZ support and low-latency block storage ideal for financial workloads."
  },
  {
    question: "Which AWS database service is best suited for unpredictable workloads and automatically adjusts capacity based on demand while being cost-effective?",
    answers: [
      { selection: "A", answer: "Amazon Aurora Serverless" },
      { selection: "B", answer: "Amazon RDS for MySQL (Provisioned)" },
      { selection: "C", answer: "Amazon Redshift" },
      { selection: "D", answer: "Amazon ElastiCache" }
    ],
    correctanswer: "A",
    explantion: "Aurora Serverless scales compute automatically based on load and is ideal for applications with variable or unpredictable workloads."
  },
  {
    question: "You want to ensure all in-flight data between your Auto Scaling EC2 web servers and Microsoft SQL Server on Amazon RDS is encrypted. What should you do? (Choose TWO)",
    answers: [
      { selection: "A", answer: "Enable IAM DB authentication." },
      { selection: "B", answer: "Enable Transparent Data Encryption (TDE)." },
      { selection: "C", answer: "Download the Amazon RDS root certificate and use SSL for the connection." },
      { selection: "D", answer: "Configure RDS to use port 443 for SSL." }
    ],
    correctanswer: "C",
    explantion: "Using SSL and downloading the RDS root CA certificate allows you to secure the connection in-flight. TDE only encrypts data at rest, not in transit."
  },
  {
    question: "A Lambda function must only be triggered by certain trusted AWS services, and also needs permissions to access DynamoDB. Which two AWS features should be used?",
    answers: [
      { selection: "A", answer: "Execution role and resource policy" },
      { selection: "B", answer: "Lambda Layer and KMS Key Policy" },
      { selection: "C", answer: "Security group and VPC endpoint policy" },
      { selection: "D", answer: "API Gateway and IAM user credentials" }
    ],
    correctanswer: "A",
    explantion: "Resource policies control who can invoke the Lambda. Execution roles allow the Lambda to access other AWS services like DynamoDB."
  }
];
const cloudPractitionerQuestions = [
  {
    question:
      "Which AWS service allows you to estimate the cost of your architecture before deployment?",
    answers: [
      { selection: "A", answer: "AWS Budgets" },
      { selection: "B", answer: "AWS Cost Explorer" },
      { selection: "C", answer: "AWS Pricing Calculator" },
      { selection: "D", answer: "AWS CloudWatch Billing Alarms" },
    ],
    correctanswer: "C",
    explantion:
      "AWS Pricing Calculator helps estimate the cost of AWS services before you actually provision them. It supports cost modeling for simple or complex architectures.",
  },
  {
    question:
      "Which benefit of the AWS Cloud helps users reduce the need to guess infrastructure capacity in advance?",
    answers: [
      { selection: "A", answer: "High availability" },
      { selection: "B", answer: "Agility" },
      { selection: "C", answer: "Elasticity" },
      { selection: "D", answer: "Fault tolerance" },
    ],
    correctanswer: "C",
    explantion:
      "Elasticity allows you to automatically scale resources up or down based on demand, avoiding under or over-provisioning and ensuring cost-efficiency.",
  },
  {
    question:
      "Which AWS service is primarily responsible for managing access and permissions for AWS resources?",
    answers: [
      { selection: "A", answer: "Amazon Inspector" },
      { selection: "B", answer: "AWS IAM" },
      { selection: "C", answer: "AWS Config" },
      { selection: "D", answer: "AWS Shield" },
    ],
    correctanswer: "B",
    explantion:
      "AWS Identity and Access Management (IAM) is the core service used to create and manage users, groups, roles, and access policies to AWS services.",
  },
  {
    question:
      "Which of the following is an advantage of the AWS Cloud compared to traditional on-premises infrastructure?",
    answers: [
      { selection: "A", answer: "Upfront capital expenditure" },
      { selection: "B", answer: "Manual scalability" },
      { selection: "C", answer: "Pay-as-you-go pricing" },
      { selection: "D", answer: "Limited geographic regions" },
    ],
    correctanswer: "C",
    explantion:
      "One of AWS's key benefits is its pay-as-you-go model, allowing customers to pay only for what they use, rather than making upfront capital investments.",
  },
  {
    question:
      "Which service provides a visual tool to explore and analyze AWS usage and spending over time?",
    answers: [
      { selection: "A", answer: "AWS CloudTrail" },
      { selection: "B", answer: "AWS Cost Explorer" },
      { selection: "C", answer: "AWS Trusted Advisor" },
      { selection: "D", answer: "AWS Billing Dashboard" },
    ],
    correctanswer: "B",
    explantion:
      "AWS Cost Explorer provides visual tools to explore usage patterns and costs. It helps identify spending trends and forecast future AWS expenses.",
  },
];
const aiPractitionerQuestions = [
  {
    question:
      "Which AWS service is primarily used for building, training, and deploying machine learning models?",
    answers: [
      { selection: "A", answer: "Amazon Polly" },
      { selection: "B", answer: "Amazon SageMaker" },
      { selection: "C", answer: "Amazon Lex" },
      { selection: "D", answer: "Amazon Rekognition" },
    ],
    correctanswer: "B",
    explantion:
      "Amazon SageMaker is a fully managed service that enables developers and data scientists to build, train, and deploy ML models quickly and at scale. It removes the heavy lifting from the ML process by managing infrastructure, tuning, and deployment workflows.",
  },
  {
    question:
      "Which AWS AI service can convert text into realistic human-like speech?",
    answers: [
      { selection: "A", answer: "Amazon Translate" },
      { selection: "B", answer: "Amazon Polly" },
      { selection: "C", answer: "Amazon Lex" },
      { selection: "D", answer: "Amazon Comprehend" },
    ],
    correctanswer: "B",
    explantion:
      "Amazon Polly is a service that turns text into lifelike speech using deep learning. It enables applications to 'speak' in a natural-sounding voice, and supports multiple languages and voice styles for greater accessibility and user experience.",
  },
  {
    question:
      "Which AWS service is best suited for building conversational interfaces such as chatbots?",
    answers: [
      { selection: "A", answer: "Amazon Transcribe" },
      { selection: "B", answer: "Amazon Lex" },
      { selection: "C", answer: "Amazon Translate" },
      { selection: "D", answer: "Amazon Forecast" },
    ],
    correctanswer: "B",
    explantion:
      "Amazon Lex provides tools for building chatbots and voice assistants. It uses the same deep learning technologies as Amazon Alexa, allowing users to create conversational interfaces using voice and text, complete with automatic speech recognition and natural language understanding.",
  },
  {
    question:
      "What does Amazon Rekognition allow developers to do with images and videos?",
    answers: [
      { selection: "A", answer: "Translate visual content" },
      { selection: "B", answer: "Analyze and tag visual content" },
      { selection: "C", answer: "Generate 3D models from images" },
      { selection: "D", answer: "Render augmented reality scenes" },
    ],
    correctanswer: "B",
    explantion:
      "Amazon Rekognition is an AWS AI service that analyzes images and videos to detect objects, people, faces, text, scenes, and activities. It also provides facial analysis and recognition capabilities, making it useful for surveillance, security, and social media platforms.",
  },
  {
    question:
      "Which AWS service would you use to detect the language of a given text and extract key phrases or sentiment?",
    answers: [
      { selection: "A", answer: "Amazon Translate" },
      { selection: "B", answer: "Amazon Lex" },
      { selection: "C", answer: "Amazon Comprehend" },
      { selection: "D", answer: "Amazon Polly" },
    ],
    correctanswer: "C",
    explantion:
      "Amazon Comprehend is a natural language processing (NLP) service that uses ML to extract insights from text. It can detect language, extract entities, key phrases, and sentiment, making it valuable for analyzing customer feedback, social media, or documents.",
  },
  {
    question:
      "What AWS service would you use to transcribe spoken audio into written text?",
    answers: [
      { selection: "A", answer: "Amazon Polly" },
      { selection: "B", answer: "Amazon Transcribe" },
      { selection: "C", answer: "Amazon Lex" },
      { selection: "D", answer: "Amazon Comprehend" },
    ],
    correctanswer: "B",
    explantion:
      "Amazon Transcribe is a service that converts speech into text. It uses automatic speech recognition (ASR) to transcribe audio files, phone calls, and video content, making it useful for subtitles, contact center analytics, and searchable media archives.",
  },
  {
    question:
      "Which AWS service allows developers to translate text between languages using neural networks?",
    answers: [
      { selection: "A", answer: "Amazon Polly" },
      { selection: "B", answer: "Amazon Lex" },
      { selection: "C", answer: "Amazon Translate" },
      { selection: "D", answer: "Amazon Comprehend" },
    ],
    correctanswer: "C",
    explantion:
      "Amazon Translate is a neural machine translation service that delivers fast and accurate language translation. It's useful for multilingual content, global applications, and user interfaces that need to adapt to different languages on the fly.",
  },
  {
    question:
      "Which service can be used to generate accurate time-series forecasts using historical data?",
    answers: [
      { selection: "A", answer: "Amazon Forecast" },
      { selection: "B", answer: "Amazon SageMaker" },
      { selection: "C", answer: "Amazon Comprehend" },
      { selection: "D", answer: "Amazon Lex" },
    ],
    correctanswer: "A",
    explantion:
      "Amazon Forecast is a fully managed service that uses machine learning to deliver accurate forecasts. It can predict product demand, resource needs, or financial trends using historical time-series data without requiring ML experience.",
  },
  {
    question:
      "Which of the following AWS services can be used for document analysis, including extracting text and forms?",
    answers: [
      { selection: "A", answer: "Amazon Textract" },
      { selection: "B", answer: "Amazon Translate" },
      { selection: "C", answer: "Amazon Polly" },
      { selection: "D", answer: "Amazon Transcribe" },
    ],
    correctanswer: "A",
    explantion:
      "Amazon Textract automatically extracts printed text, handwriting, forms, and tables from scanned documents. Unlike traditional OCR, it can also identify the structure of the document, making it suitable for automating data entry or document processing workflows.",
  },
  {
    question:
      "Which AWS AI service is best suited for personalizing user experiences in apps or websites?",
    answers: [
      { selection: "A", answer: "Amazon Personalize" },
      { selection: "B", answer: "Amazon Forecast" },
      { selection: "C", answer: "Amazon Translate" },
      { selection: "D", answer: "Amazon Rekognition" },
    ],
    correctanswer: "A",
    explantion:
      "Amazon Personalize enables developers to create individualized recommendations for customers, similar to what is used by Amazon.com. It allows you to deliver personalized product, content, or marketing suggestions by training models on your user interaction data.",
  },
];

const questions = [saaQuestions,cloudPractitionerQuestions,aiPractitionerQuestions]
export default questions