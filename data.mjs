 const saaQuestions1 = [
  {
    question: "A company has developed public APIs hosted in Amazon EC2 instances behind an Elastic Load Balancer. The APIs will be used by clients from on-premises networks that require whitelisting IP addresses. What should the Solutions Architect do to meet this requirement?",
    answers: [
      { selection: "A", answer: "Associate an Elastic IP address to an Application Load Balancer." },
      { selection: "B", answer: "Create a CloudFront distribution whose origin points to the private IP addresses of your web servers." },
      { selection: "C", answer: "Associate an Elastic IP address to a Network Load Balancer." },
      { selection: "D", answer: "Create an Alias Record in Route 53 that maps to the DNS name of the load balancer." }
    ],
    correctanswer: "C",
    explantion: "Network Load Balancers support static IPs via Elastic IPs, which can be whitelisted by clients' firewalls. ALBs and CloudFront do not offer this capability.",
    domain: "Availability",
section:"1"
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
    explantion: "FSx for NetApp ONTAP offers multi-AZ support and low-latency block storage ideal for financial workloads.",
    domain: "Reliability",
    section:"1"
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
    explantion: "Aurora Serverless scales compute automatically based on load and is ideal for applications with variable or unpredictable workloads.",
    domain: "Cost Optimization",
    section:"1"
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
    explantion: "Using SSL and downloading the RDS root CA certificate allows you to secure the connection in-flight. TDE only encrypts data at rest, not in transit.",
    domain: "Security",
    section:"1"
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
    explantion: "Resource policies control who can invoke the Lambda. Execution roles allow the Lambda to access other AWS services like DynamoDB.",
    domain: "Security",
    section:"1"
  }
];
const cloudPractitionerQuestions1 = [ 
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
    domain: "Billing and Pricing",
    section:"1"
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
    domain: "Cloud Concepts",
    section:"1"
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
    domain: "Security",
    section:"1"
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
    domain: "Cloud Concepts",
    section:"1"
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
    domain: "Billing and Pricing",
    section:"1"
  },
  {
    "question": "Which AWS service is primarily used to prevent unauthorized access to your Virtual Private Cloud (VPC) instances by acting as a firewall at the subnet level?",
    "answers": [
      { "selection": "A", "answer": "AWS Web Application Firewall (WAF)." },
      { "selection": "B", "answer": "Network Access Control List (NACL)." },
      { "selection": "C", "answer": "AWS Identity and Access Management (IAM)." },
      { "selection": "D", "answer": "Amazon GuardDuty." }
    ],
    "correctanswer": "B",
    "explantion": "A **Network Access Control List (NACL)** is a stateless firewall that controls traffic in and out of subnets within a VPC, providing an essential layer of security.",
    "domain": "Security",
    "section": "1"
  },
  {
    "question": "A company requires its data to remain available even if an entire AWS Region fails. Which pillar of the AWS Well-Architected Framework is this requirement most aligned with?",
    "answers": [
      { "selection": "A", "answer": "Performance Efficiency." },
      { "selection": "B", "answer": "Cost Optimization." },
      { "selection": "C", "answer": "Operational Excellence." },
      { "selection": "D", "answer": "Reliability." }
    ],
    "correctanswer": "D",
    "explantion": "The **Reliability** pillar focuses on the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as a Region failure (Multi-Region architecture).",
    "domain": "Resilient Architecture",
    "section": "2"
  },
  {
    "question": "Which security feature allows an application to use temporary, limited-privilege credentials instead of long-term credentials when accessing AWS services?",
    "answers": [
      { "selection": "A", "answer": "IAM Users." },
      { "selection": "B", "answer": "IAM Roles." },
      { "selection": "C", "answer": "Multi-Factor Authentication (MFA)." },
      { "selection": "D", "answer": "IAM Groups." }
    ],
    "correctanswer": "B",
    "explantion": "**IAM Roles** are used to delegate permissions to users, applications, or services that require access to AWS resources. They provide temporary security credentials with defined permissions, which is a security best practice.",
    "domain": "Security",
    "section": "1"
  },
  {
    "question": "What is the AWS recommended best practice for achieving high availability and fault tolerance for an application running on Amazon EC2 instances?",
    "answers": [
      { "selection": "A", "answer": "Deploying all EC2 instances in a single Availability Zone (AZ)." },
      { "selection": "B", "answer": "Deploying EC2 instances across multiple Availability Zones (AZs) using an Auto Scaling Group and Load Balancer." },
      { "selection": "C", "answer": "Using EC2 Dedicated Hosts to ensure resource isolation." },
      { "selection": "D", "answer": "Deploying all resources in a single AWS Region." }
    ],
    "correctanswer": "B",
    "explantion": "Spreading resources like EC2 instances across **multiple Availability Zones (AZs)** and using an **Auto Scaling Group** with a **Load Balancer** is the fundamental pattern for fault tolerance and high availability in AWS.",
    "domain": "Resilient Architecture",
    "section": "2"
  },
  {
    "question": "A customer is concerned about protecting their web application from common web exploits like SQL injection and cross-site scripting. Which AWS service should they use?",
    "answers": [
      { "selection": "A", "answer": "Amazon Inspector." },
      { "selection": "B", "answer": "AWS Shield Standard." },
      { "selection": "C", "answer": "AWS Web Application Firewall (WAF)." },
      { "selection": "D", "answer": "AWS Artifact." }
    ],
    "correctanswer": "C",
    "explantion": "**AWS WAF** is a web application firewall that helps protect web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources.",
    "domain": "Security",
    "section": "1"
  },
  {
    "question": "A development team needs a database solution that automatically replicates data across multiple Availability Zones (AZs) to ensure data redundancy without requiring manual configuration. Which feature/service achieves this?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS Read Replicas." },
      { "selection": "B", "answer": "Amazon RDS Multi-AZ deployment." },
      { "selection": "C", "answer": "Amazon EBS Snapshots." },
      { "selection": "D", "answer": "Amazon ElastiCache." }
    ],
    "correctanswer": "B",
    "explantion": "**Amazon RDS Multi-AZ** deployment automatically provisions and manages a synchronous standby replica in a different Availability Zone for high availability and redundancy. This is the cornerstone of managed database resilience.",
    "domain": "Resilient Architecture",
    "section": "2"
  },
  {
    "question": "What is the primary benefit of using Amazon S3 for storing backups and archives instead of an on-premise tape library?",
    "answers": [
      { "selection": "A", "answer": "Encryption is automatically disabled." },
      { "selection": "B", "answer": "The data is automatically protected by the IAM service." },
      { "selection": "C", "answer": "It provides durability and redundancy by storing data across multiple devices in multiple Availability Zones." },
      { "selection": "D", "answer": "S3 is a relational database service." }
    ],
    "correctanswer": "C",
    "explantion": "Amazon S3 is designed for **99.999999999% (11 nines) durability** by redundantly storing data across multiple devices in a minimum of three Availability Zones, fulfilling a core requirement for resilient architecture and reliable backup.",
    "domain": "Resilient Architecture",
    "section": "2"
  },
  {
    "question": "Under the AWS Shared Responsibility Model, which security task is the customer *always* responsible for?",
    "answers": [
      { "selection": "A", "answer": "Physical security of the data centers." },
      { "selection": "B", "answer": "Maintaining the underlying EC2 hypervisor." },
      { "selection": "C", "answer": "Configuring security groups and network access control lists (NACLs)." },
      { "selection": "D", "answer": "Patching the operating system for AWS managed services like RDS." }
    ],
    "correctanswer": "C",
    "explantion": "The customer is always responsible for **'Security *in* the Cloud,'** which includes configuration tasks like managing **Security Groups** and **NACLs**, while AWS handles 'Security *of* the Cloud' (A, B, and D).",
    "domain": "Security",
    "section": "1"
  },
  {
    "question": "Which AWS service provides an organization with a comprehensive view of its security state and continuous monitoring for vulnerabilities and unwanted network exposure across its EC2 instances?",
    "answers": [
      { "selection": "A", "answer": "AWS Config." },
      { "selection": "B", "answer": "AWS Certificate Manager (ACM)." },
      { "selection": "C", "answer": "Amazon Inspector." },
      { "selection": "D", "answer": "AWS CloudFormation." }
    ],
    "correctanswer": "C",
    "explantion": "**Amazon Inspector** is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS by continuously scanning for software vulnerabilities and unintended network exposure.",
    "domain": "Security",
    "section": "1"
  },
  {
    "question": "What architectural design principle involves scaling an application by adding more instances rather than increasing the size of a single instance?",
    "answers": [
      { "selection": "A", "answer": "Vertical Scaling." },
      { "selection": "B", "answer": "Monolithic Design." },
      { "selection": "C", "answer": "Horizontal Scaling." },
      { "selection": "D", "answer": "Serverless Computing." }
    ],
    "correctanswer": "C",
    "explantion": "**Horizontal Scaling** (scaling out) involves adding more resources (e.g., EC2 instances) to distribute load. This is the preferred method for building highly scalable and resilient applications on AWS, as it eliminates single points of failure.",
    "domain": "Resilient Architecture",
    "section": "2"
  }

];
const cloudPractitionerQuestions2 = [
  {
    question: "Which of the following is a managed DNS service provided by AWS?",
    answers: [
      { "selection": "A", "answer": "Amazon CloudFront" },
      { "selection": "B", "answer": "Amazon VPC" },
      { "selection": "C", "answer": "Amazon Route 53" },
      { "selection": "D", "answer": "AWS Direct Connect" }
    ],
    correctanswer: "C",
    explanation:` Amazon Route 53 is Amazon Web Services' highly available and scalable Domain Name System (DNS) web service.

In simple terms, Route 53 is the service that translates human-readable website names (like example.com) into the numerical IP addresses (like 192.0.2.1) that computers use to connect to each other. It is the internet's "phone book."

The name "Route 53" comes from the fact that DNS servers traditionally use port 53 to handle requests, and the service's job is to route users to their desired applications.

Core Functions
Route 53 serves three main functions:

Domain Registration: You can use Route 53 to register new domain names (e.g., mydomain.net).

DNS Resolution (Traffic Routing): It acts as an authoritative DNS service, storing the definitive records for your domain and answering queries from users worldwide.

Health Checking and Failover: It continuously monitors the health of your application endpoints and can automatically re-route traffic away from unhealthy resources. `,
    domain: "Networking",
    section: "2"
  },
  {
    question: "Which AWS service is designed to help you analyze and manage your costs?",
    answers: [
      { "selection": "A", "answer": "AWS Cost Explorer" },
      { "selection": "B", "answer": "AWS Budgets" },
      { "selection": "C", "answer": "AWS Trusted Advisor" },
      { "selection": "D", "answer": "Amazon Inspector" }
    ],
    correctanswer: "A",
    explanation: "AWS Cost Explorer is a tool that lets you visualize and analyze your costs and usage.",
    domain: "Billing and Pricing",
    section: "2"
  },
  {
    question: "Which pricing model allows you to trade flexibility for a lower price in exchange for a one- or three-year commitment?",
    answers: [
      { "selection": "A", "answer": "On-Demand Instances" },
      { "selection": "B", "answer": "Reserved Instances" },
      { "selection": "C", "answer": "Spot Instances" },
      { "selection": "D", "answer": "Dedicated Hosts" }
    ],
    correctanswer: "B",
    explanation: "Reserved Instances offer a significant discount (up to 75%) over On-Demand prices by committing to a one- or three-year term.",
    domain: "Billing and Pricing",
    section: "2"
  },
  {
    question: "Which AWS service is used to distribute traffic across multiple EC2 instances?",
    answers: [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon Elastic Load Balancing (ELB)" },
      { "selection": "C", "answer": "Amazon RDS" },
      { "selection": "D", "answer": "Amazon VPC" }
    ],
    correctanswer: "B",
    explanation: "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as EC2 instances.",
    domain: "Cloud Concepts",
    section: "2"
  },
  {
    question: "What is the primary benefit of deploying an application across multiple Availability Zones?",
    answers: [
      { "selection": "A", "answer": "Elasticity" },
      { "selection": "B", "answer": "High availability" },
      { "selection": "C", "selection": "Cost optimization" },
      { "selection": "D", "answer": "Agility" }
    ],
    correctanswer: "B",
    explanation: "Availability Zones are isolated locations within an AWS Region. Deploying resources across multiple AZs ensures high availability and fault tolerance.",
    domain: "Cloud Concepts",
    section: "2"
  },
  {
    question: "Which AWS service allows you to run containers without managing servers or clusters?",
    answers: [
      { "selection": "A", "answer": "Amazon ECS" },
      { "selection": "B", "answer": "Amazon EKS" },
      { "selection": "C", "answer": "AWS Fargate" },
      { "selection": "D", "answer": "Amazon EC2" }
    ],
    correctanswer: "C",
    explanation: "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS, eliminating the need to manage servers.",
    domain: "Containers",
    section: "2"
  },
  {
    question: "Which service is a highly-scalable object storage service?",
    answers: [
      { "selection": "A", "answer": "Amazon EBS" },
      { "selection": "B", "answer": "Amazon S3" },
      { "selection": "C", "answer": "Amazon EFS" },
      { "selection": "D", "answer": "Amazon RDS" }
    ],
    correctanswer: "B",
    explanation: "Amazon S3 (Simple Storage Service) is an object storage service offering industry-leading scalability, data availability, security, and performance.",
    domain: "Storage",
    section: "2"
  },
  {
    question: "Which AWS service is a relational database service that automatically handles patching and backups?",
    answers: [
      { "selection": "A", "answer": "Amazon DynamoDB" },
      { "selection": "B", "answer": "Amazon Redshift" },
      { "selection": "C", "answer": "Amazon RDS" },
      { "selection": "D", "answer": "Amazon Aurora" }
    ],
    correctanswer: "C",
    explanation: "Amazon Relational Database Service (RDS) simplifies the setup, operation, and scaling of a relational database, providing automated backups and patching.",
    domain: "Databases",
    section: "2"
  },
  {
    "question": "What is the security group's default behavior for inbound traffic?",
    "answers": [
      { "selection": "A", "answer": "Allow all inbound traffic" },
      { "selection": "B", "answer": "Deny all inbound traffic" },
      { "selection": "C", "answer": "Allow all traffic from the same security group" },
      { "selection": "D", "answer": "Allow all traffic from the same VPC" }
    ],
    "correctanswer": "B",
    "explanation": "By default, a security group denies all inbound traffic. You must explicitly create rules to allow specific traffic.",
    "domain": "Security",
    "section": "2"
  },
  {
    question: "Which service helps you to securely store and retrieve secrets like database credentials and API keys?",
    answers: [
      { "selection": "A", "answer": "AWS KMS" },
      { "selection": "B", "answer": "AWS WAF" },
      { "selection": "C", "answer": "AWS Secrets Manager" },
      { "selection": "D", "answer": "Amazon Cognito" }
    ],
    correctanswer: "C",
    explanation: "AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Which of the following is an example of an AWS managed service?",
    answers: [
      { "selection": "A", "answer": "EC2 instance running custom software" },
      { "selection": "B", "answer": "An S3 bucket" },
      { "selection": "C", "answer": "A self-managed database on an EC2 instance" },
      { "selection": "D", "answer": "A container running on a third-party service" }
    ],
    correctanswer: "B",
    explanation: "An S3 bucket is a fully-managed service where AWS handles the underlying infrastructure, security, and maintenance.",
    domain: "Cloud Concepts",
    section: "2"
  },
  {
    question: "Which AWS service can be used to set up a private, dedicated network connection from your data center to AWS?",
    answers: [
      { "selection": "A", "answer": "Amazon VPC" },
      { "selection": "B", "answer": "AWS VPN" },
      { "selection": "C", "answer": "AWS Direct Connect" },
      { "selection": "D", "answer": "Amazon Internet Gateway" }
    ],
    correctanswer: "C",
    explanation: "AWS Direct Connect provides a dedicated private network connection from your on-premises infrastructure to AWS.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "What is the primary purpose of AWS CloudFormation?",
    answers: [
      { "selection": "A", "answer": "To monitor and alert on resource metrics" },
      { "selection": "B", "answer": "To automate infrastructure provisioning" },
      { "selection": "C", "answer": "To manage user access" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    correctanswer: "B",
    explanation: "AWS CloudFormation helps you model and provision your AWS and third-party application resources using templates.",
    domain: "Automation",
    section: "2"
  },
  {
    question: "Which service allows you to migrate databases to AWS with minimal downtime?",
    answers: [
      { "selection": "A", "answer": "AWS Snowball" },
      { "selection": "B", "answer": "AWS Database Migration Service (DMS)" },
      { "selection": "C", "answer": "AWS DataSync" },
      { "selection": "D", "answer": "AWS Transfer Family" }
    ],
    correctanswer: "B",
    explanation: "AWS DMS helps you migrate databases to AWS quickly and securely, with minimal downtime to the source database.",
    domain: "Migration",
    section: "2"
  },
  {
    question: "Which AWS service is a global content delivery network (CDN)?",
    answers: [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon CloudFront" },
      { "selection": "C", "answer": "Amazon Route 53" },
      { "selection": "D", "answer": "Amazon VPC" }
    ],
    correctanswer: "B",
    explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "Which of the following is a cost-effective choice for a workload that can be interrupted and has no specific start or end time?",
    answers: [
      { "selection": "A", "answer": "Reserved Instances" },
      { "selection": "B", "answer": "On-Demand Instances" },
      { "selection": "C", "answer": "Spot Instances" },
      { "selection": "D", "answer": "Dedicated Hosts" }
    ],
    correctanswer: "C",
    explanation: "Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud and are a cost-effective option for flexible workloads.",
    domain: "Billing and Pricing",
    section: "2"
  },
  {
    question: "Which AWS service can be used to process large datasets using a framework like Hadoop?",
    answers: [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon DynamoDB" },
      { "selection": "C", "answer": "Amazon EMR" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    correctanswer: "C",
    explanation: "Amazon EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks like Apache Hadoop and Spark.",
    domain: "Analytics",
    section: "2"
  },
  {
    question: "What is the term for a logical grouping of AWS resources in a private network?",
    answers: [
      { "selection": "A", "answer": "Availability Zone" },
      { "selection": "B", "answer": "Region" },
      { "selection": "C", "answer": "Virtual Private Cloud (VPC)" },
      { "selection": "D", "answer": "Subnet" }
    ],
    correctanswer: "C",
    explanation: "A Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "Which AWS service is a data warehouse that can handle petabytes of data?",
    answers: [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon Redshift" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Aurora" }
    ],
    correctanswer: "B",
    explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service.",
    domain: "Databases",
    section: "2"
  },
  {
    question: "Which AWS service is used to create and manage keys and encryption?",
    answers: [
      { "selection": "A", "answer": "AWS IAM" },
      { "selection": "B", "answer": "AWS KMS" },
      { "selection": "C", "answer": "AWS WAF" },
      { "selection": "D", "answer": "AWS Shield" }
    ],
    correctanswer: "B",
    explanation: "AWS Key Management Service (KMS) lets you create and manage cryptographic keys and control their use across a wide range of AWS services.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Which of the following is a managed NoSQL database service?",
    answers: [
      { "selection": "A", "answer": "Amazon Aurora" },
      { "selection": "B", "answer": "Amazon RDS" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    correctanswer: "C",
    explanation: "Amazon DynamoDB is a fully managed NoSQL key-value and document database service.",
    domain: "Databases",
    section: "2"
  },
  {
    question: "What is the primary function of AWS Trusted Advisor?",
    answers: [
      { "selection": "A", "answer": "To automate infrastructure deployment" },
      { "selection": "B", "answer": "To provide real-time monitoring of resources" },
      { "selection": "C", "answer": "To provide recommendations on cost optimization, performance, and security" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    correctanswer: "C",
    explanation: "AWS Trusted Advisor provides recommendations that help you follow AWS best practices for cost optimization, security, performance, fault tolerance, and service limits.",
    domain: "Operations",
    section: "2"
  },
  {
    question: "Which AWS service allows you to automatically scale your EC2 instances up and down?",
    answers: [
      { "selection": "A", "answer": "Amazon CloudWatch" },
      { "selection": "B", "answer": "AWS Auto Scaling" },
      { "selection": "C", "answer": "Amazon SQS" },
      { "selection": "D", "answer": "Amazon SNS" }
    ],
    correctanswer: "B",
    explanation: "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
    domain: "Cloud Concepts",
    section: "2"
  },
  {
    question: "Which AWS service is a serverless compute service that lets you run code without provisioning or managing servers?",
    answers: [
      { "selection": "A", "answer": "Amazon EC2" },
      { "selection": "B", "answer": "AWS Lambda" },
      { "selection": "C", "answer": "AWS Fargate" },
      { "selection": "D", "answer": "Amazon Lightsail" }
    ],
    correctanswer: "B",
    explanation: "AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources.",
    domain: "Compute",
    section: "2"
  },
  {
    question: "Which AWS service can be used to set up a private, dedicated network connection from your data center to AWS?",
    answers: [
      { "selection": "A", "answer": "Amazon VPC" },
      { "selection": "B", "answer": "AWS VPN" },
      { "selection": "C", "answer": "AWS Direct Connect" },
      { "selection": "D", "answer": "Amazon Internet Gateway" }
    ],
    correctanswer: "C",
    explanation: "AWS Direct Connect provides a dedicated private network connection from your on-premises infrastructure to AWS.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "What is the primary purpose of AWS CloudFormation?",
    answers: [
      { "selection": "A", "answer": "To monitor and alert on resource metrics" },
      { "selection": "B", "answer": "To automate infrastructure provisioning" },
      { "selection": "C", "answer": "To manage user access" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    correctanswer: "B",
    explanation: "AWS CloudFormation helps you model and provision your AWS and third-party application resources using templates.",
    domain: "Automation",
    section: "2"
  },
  {
    question: "Which service allows you to migrate databases to AWS with minimal downtime?",
    answers: [
      { "selection": "A", "answer": "AWS Snowball" },
      { "selection": "B", "answer": "AWS Database Migration Service (DMS)" },
      { "selection": "C", "answer": "AWS DataSync" },
      { "selection": "D", "answer": "AWS Transfer Family" }
    ],
    correctanswer: "B",
    explanation: "AWS DMS helps you migrate databases to AWS quickly and securely, with minimal downtime to the source database.",
    domain: "Migration",
    section: "2"
  },
  {
    question: "Which AWS service is a global content delivery network (CDN)?",
    answers: [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon CloudFront" },
      { "selection": "C", "answer": "Amazon Route 53" },
      { "selection": "D", "answer": "Amazon VPC" }
    ],
    correctanswer: "B",
    explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "Which of the following is a cost-effective choice for a workload that can be interrupted and has no specific start or end time?",
    answers: [
      { "selection": "A", "answer": "Reserved Instances" },
      { "selection": "B", "answer": "On-Demand Instances" },
      { "selection": "C", "answer": "Spot Instances" },
      { "selection": "D", "answer": "Dedicated Hosts" }
    ],
    correctanswer: "C",
    explanation: "Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud and are a cost-effective option for flexible workloads.",
    domain: "Billing and Pricing",
    section: "2"
  },
  {
    question: "Which AWS service can be used to process large datasets using a framework like Hadoop?",
    answers: [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon DynamoDB" },
      { "selection": "C", "answer": "Amazon EMR" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    correctanswer: "C",
    explanation: "Amazon EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks like Apache Hadoop and Spark.",
    domain: "Analytics",
    section: "2"
  }]

const cloudPractitionerQuestions3= [ 
  {
    "question": "What is the term for a logical grouping of AWS resources in a private network?",
    "answers": [
      { "selection": "A", "answer": "Availability Zone" },
      { "selection": "B", "answer": "Region" },
      { "selection": "C", "answer": "Virtual Private Cloud (VPC)" },
      { "selection": "D", "answer": "Subnet" }
    ],
    "correctanswer": "C",
    "explanation": "A Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which AWS service is a data warehouse that can handle petabytes of data?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon Redshift" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Aurora" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon Redshift is a fully managed, petabyte-scale data warehouse service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to create and manage keys and encryption?",
    "answers": [
      { "selection": "A", "answer": "AWS IAM" },
      { "selection": "B", "answer": "AWS KMS" },
      { "selection": "C", "answer": "AWS WAF" },
      { "selection": "D", "answer": "AWS Shield" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Key Management Service (KMS) lets you create and manage cryptographic keys and control their use across a wide range of AWS services.",
    "domain": "Security",
    "section": "2"
  },
  {
    "question": "Which of the following is a managed NoSQL database service?",
    "answers": [
      { "selection": "A", "answer": "Amazon Aurora" },
      { "selection": "B", "answer": "Amazon RDS" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon DynamoDB is a fully managed NoSQL key-value and document database service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "What is the primary function of AWS Trusted Advisor?",
    "answers": [
      { "selection": "A", "answer": "To automate infrastructure deployment" },
      { "selection": "B", "answer": "To provide real-time monitoring of resources" },
      { "selection": "C", "answer": "To provide recommendations on cost optimization, performance, and security" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Trusted Advisor provides recommendations that help you follow AWS best practices for cost optimization, security, performance, fault tolerance, and service limits.",
    "domain": "Operations",
    "section": "2"
  },
  {
    "question": "Which AWS service allows you to automatically scale your EC2 instances up and down?",
    "answers": [
      { "selection": "A", "answer": "Amazon CloudWatch" },
      { "selection": "B", "answer": "AWS Auto Scaling" },
      { "selection": "C", "answer": "Amazon SQS" },
      { "selection": "D", "answer": "Amazon SNS" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
    "domain": "Cloud Concepts",
    "section": "2"
  },
  {
    "question": "Which AWS service is a serverless compute service that lets you run code without provisioning or managing servers?",
    "answers": [
      { "selection": "A", "answer": "Amazon EC2" },
      { "selection": "B", "answer": "AWS Lambda" },
      { "selection": "C", "answer": "AWS Fargate" },
      { "selection": "D", "answer": "Amazon Lightsail" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources.",
    "domain": "Compute",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to set up a private, dedicated network connection from your data center to AWS?",
    "answers": [
      { "selection": "A", "answer": "Amazon VPC" },
      { "selection": "B", "answer": "AWS VPN" },
      { "selection": "C", "answer": "AWS Direct Connect" },
      { "selection": "D", "answer": "Amazon Internet Gateway" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Direct Connect provides a dedicated private network connection from your on-premises infrastructure to AWS.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "What is the primary purpose of AWS CloudFormation?",
    "answers": [
      { "selection": "A", "answer": "To monitor and alert on resource metrics" },
      { "selection": "B", "answer": "To automate infrastructure provisioning" },
      { "selection": "C", "answer": "To manage user access" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "B",
    "explanation": "AWS CloudFormation helps you model and provision your AWS and third-party application resources using templates.",
    "domain": "Automation",
    "section": "2"
  },
  {
    "question": "Which service allows you to migrate databases to AWS with minimal downtime?",
    "answers": [
      { "selection": "A", "answer": "AWS Snowball" },
      { "selection": "B", "answer": "AWS Database Migration Service (DMS)" },
      { "selection": "C", "answer": "AWS DataSync" },
      { "selection": "D", "answer": "AWS Transfer Family" }
    ],
    "correctanswer": "B",
    "explanation": "AWS DMS helps you migrate databases to AWS quickly and securely, with minimal downtime to the source database.",
    "domain": "Migration",
    "section": "2"
  },
  {
    "question": "Which AWS service is a global content delivery network (CDN)?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon CloudFront" },
      { "selection": "C", "answer": "Amazon Route 53" },
      { "selection": "D", "answer": "Amazon VPC" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which of the following is a cost-effective choice for a workload that can be interrupted and has no specific start or end time?",
    "answers": [
      { "selection": "A", "answer": "Reserved Instances" },
      { "selection": "B", "answer": "On-Demand Instances" },
      { "selection": "C", "answer": "Spot Instances" },
      { "selection": "D", "answer": "Dedicated Hosts" }
    ],
    "correctanswer": "C",
    "explanation": "Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud and are a cost-effective option for flexible workloads.",
    "domain": "Billing and Pricing",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to process large datasets using a framework like Hadoop?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon DynamoDB" },
      { "selection": "C", "answer": "Amazon EMR" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks like Apache Hadoop and Spark.",
    "domain": "Analytics",
    "section": "2"
  },
  {
    "question": "What is the term for a logical grouping of AWS resources in a private network?",
    "answers": [
      { "selection": "A", "answer": "Availability Zone" },
      { "selection": "B", "answer": "Region" },
      { "selection": "C", "answer": "Virtual Private Cloud (VPC)" },
      { "selection": "D", "answer": "Subnet" }
    ],
    "correctanswer": "C",
    "explanation": "A Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which AWS service is a data warehouse that can handle petabytes of data?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon Redshift" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Aurora" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon Redshift is a fully managed, petabyte-scale data warehouse service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to create and manage keys and encryption?",
    "answers": [
      { "selection": "A", "answer": "AWS IAM" },
      { "selection": "B", "answer": "AWS KMS" },
      { "selection": "C", "answer": "AWS WAF" },
      { "selection": "D", "answer": "AWS Shield" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Key Management Service (KMS) lets you create and manage cryptographic keys and control their use across a wide range of AWS services.",
    "domain": "Security",
    "section": "2"
  },
  {
    "question": "Which of the following is a managed NoSQL database service?",
    "answers": [
      { "selection": "A", "answer": "Amazon Aurora" },
      { "selection": "B", "answer": "Amazon RDS" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon DynamoDB is a fully managed NoSQL key-value and document database service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "What is the primary function of AWS Trusted Advisor?",
    "answers": [
      { "selection": "A", "answer": "To automate infrastructure deployment" },
      { "selection": "B", "answer": "To provide real-time monitoring of resources" },
      { "selection": "C", "answer": "To provide recommendations on cost optimization, performance, and security" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Trusted Advisor provides recommendations that help you follow AWS best practices for cost optimization, security, performance, fault tolerance, and service limits.",
    "domain": "Operations",
    "section": "2"
  },
  {
    "question": "Which AWS service allows you to automatically scale your EC2 instances up and down?",
    "answers": [
      { "selection": "A", "answer": "Amazon CloudWatch" },
      { "selection": "B", "answer": "AWS Auto Scaling" },
      { "selection": "C", "answer": "Amazon SQS" },
      { "selection": "D", "answer": "Amazon SNS" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
    "domain": "Cloud Concepts",
    "section": "2"
  },
  {
    "question": "Which AWS service is a serverless compute service that lets you run code without provisioning or managing servers?",
    "answers": [
      { "selection": "A", "answer": "Amazon EC2" },
      { "selection": "B", "answer": "AWS Lambda" },
      { "selection": "C", "answer": "AWS Fargate" },
      { "selection": "D", "answer": "Amazon Lightsail" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources.",
    "domain": "Compute",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to set up a private, dedicated network connection from your data center to AWS?",
    "answers": [
      { "selection": "A", "answer": "Amazon VPC" },
      { "selection": "B", "answer": "AWS VPN" },
      { "selection": "C", "answer": "AWS Direct Connect" },
      { "selection": "D", "answer": "Amazon Internet Gateway" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Direct Connect provides a dedicated private network connection from your on-premises infrastructure to AWS.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "What is the primary purpose of AWS CloudFormation?",
    "answers": [
      { "selection": "A", "answer": "To monitor and alert on resource metrics" },
      { "selection": "B", "answer": "To automate infrastructure provisioning" },
      { "selection": "C", "answer": "To manage user access" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "B",
    "explanation": "AWS CloudFormation helps you model and provision your AWS and third-party application resources using templates.",
    "domain": "Automation",
    "section": "2"
  },
  {
    "question": "Which service allows you to migrate databases to AWS with minimal downtime?",
    "answers": [
      { "selection": "A", "answer": "AWS Snowball" },
      { "selection": "B", "answer": "AWS Database Migration Service (DMS)" },
      { "selection": "C", "answer": "AWS DataSync" },
      { "selection": "D", "answer": "AWS Transfer Family" }
    ],
    "correctanswer": "B",
    "explanation": "AWS DMS helps you migrate databases to AWS quickly and securely, with minimal downtime to the source database.",
    "domain": "Migration",
    "section": "2"
  },
  {
    "question": "Which AWS service is a global content delivery network (CDN)?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon CloudFront" },
      { "selection": "C", "answer": "Amazon Route 53" },
      { "selection": "D", "answer": "Amazon VPC" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which of the following is a cost-effective choice for a workload that can be interrupted and has no specific start or end time?",
    "answers": [
      { "selection": "A", "answer": "Reserved Instances" },
      { "selection": "B", "answer": "On-Demand Instances" },
      { "selection": "C", "answer": "Spot Instances" },
      { "selection": "D", "answer": "Dedicated Hosts" }
    ],
    "correctanswer": "C",
    "explanation": "Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud and are a cost-effective option for flexible workloads.",
    "domain": "Billing and Pricing",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to process large datasets using a framework like Hadoop?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon DynamoDB" },
      { "selection": "C", "answer": "Amazon EMR" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks like Apache Hadoop and Spark.",
    "domain": "Analytics",
    "section": "2"
  },
  {
    "question": "What is the term for a logical grouping of AWS resources in a private network?",
    "answers": [
      { "selection": "A", "answer": "Availability Zone" },
      { "selection": "B", "answer": "Region" },
      { "selection": "C", "answer": "Virtual Private Cloud (VPC)" },
      { "selection": "D", "answer": "Subnet" }
    ],
    "correctanswer": "C",
    "explanation": "A Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which AWS service is a data warehouse that can handle petabytes of data?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon Redshift" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Aurora" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon Redshift is a fully managed, petabyte-scale data warehouse service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to create and manage keys and encryption?",
    "answers": [
      { "selection": "A", "answer": "AWS IAM" },
      { "selection": "B", "answer": "AWS KMS" },
      { "selection": "C", "answer": "AWS WAF" },
      { "selection": "D", "answer": "AWS Shield" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Key Management Service (KMS) lets you create and manage cryptographic keys and control their use across a wide range of AWS services.",
    "domain": "Security",
    "section": "2"
  },
  {
    "question": "Which of the following is a managed NoSQL database service?",
    "answers": [
      { "selection": "A", "answer": "Amazon Aurora" },
      { "selection": "B", "answer": "Amazon RDS" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon DynamoDB is a fully managed NoSQL key-value and document database service.",
    "domain": "Databases",
    "section": "2"
  }]
const cloudPractitionerQuestions4= [ 
      {
    "question": "Which AWS service can be used to process large datasets using a framework like Hadoop?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon DynamoDB" },
      { "selection": "C", "answer": "Amazon EMR" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks like Apache Hadoop and Spark.",
    "domain": "Analytics",
    "section": "2"
  },
  {
    "question": "What is the primary function of AWS Trusted Advisor?",
    "answers": [
      { "selection": "A", "answer": "To automate infrastructure deployment" },
      { "selection": "B", "answer": "To provide real-time monitoring of resources" },
      { "selection": "C", "answer": "To provide recommendations on cost optimization, performance, and security" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Trusted Advisor provides recommendations that help you follow AWS best practices for cost optimization, security, performance, fault tolerance, and service limits.",
    "domain": "Operations",
    "section": "2"
  },
  {
    "question": "Which AWS service allows you to automatically scale your EC2 instances up and down?",
    "answers": [
      { "selection": "A", "answer": "Amazon CloudWatch" },
      { "selection": "B", "answer": "AWS Auto Scaling" },
      { "selection": "C", "answer": "Amazon SQS" },
      { "selection": "D", "answer": "Amazon SNS" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
    "domain": "Cloud Concepts",
    "section": "2"
  },
  {
    "question": "Which AWS service is a serverless compute service that lets you run code without provisioning or managing servers?",
    "answers": [
      { "selection": "A", "answer": "Amazon EC2" },
      { "selection": "B", "answer": "AWS Lambda" },
      { "selection": "C", "answer": "AWS Fargate" },
      { "selection": "D", "answer": "Amazon Lightsail" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources.",
    "domain": "Compute",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to set up a private, dedicated network connection from your data center to AWS?",
    "answers": [
      { "selection": "A", "answer": "Amazon VPC" },
      { "selection": "B", "answer": "AWS VPN" },
      { "selection": "C", "answer": "AWS Direct Connect" },
      { "selection": "D", "answer": "Amazon Internet Gateway" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Direct Connect provides a dedicated private network connection from your on-premises infrastructure to AWS.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "What is the primary purpose of AWS CloudFormation?",
    "answers": [
      { "selection": "A", "answer": "To monitor and alert on resource metrics" },
      { "selection": "B", "answer": "To automate infrastructure provisioning" },
      { "selection": "C", "answer": "To manage user access" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "B",
    "explanation": "AWS CloudFormation helps you model and provision your AWS and third-party application resources using templates.",
    "domain": "Automation",
    "section": "2"
  },
  {
    "question": "Which service allows you to migrate databases to AWS with minimal downtime?",
    "answers": [
      { "selection": "A", "answer": "AWS Snowball" },
      { "selection": "B", "answer": "AWS Database Migration Service (DMS)" },
      { "selection": "C", "answer": "AWS DataSync" },
      { "selection": "D", "answer": "AWS Transfer Family" }
    ],
    "correctanswer": "B",
    "explanation": "AWS DMS helps you migrate databases to AWS quickly and securely, with minimal downtime to the source database.",
    "domain": "Migration",
    "section": "2"
  },
  {
    "question": "Which AWS service is a global content delivery network (CDN)?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon CloudFront" },
      { "selection": "C", "answer": "Amazon Route 53" },
      { "selection": "D", "answer": "Amazon VPC" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which of the following is a cost-effective choice for a workload that can be interrupted and has no specific start or end time?",
    "answers": [
      { "selection": "A", "answer": "Reserved Instances" },
      { "selection": "B", "answer": "On-Demand Instances" },
      { "selection": "C", "answer": "Spot Instances" },
      { "selection": "D", "answer": "Dedicated Hosts" }
    ],
    "correctanswer": "C",
    "explanation": "Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud and are a cost-effective option for flexible workloads.",
    "domain": "Billing and Pricing",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to process large datasets using a framework like Hadoop?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon DynamoDB" },
      { "selection": "C", "answer": "Amazon EMR" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks like Apache Hadoop and Spark.",
    "domain": "Analytics",
    "section": "2"
  },
  {
    "question": "What is the term for a logical grouping of AWS resources in a private network?",
    "answers": [
      { "selection": "A", "answer": "Availability Zone" },
      { "selection": "B", "answer": "Region" },
      { "selection": "C", "answer": "Virtual Private Cloud (VPC)" },
      { "selection": "D", "answer": "Subnet" }
    ],
    "correctanswer": "C",
    "explanation": "A Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which AWS service is a data warehouse that can handle petabytes of data?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon Redshift" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Aurora" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon Redshift is a fully managed, petabyte-scale data warehouse service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to create and manage keys and encryption?",
    "answers": [
      { "selection": "A", "answer": "AWS IAM" },
      { "selection": "B", "answer": "AWS KMS" },
      { "selection": "C", "answer": "AWS WAF" },
      { "selection": "D", "answer": "AWS Shield" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Key Management Service (KMS) lets you create and manage cryptographic keys and control their use across a wide range of AWS services.",
    "domain": "Security",
    "section": "2"
  },
  {
    "question": "Which of the following is a managed NoSQL database service?",
    "answers": [
      { "selection": "A", "answer": "Amazon Aurora" },
      { "selection": "B", "answer": "Amazon RDS" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon DynamoDB is a fully managed NoSQL key-value and document database service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "What is the primary function of AWS Trusted Advisor?",
    "answers": [
      { "selection": "A", "answer": "To automate infrastructure deployment" },
      { "selection": "B", "answer": "To provide real-time monitoring of resources" },
      { "selection": "C", "answer": "To provide recommendations on cost optimization, performance, and security" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Trusted Advisor provides recommendations that help you follow AWS best practices for cost optimization, security, performance, fault tolerance, and service limits.",
    "domain": "Operations",
    "section": "2"
  },
  {
    "question": "Which AWS service allows you to automatically scale your EC2 instances up and down?",
    "answers": [
      { "selection": "A", "answer": "Amazon CloudWatch" },
      { "selection": "B", "answer": "AWS Auto Scaling" },
      { "selection": "C", "answer": "Amazon SQS" },
      { "selection": "D", "answer": "Amazon SNS" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
    "domain": "Cloud Concepts",
    "section": "2"
  },
  {
    "question": "Which AWS service is a serverless compute service that lets you run code without provisioning or managing servers?",
    "answers": [
      { "selection": "A", "answer": "Amazon EC2" },
      { "selection": "B", "answer": "AWS Lambda" },
      { "selection": "C", "answer": "AWS Fargate" },
      { "selection": "D", "answer": "Amazon Lightsail" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources.",
    "domain": "Compute",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to set up a private, dedicated network connection from your data center to AWS?",
    "answers": [
      { "selection": "A", "answer": "Amazon VPC" },
      { "selection": "B", "answer": "AWS VPN" },
      { "selection": "C", "answer": "AWS Direct Connect" },
      { "selection": "D", "answer": "Amazon Internet Gateway" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Direct Connect provides a dedicated private network connection from your on-premises infrastructure to AWS.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "What is the primary purpose of AWS CloudFormation?",
    "answers": [
      { "selection": "A", "answer": "To monitor and alert on resource metrics" },
      { "selection": "B", "answer": "To automate infrastructure provisioning" },
      { "selection": "C", "answer": "To manage user access" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "B",
    "explanation": "AWS CloudFormation helps you model and provision your AWS and third-party application resources using templates.",
    "domain": "Automation",
    "section": "2"
  },
  {
    "question": "Which service allows you to migrate databases to AWS with minimal downtime?",
    "answers": [
      { "selection": "A", "answer": "AWS Snowball" },
      { "selection": "B", "answer": "AWS Database Migration Service (DMS)" },
      { "selection": "C", "answer": "AWS DataSync" },
      { "selection": "D", "answer": "AWS Transfer Family" }
    ],
    "correctanswer": "B",
    "explanation": "AWS DMS helps you migrate databases to AWS quickly and securely, with minimal downtime to the source database.",
    "domain": "Migration",
    "section": "2"
  },
  {
    "question": "Which AWS service is a global content delivery network (CDN)?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon CloudFront" },
      { "selection": "C", "answer": "Amazon Route 53" },
      { "selection": "D", "answer": "Amazon VPC" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which of the following is a cost-effective choice for a workload that can be interrupted and has no specific start or end time?",
    "answers": [
      { "selection": "A", "answer": "Reserved Instances" },
      { "selection": "B", "answer": "On-Demand Instances" },
      { "selection": "C", "answer": "Spot Instances" },
      { "selection": "D", "answer": "Dedicated Hosts" }
    ],
    "correctanswer": "C",
    "explanation": "Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud and are a cost-effective option for flexible workloads.",
    "domain": "Billing and Pricing",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to process large datasets using a framework like Hadoop?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon DynamoDB" },
      { "selection": "C", "answer": "Amazon EMR" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks like Apache Hadoop and Spark.",
    "domain": "Analytics",
    "section": "2"
  },
  {
    "question": "What is the term for a logical grouping of AWS resources in a private network?",
    "answers": [
      { "selection": "A", "answer": "Availability Zone" },
      { "selection": "B", "answer": "Region" },
      { "selection": "C", "answer": "Virtual Private Cloud (VPC)" },
      { "selection": "D", "answer": "Subnet" }
    ],
    "correctanswer": "C",
    "explanation": "A Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
    "domain": "Networking",
    "section": "2"
  },
  {
    "question": "Which AWS service is a data warehouse that can handle petabytes of data?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon Redshift" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Aurora" }
    ],
    "correctanswer": "B",
    "explanation": "Amazon Redshift is a fully managed, petabyte-scale data warehouse service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to create and manage keys and encryption?",
    "answers": [
      { "selection": "A", "answer": "AWS IAM" },
      { "selection": "B", "answer": "AWS KMS" },
      { "selection": "C", "answer": "AWS WAF" },
      { "selection": "D", "answer": "AWS Shield" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Key Management Service (KMS) lets you create and manage cryptographic keys and control their use across a wide range of AWS services.",
    "domain": "Security",
    "section": "2"
  },
  {
    "question": "Which of the following is a managed NoSQL database service?",
    "answers": [
      { "selection": "A", "answer": "Amazon Aurora" },
      { "selection": "B", "answer": "Amazon RDS" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explanation": "Amazon DynamoDB is a fully managed NoSQL key-value and document database service.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "What is the primary function of AWS Trusted Advisor?",
    "answers": [
      { "selection": "A", "answer": "To automate infrastructure deployment" },
      { "selection": "B", "answer": "To provide real-time monitoring of resources" },
      { "selection": "C", "answer": "To provide recommendations on cost optimization, performance, and security" },
      { "selection": "D", "answer": "To protect against DDoS attacks" }
    ],
    "correctanswer": "C",
    "explanation": "AWS Trusted Advisor provides recommendations that help you follow AWS best practices for cost optimization, security, performance, fault tolerance, and service limits.",
    "domain": "Operations",
    "section": "2"
  },
  {
    "question": "Which AWS service allows you to automatically scale your EC2 instances up and down?",
    "answers": [
      { "selection": "A", "answer": "Amazon CloudWatch" },
      { "selection": "B", "answer": "AWS Auto Scaling" },
      { "selection": "C", "answer": "Amazon SQS" },
      { "selection": "D", "answer": "Amazon SNS" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
    "domain": "Cloud Concepts",
    "section": "2"
  },
  {
    "question": "Which AWS service is a serverless compute service that lets you run code without provisioning or managing servers?",
    "answers": [
      { "selection": "A", "answer": "Amazon EC2" },
      { "selection": "B", "answer": "AWS Lambda" },
      { "selection": "C", "answer": "AWS Fargate" },
      { "selection": "D", "answer": "Amazon Lightsail" }
    ],
    "correctanswer": "B",
    "explanation": "AWS Lambda is a serverless compute service that runs code in response to events and automatically manages the underlying compute resources.",
    "domain": "Compute",
    "section": "2"
  }
];
const aiPractitionerQuestions1 = [
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
    domain: "Machine Learning",
    section:"1"
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
    domain: "Conversational AI",
    section:"1"
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
    domain: "Conversational AI",
    section:"1"
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
    domain: "Computer Vision",section:"1"
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
    domain: "Natural Language Processing (NLP)",
    section:"1"
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
    domain: "Speech Recognition",section:"1"
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
    domain: "Natural Language Processing (NLP)",section:"1"
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
    domain: "Forecasting",section:"1"
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
    domain: "Document Analysis",section:"1"
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
    domain: "Personalization",section:"1"
  }
];
const saurenaQuestions = [
  {
    question: "A company has developed public APIs hosted in Amazon EC2 instances behind an Elastic Load Balancer. The APIs will be used by clients from on-premises networks that require whitelisting IP addresses. What should the Solutions Architect do to meet this requirement?",
    answers: [
      { selection: "A", answer: "Associate an Elastic IP address to an Application Load Balancer." },
      { selection: "B", answer: "Create a CloudFront distribution whose origin points to the private IP addresses of your web servers." },
      { selection: "C", answer: "Associate an Elastic IP address to a Network Load Balancer." },
      { selection: "D", answer: "Create an Alias Record in Route 53 that maps to the DNS name of the load balancer." }
    ],
    correctanswer: "C",
    explantion: "Network Load Balancers support static IPs via Elastic IPs, which can be whitelisted by clients' firewalls. ALBs and CloudFront do not offer this capability.",
    domain: "Availability",
    section: "1"
  },
  {
    question: "You need to grant temporary AWS console access to an auditor without modifying existing IAM users. What is the most secure solution?",
    answers: [
      { selection: "A", answer: "Create a new IAM user with auditor permissions and share the credentials." },
      { selection: "B", answer: "Create an IAM role with the necessary permissions and generate temporary STS credentials." },
      { selection: "C", answer: "Share an existing IAM user's credentials." },
      { selection: "D", answer: "Create an EC2 instance with an IAM role and let the auditor connect via that instance." }
    ],
    correctanswer: "B",
    explantion: "STS roles provide temporary, scoped access without sharing permanent credentials, which is more secure for audits.",
    domain: "Security",
    section: "1"
  },
  {
    question: "A company runs an application on EC2 behind an ALB in us-east-1, and they want to serve global users with lower latency and better availability. What approach should a Solutions Architect recommend?",
    answers: [
      { selection: "A", answer: "Use Route 53 Geolocation routing to direct traffic to a single ALB in us-east-1." },
      { selection: "B", answer: "Deploy the application in multiple Regions behind regional ALBs and use Route 53 latency-based routing." },
      { selection: "C", answer: "Configure CloudFront to cache API responses from the us-east-1 ALB." },
      { selection: "D", answer: "Enable cross-Region replication on the ALB." }
    ],
    correctanswer: "B",
    explantion: "Deploying in multiple regions with latency-based routing ensures low-latency and high-availability for global users.",
    domain: "Resilience",
    section: "1"
  },
  {
    question: "Your company must encrypt data at rest in S3, but you also want full control of the keys. Which option provides that?",
    answers: [
      { selection: "A", answer: "Use SSE-S3 (AES-256) encryption." },
      { selection: "B", answer: "Use SSE-KMS with a KMS CMK that AWS manages." },
      { selection: "C", answer: "Use SSE-KMS with a customer-managed CMK." },
      { selection: "D", answer: "Encrypt the objects before uploading to S3 using client-side encryption." }
    ],
    correctanswer: "C",
    explantion: "Customer-managed CMKs give you full control over key policies, rotation, and use.",
    domain: "Security",
    section: "1"
  },
  {
    question: "An application requires short-lived credentials to access DynamoDB. What is the most secure method to provide these?",
    answers: [
      { selection: "A", answer: "Embed IAM user credentials in the application code." },
      { selection: "B", answer: "Use an IAM role with instance profile on the EC2 host." },
      { selection: "C", answer: "Use static access keys with restricted permissions." },
      { selection: "D", answer: "Use AWS Cognito user pool credentials." }
    ],
    correctanswer: "B",
    explantion: "IAM roles with instance profiles provide automatic, short-lived, and rotated credentials—more secure than hard-coded keys.",
    domain: "Security",
    section: "1"
  },
  {
    question: "Your application runs in a VPC and needs to access the internet. You want to ensure it can’t be accessed from the internet. What is the safest approach?",
    answers: [
      { selection: "A", answer: "Place instances in a private subnet and route through a NAT Gateway." },
      { selection: "B", answer: "Assign public IPs to instances but block traffic via security groups." },
      { selection: "C", answer: "Place instances in a public subnet with a default route to an IGW." },
      { selection: "D", answer: "Use Lambda functions with public access disabled." }
    ],
    correctanswer: "A",
    explantion: "A private subnet with NAT Gateway allows outbound access while preventing inbound internet connections.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "Which storage class is most cost-effective for storing long-term, infrequently accessed data that requires retrieval within minutes?",
    answers: [
      { selection: "A", answer: "S3 Standard-IA." },
      { selection: "B", answer: "S3 Glacier Instant Retrieval." },
      { selection: "C", answer: "S3 Glacier Flexible Retrieval (formerly S3 Glacier)." },
      { selection: "D", answer: "S3 One Zone-IA." }
    ],
    correctanswer: "B",
    explantion: "Glacier Instant Retrieval is optimized for long-term storage with instant retrieval at lower cost than Standard-IA.",
    domain: "Cost Optimization",
    section: "1"
  },
  {
    question: "To reduce costs, a Solutions Architect wants to reserve capacity for EC2 workloads that run continuously year-round. What’s the best option?",
    answers: [
      { selection: "A", answer: "Use On-Demand instances." },
      { selection: "B", answer: "Use Spot Instances only." },
      { selection: "C", answer: "Purchase Standard Reserved Instances." },
      { selection: "D", answer: "Use Savings Plans (Compute-based)." }
    ],
    correctanswer: "D",
    explantion: "Compute Savings Plans offer the most flexibility across AWS services and instance types, with significant savings.",
    domain: "Cost Optimization",
    section: "1"
  },
  {
    question: "An application writes logs to S3. How do you set up a system to automatically delete objects older than 90 days?",
    answers: [
      { selection: "A", answer: "Use an S3 Lifecycle configuration to transition objects to Glacier after 90 days." },
      { selection: "B", answer: "Use an S3 Lifecycle rule to expire objects after 90 days." },
      { selection: "C", answer: "Use Lambda function triggered by event to delete older objects." },
      { selection: "D", answer: "Enable versioning and manually delete versions older than 90 days." }
    ],
    correctanswer: "B",
    explantion: "S3 Lifecycle policies can automatically expire (delete) objects after a specified period, such as 90 days.",
    domain: "Storage",
    section: "1"
  },
  {
    question: "Your VPC spans two Availability Zones with public and private subnets and NAT Gateways. You notice high NAT egress costs. What’s a more cost-efficient alternative for outbound internet access from private subnets?",
    answers: [
      { selection: "A", answer: "Use a NAT Instance instead of NAT Gateway." },
      { selection: "B", answer: "Place the resources in public subnets." },
      { selection: "C", answer: "Use VPC endpoints for AWS services." },
      { selection: "D", answer: "Create egress-only Internet Gateway." }
    ],
    correctanswer: "C",
    explantion: "VPC endpoints (gateway or interface) avoid internet routing and NAT costs when accessing AWS services, reducing cost significantly.",
    domain: "Cost Optimization",
    section: "1"
  },
  {
    question: "An application uses RDS for relational data. You need to support read scaling without modifying the application. What should you do?",
    answers: [
      { selection: "A", answer: "Scale up the RDS instance to a larger type." },
      { selection: "B", answer: "Create read replicas." },
      { selection: "C", answer: "Switch to a Multi-AZ deployment." },
      { selection: "D", answer: "Use Aurora Serverless." }
    ],
    correctanswer: "B",
    explantion: "Read replicas allow horizontal read scaling with no changes required in the application, assuming it can handle replica endpoints.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "Your application needs to store user session data with very low latency. What’s the most appropriate solution?",
    answers: [
      { selection: "A", answer: "Store in DynamoDB with strong consistency." },
      { selection: "B", answer: "Use ElastiCache (Redis) in the VPC." },
      { selection: "C", answer: "Use SQS with FIFO queue." },
      { selection: "D", answer: "Store in S3 with Intelligent-Tiering." }
    ],
    correctanswer: "B",
    explantion: "ElastiCache Redis provides sub-millisecond latency for session data—ideal for user sessions compared to DynamoDB or S3.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "You need to automate deployments of a Dockerized application to ECS Fargate with minimal effort. What AWS service should you use?",
    answers: [
      { selection: "A", answer: "Use EC2 Auto Scaling with Docker installed." },
      { selection: "B", answer: "Use AWS Elastic Beanstalk for Docker." },
      { selection: "C", answer: "Use CodeDeploy with EC2 Fleet." },
      { selection: "D", answer: "Use AWS Batch." }
    ],
    correctanswer: "B",
    explantion: "Elastic Beanstalk supports Docker deployments with minimal configuration and automates infrastructure management for ECS Fargate.",
    domain: "Deployment",
    section: "1"
  },
  {
    question: "A critical application is deployed in two AZs in us-west-2. You want to ensure standby readiness in us-east-1. What DR strategy should you use?",
    answers: [
      { selection: "A", answer: "Backup and restore." },
      { selection: "B", answer: "Pilot Light." },
      { selection: "C", answer: "Warm Standby." },
      { selection: "D", answer: "Multi-Site Active/Active." }
    ],
    correctanswer: "C",
    explantion: "Warm Standby keeps a scaled-down version running in the DR region, ready to scale up quickly when needed.",
    domain: "Resilience",
    section: "1"
  },
  {
    question: "Users need to authenticate to your application using social identity providers like Google and Facebook. Which solution should you use?",
    answers: [
      { selection: "A", answer: "Create IAM users for each social login." },
      { selection: "B", answer: "Use Cognito Identity Pools directly." },
      { selection: "C", answer: "Use Cognito User Pools with Social Identity Federation." },
      { selection: "D", answer: "Use STS AssumeRole with external identity provider." }
    ],
    correctanswer: "C",
    explantion: "Cognito User Pools support social identity federation and handle user authentication flows easily.",
    domain: "Security",
    section: "1"
  },
  {
    question: "Your Lambda function writes to DynamoDB. You want errors to be retried automatically with exponential backoff. How do you configure this?",
    answers: [
      { selection: "A", answer: "Set retries in Lambda function code." },
      { selection: "B", answer: "Configure Lambda’s built-in retry policy (2 retries)." },
      { selection: "C", answer: "Use Step Functions for retries." },
      { selection: "D", answer: "Wrap DynamoDB call in a loop." }
    ],
    correctanswer: "B",
    explantion: "Lambda’s invocation model includes automatic retries; customizing retry logic isn’t needed for simple cases.",
    domain: "Resilience",
    section: "1"
  },
  {
    question: "To secure S3 bucket access to only your VPC endpoints, what’s the best approach?",
    answers: [
      { selection: "A", answer: "Use bucket ACLs to allow only VPC endpoint IAM role." },
      { selection: "B", answer: "Use a Resource-based policy that allows requests only from the VPC endpoint." },
      { selection: "C", answer: "Enable block public access and keep objects private." },
      { selection: "D", answer: "Use IAM policies attached to roles used in your VPC." }
    ],
    correctanswer: "B",
    explantion: "Resource-based policies on S3 buckets can conditionally allow access only from specific VPC endpoints.",
    domain: "Security",
    section: "1"
  },
  {
    question: "An organization wants to deploy infrastructure as code with the ability to track changes and rollback. What service fits best?",
    answers: [
      { selection: "A", answer: "Use CloudFormation with change sets." },
      { selection: "B", answer: "Use Elastic Beanstalk." },
      { selection: "C", answer: "Use Terraform only." },
      { selection: "D", answer: "Use manual console provisioning." }
    ],
    correctanswer: "A",
    explantion: "CloudFormation with change sets provides versioned infrastructure changes and reversible deployments.",
    domain: "Deployment",
    section: "1"
  },
  {
    question: "Your EC2 application requires elevated permissions only during execution at startup. What’s the most secure way to grant this?",
    answers: [
      { selection: "A", answer: "Assign long-lived username and password to the instance." },
      { selection: "B", answer: "Attach an IAM role with the required permissions to the instance profile." },
      { selection: "C", answer: "Store IAM user keys on the instance." },
      { selection: "D", answer: "Use AWS temporary credentials via the CLI." }
    ],
    correctanswer: "B",
    explantion: "IAM roles on instance profiles securely grant temporary credentials and avoid long-lived credentials on instances.",
    domain: "Security",
    section: "1"
  },
  {
    question: "You want to reduce data transfer charges when uploading large files from on-premises to AWS. Which service should you use?",
    answers: [
      { selection: "A", answer: "AWS DataSync with VPC endpoint." },
      { selection: "B", answer: "S3 multipart upload over public internet." },
      { selection: "C", answer: "AWS Storage Gateway using Tape Gateway." },
      { selection: "D", answer: "Use SSH to upload to EC2 and then move to S3." }
    ],
    correctanswer: "A",
    explantion: "DataSync automates and optimizes transfers from on-prem to AWS, and VPC endpoints keep traffic inside AWS without egress charges.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "A global application experiences high write traffic to DynamoDB. You want to minimize costs and avoid throttling. What should you do?",
    answers: [
      { selection: "A", answer: "Increase provisioned throughput arbitrarily." }, 
      { selection: "B", answer: "Enable on-demand capacity mode." },
      { selection: "C", answer: "Use global tables and provisioned mode." },
      { selection: "D", answer: "Batch writes manually to avoid hot partitions." }
    ],
    correctanswer: "B",
    explantion: "On-demand capacity mode scales automatically with traffic, avoiding throttling and erratic cost spikes.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "To enable continuous deployment with minimal configuration, which AWS service is best for containerized applications?",
    answers: [
      { selection: "A", answer: "CodePipeline with manual approval only." },
      { selection: "B", answer: "CodeDeploy with blue/green." },
      { selection: "C", answer: "AWS Fargate with manual deploys." },
      { selection: "D", answer: "AWS CodePipeline integrated with AWS CodeBuild and ECS." }
    ],
    correctanswer: "D",
    explantion: "This setup supports fully automated continuous deployment of containers to ECS Fargate.",
    domain: "Deployment",
    section: "1"
  },
  {
    question: "Your MySQL RDS database is being accessed across AZs, resulting in latency. How can you reduce it?",
    answers: [
      { selection: "A", answer: "Enable Multi-AZ deployment." },
      { selection: "B", answer: "Use Read Replica in same AZ as application." },
      { selection: "C", answer: "Switch to Aurora MySQL with read replicas." },
      { selection: "D", answer: "Increase instance class to reduce latency." }
    ],
    correctanswer: "C",
    explantion: "Aurora offers lower-latency reads and faster cluster failovers than standard RDS, improving performance across AZs.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "To ensure deployment traceability for compliance, which option should you enable?",
    answers: [
      { selection: "A", answer: "Enable CloudTrail on write-only mode." },
      { selection: "B", answer: "Enable CloudTrail logging across all regions." },
      { selection: "C", answer: "Use S3 access logs only." },
      { selection: "D", answer: "Rely on console history." }
    ],
    correctanswer: "B",
    explantion: "CloudTrail with multi-region logging ensures full audit trace for deployments across all AWS regions.",
    domain: "Governance",
    section: "1"
  },
  {
    question: "Users need to upload files securely to S3 without exposing AWS credentials. What’s the recommended solution?",
    answers: [
      { selection: "A", answer: "Provide AWS credentials to the client." },
      { selection: "B", answer: "Use presigned S3 URLs." },
      { selection: "C", answer: "Expose S3 list and put APIs directly." },
      { selection: "D", answer: "Use Transfer Acceleration." }
    ],
    correctanswer: "B",
    explantion: "Presigned URLs enable secure, temporary uploads without exposing credentials.",
    domain: "Security",
    section: "1"
  },
  {
    question: "Your application must authenticate with least privilege and rotate credentials regularly. What’s the best approach?",
    answers: [
      { selection: "A", answer: "Use root user with MFA." },
      { selection: "B", answer: "Use long-lived IAM user credentials." },
      { selection: "C", answer: "Use IAM roles with least privilege." },
      { selection: "D", answer: "Embed credentials in environment variables." }
    ],
    correctanswer: "C",
    explantion: "IAM roles enforce least privilege and automatically handle credential rotation, enhancing security.",
    domain: "Security",
    section: "1"
  },
  {
    question: "You need to restrict outbound internet access from an EC2 but still allow package downloads. What should you implement?",
    answers: [
      { selection: "A", answer: "Block outbound rules in the security group." },
      { selection: "B", answer: "Use NAT Gateway in the public subnet." },
      { selection: "C", answer: "Use a VPC endpoint for Amazon S3." },
      { selection: "D", answer: "Use a VPC endpoint for traffic to package repositories (if supported)." }
    ],
    correctanswer: "D",
    explantion: "VPC endpoints for external package repos (if integrated with AWS) enable controlled outbound access without open internet routes.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "For high-volume, low-latency tasks, what compute option provides the most granular scaling?",
    answers: [
      { selection: "A", answer: "Use EC2 On-Demand instances." },
      { selection: "B", answer: "Use Lambda with concurrency limits." },
      { selection: "C", answer: "Use ECS Fargate with reserved tasks." },
      { selection: "D", answer: "Use Spot Instances in Auto Scaling groups." }
    ],
    correctanswer: "B",
    explantion: "Lambda offers fine-grained, event-driven scaling and low-latency compute perfect for high-volume tasks.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "You are designing a scalable API. What service combination provides built-in throttling, caching, and security controls?",
    answers: [
      { selection: "A", answer: "Use ALB directly in front of EC2." },
      { selection: "B", answer: "Use API Gateway with CloudFront in front." },
      { selection: "C", answer: "Use API Gateway with built-in caching." },
      { selection: "D", answer: "Use CloudFront with Lambda@Edge." }
    ],
    correctanswer: "C",
    explantion: "API Gateway supports throttling, authorization, and caching natively—ideal for managed, scalable APIs.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "You need to decouple your application’s front-end and back-end services. What architectural component should you introduce?",
    answers: [
      { selection: "A", answer: "Use EC2 Autoscaling group." },
      { selection: "B", answer: "Use SQS queue between front-end and back-end." },
      { selection: "C", answer: "Use DynamoDB Streams." },
      { selection: "D", answer: "Use direct public internet calls." }
    ],
    correctanswer: "B",
    explantion: "SQS provides durable message queueing that decouples services and improves failure resilience and scalability.",
    domain: "Resilience",
    section: "1"
  },
  {
    question: "Your application uses CloudFront with S3 origin. You want to serve private content only to authenticated users. What should you do?",
    answers: [
      { selection: "A", answer: "Make S3 bucket public but restrict via CloudFront." },
      { selection: "B", answer: "Use pre-signed S3 URLs on client side." },
      { selection: "C", answer: "Use CloudFront signed URLs or signed cookies." },
      { selection: "D", answer: "Use IAM policy to restrict S3 access to CloudFront IP ranges." }
    ],
    correctanswer: "C",
    explantion: "CloudFront signed URLs or cookies allow authenticated users to access private content securely through the CDN.",
    domain: "Security",
    section: "1"
  },
  {
    question: "You need to run ad-hoc analytics on large datasets stored in S3 without provisioning infrastructure. What is the most cost-effective solution?",
    answers: [
      { selection: "A", answer: "Use Redshift Spectrum." },
      { selection: "B", answer: "Use Athena." },
      { selection: "C", answer: "Use EMR cluster for each query." },
      { selection: "D", answer: "Load data into RDS and query there." }
    ],
    correctanswer: "B",
    explantion: "Athena enables serverless, pay-per-query analytics directly on S3, making it very cost-effective for ad-hoc workloads.",
    domain: "Analytics",
    section: "1"
  },
  {
    question: "To ensure region-level fault tolerance, where should you store your CloudTrail logs?",
    answers: [
      { selection: "A", answer: "In a single S3 bucket in the same region." },
      { selection: "B", answer: "In a multi-region S3 bucket." },
      { selection: "C", answer: "Replicate the S3 bucket to another region using cross-region replication." },
      { selection: "D", answer: "Store logs in CloudWatch only." }
    ],
    correctanswer: "C",
    explantion: "Cross-region replication of the S3 bucket ensures logs are available even if one region becomes unavailable.",
    domain: "Governance",
    section: "1"
  },
  {
    question: "You want to enforce MFA for CLI access to your AWS account. What’s the recommended approach?",
    answers: [
      { selection: "A", answer: "Enable MFA on root user and use root credentials." },
      { selection: "B", answer: "Enable MFA on IAM user and use session tokens via STS." },
      { selection: "C", answer: "Disallow CLI access entirely." },
      { selection: "D", answer: "Use access keys without MFA." }
    ],
    correctanswer: "B",
    explantion: "IAM user MFA combined with STS session tokens ensures secure, time-limited authentication with enforced MFA.",
    domain: "Security",
    section: "1"
  },
  {
    question: "Your application reads frequently from S3 and the same objects repeatedly. How can you lower cost and improve performance?",
    answers: [
      { selection: "A", answer: "Increase S3 request rate." },
      { selection: "B", answer: "Use S3 Transfer Acceleration." },
      { selection: "C", answer: "Use CloudFront in front of S3 origin." },
      { selection: "D", answer: "Enable S3 Intelligent-Tiering." }
    ],
    correctanswer: "C",
    explantion: "CloudFront caches frequently accessed S3 content closer to users, reducing direct S3 requests and improving performance.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "You are reviewing network design. You want internal EC2s to talk to AWS APIs without internet access. What is the best solution?",
    answers: [
      { selection: "A", answer: "Set up NAT Gateway to reach APIs." },
      { selection: "B", answer: "Use public endpoints." },
      { selection: "C", answer: "Use VPC Interface Endpoints (PrivateLink)." },
      { selection: "D", answer: "Use VPN to connect to the public endpoints." }
    ],
    correctanswer: "C",
    explantion: "VPC Interface Endpoints (AWS PrivateLink) allow secure access to AWS services without routing traffic through the internet.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "To reduce costs for long-running EC2 instances in a consistent workload, what service should you consider?",
    answers: [
      { selection: "A", answer: "Spot Instances." },
      { selection: "B", answer: "On-Demand Instances." },
      { selection: "C", answer: "Reserved Instances." },
      { selection: "D", answer: "Use EC2 Savings Plans." }
    ],
    correctanswer: "D",
    explantion: "EC2 Savings Plans offer flexibility across instance types and regions while delivering cost savings similar to Reserved Instances.",
    domain: "Cost Optimization",
    section: "1"
  },
  {
    question: "Your company wants to store and query petabyte-scale log data with SQL-friendly interface. What should you use?",
    answers: [
      { selection: "A", answer: "Use Elasticsearch on EC2." },
      { selection: "B", answer: "Use Redshift." },
      { selection: "C", answer: "Use Athena with appropriate partitions." },
      { selection: "D", answer: "Use DynamoDB." }
    ],
    correctanswer: "C",
    explantion: "Athena can query petabyte-scale data stored in S3 using SQL—with partitioning to optimize performance and cost.",
    domain: "Analytics",
    section: "1"
  },
  {
    question: "Your application needs predictable, low-latency performance for key-value data. Which database should you choose?",
    answers: [
      { selection: "A", answer: "RDS MySQL." },
      { selection: "B", answer: "ElastiCache Redis." },
      { selection: "C", answer: "S3 with GET operations." },
      { selection: "D", answer: "Athena on S3." }
    ],
    correctanswer: "B",
    explantion: "ElastiCache Redis is designed for fast, low-latency key-value access—ideal for high-performance caching scenarios.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "You’ve deployed a public static website on S3. You want to improve response times globally. What’s best practice?",
    answers: [
      { selection: "A", answer: "Enable S3 Transfer Acceleration." },
      { selection: "B", answer: "Place the bucket in multiple regions manually." },
      { selection: "C", answer: "Use CloudFront with S3 origin." },
      { selection: "D", answer: "Use Route 53 geolocation routing to direct to S3 buckets." }
    ],
    correctanswer: "C",
    explantion: "CloudFront caches static content at edge locations, improving global performance—simpler than managing multiple buckets per region.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "A Lambda function needs to access a MySQL RDS database in a private subnet. How should you configure networking?",
    answers: [
      { selection: "A", answer: "Attach a public IP to Lambda." },
      { selection: "B", answer: "Configure Lambda in the same VPC with proper subnet and security groups." },
      { selection: "C", answer: "Use API Gateway in front of RDS." },
      { selection: "D", answer: "Use RDS public endpoint with IP restrictions." }
    ],
    correctanswer: "B",
    explantion: "Deploying Lambda inside the VPC with access to the private subnet and security groups allows direct, secure connectivity to RDS.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "You have a multi-tier application using ALB and RDS Multi-AZ. To monitor behavior and performance, which service should you use?",
    answers: [
      { selection: "A", answer: "Use CloudWatch dashboards with metrics and alarms." },
      { selection: "B", answer: "Use ELB logs only." },
      { selection: "C", answer: "Use CloudTrail only." },
      { selection: "D", answer: "Use billing alerts." }
    ],
    correctanswer: "A",
    explantion: "CloudWatch dashboards provide a centralized view and alerts for metrics from your load balancer, RDS, and other resources.",
    domain: "Operations",
    section: "1"
  },
  {
    question: "To protect against DDoS attacks on your web application, what AWS service should you enable?",
    answers: [
      { selection: "A", answer: "WAF without Shield." },
      { selection: "B", answer: "AWS Shield Standard is enabled by default." },
      { selection: "C", answer: "Enable AWS Shield Advanced only." },
      { selection: "D", answer: "Use Network ACLs to block IP ranges." }
    ],
    correctanswer: "B",
    explantion: "Shield Standard protects against most common attacks at no extra cost, and automatically applies protection to services like ELB and CloudFront.",
    domain: "Security",
    section: "1"
  },
  {
    question: "Your static website needs to serve specific error page when a user requests a bad URL. Where do you configure this?",
    answers: [
      { selection: "A", answer: "In Lambda function logic." },
      { selection: "B", answer: "In Route 53 error routing." },
      { selection: "C", answer: "In CloudFront custom error pages or S3 website configuration." },
      { selection: "D", answer: "In EC2 instance serving the site." }
    ],
    correctanswer: "C",
    explantion: "CloudFront and S3 static website hosting both support custom error pages that enhance user experience for missing content.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "You need to enforce encryption for all objects uploaded to an S3 bucket. Which approach is best?",
    answers: [
      { selection: "A", answer: "Rely on users to choose encryption." },
      { selection: "B", answer: "Enable default encryption on the bucket." },
      { selection: "C", answer: "Use a bucket policy requiring x-amz-server-side-encryption header." },
      { selection: "D", answer: "Encrypt client side and upload." }
    ],
    correctanswer: "C",
    explantion: "A bucket policy can prevent unencrypted uploads by requiring an encryption header, enforcing compliance consistently.",
    domain: "Security",
    section: "1"
  },
  {
    question: "You want to move your data warehouse to AWS with minimal changes. The existing system uses SQL on large datasets. What is a suitable option?",
    answers: [
      { selection: "A", answer: "Use Athena." },
      { selection: "B", answer: "Use DynamoDB." },
      { selection: "C", answer: "Use Amazon Redshift." },
      { selection: "D", answer: "Use RDS MySQL." }
    ],
    correctanswer: "C",
    explantion: "Redshift is designed for large-scale data warehousing and supports SQL with minimal application changes.",
    domain: "Analytics",
    section: "1"
  },
  {
    question: "You need to schedule automated backups of your EC2 instances and their attached EBS volumes daily. What is the most efficient way?",
    answers: [
      { selection: "A", answer: "Use manual snapshots." },
      { selection: "B", answer: "Use Data Lifecycle Manager (DLM)." },
      { selection: "C", answer: "Use AWS Backup service." },
      { selection: "D", answer: "Use CloudWatch Event rules to run Lambda for snapshots." }
    ],
    correctanswer: "B",
    explantion: "DLM automates EBS snapshots (and AMIs) on schedule with retention policies—simple and efficient for EC2 backups.",
    domain: "Operations",
    section: "1"
  },
  {
    question: "Your application requires sub-10ms request times for small datasets. Which database is most suitable?",
    answers: [
      { selection: "A", answer: "RDS PostgreSQL." },
      { selection: "B", answer: "EC2-hosted MongoDB." },
      { selection: "C", answer: "DynamoDB with DAX (DynamoDB Accelerator)." },
      { selection: "D", answer: "S3 with lookup table." }
    ],
    correctanswer: "C",
    explantion: "DAX delivers microsecond-level read performance for DynamoDB—it’s ideal for very low-latency use cases.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "You want to enforce tagging standards across your AWS accounts for cost tracking. What automation tool should you use?",
    answers: [
      { selection: "A", answer: "Use AWS Config rules with required tags." },
      { selection: "B", answer: "Task admin to manually check." },
      { selection: "C", answer: "Use S3 bucket policies for tags." },
      { selection: "D", answer: "Use CloudWatch logs filters." }
    ],
    correctanswer: "A",
    explantion: "AWS Config rules can check and enforce required tags across resources automatically and continuously.",
    domain: "Governance",
    section: "1"
  },
  {
    question: "Your cross-account audit requires that S3 buckets are publicly inaccessible. How do you verify this programmatically?",
    answers: [
      { selection: "A", answer: "Use AWS Console to review." },
      { selection: "B", answer: "Use S3 bucket ACLs only." },
      { selection: "C", answer: "Use AWS Config managed rule “s3-bucket-public-read-prohibited.”" },
      { selection: "D", answer: "Use IAM policies only." }
    ],
    correctanswer: "C",
    explantion: "AWS Config managed rules can programmatically and continuously check for public access violations to S3 buckets.",
    domain: "Governance",
    section: "1"
  },
  {
    question: "An application in us-east-1 must talk to a database in us-west-2 with minimal latency and no public traffic. What should you use?",
    answers: [
      { selection: "A", answer: "Use VPC peering between regions." },
      { selection: "B", answer: "Use Transit Gateway with inter-Region peering." },
      { selection: "C", answer: "Use Site-to-Site VPN." },
      { selection: "D", answer: "Use internet endpoint with SSL." }
    ],
    correctanswer: "B",
    explantion: "Transit Gateway peering allows private, high-bandwidth traffic across regions securely—suitable for cross-region low latency.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "You need to centrally manage and audit IAM policies across accounts in your AWS Organization. What service helps you do that?",
    answers: [
      { selection: "A", answer: "Use IAM policies only." },
      { selection: "B", answer: "Use AWS Config." },
      { selection: "C", answer: "Use AWS Control Tower with Service Control Policies (SCPs)." },
      { selection: "D", answer: "Use Trusted Advisor." }
    ],
    correctanswer: "C",
    explantion: "Control Tower and SCPs allow you to apply organization-wide IAM policy restrictions consistently across accounts.",
    domain: "Governance",
    section: "1"
  },
  {
    question: "Your application writes logs to CloudWatch Logs. You want to archive them to S3 in compressed form. What do you use?",
    answers: [
      { selection: "A", answer: "Manually download logs periodically." },
      { selection: "B", answer: "Use CloudWatch Logs subscription to Lambda to export to S3." },
      { selection: "C", answer: "Use CloudTrail for logs." },
      { selection: "D", answer: "Use S3 replication." }
    ],
    correctanswer: "B",
    explantion: "A subscription filter to Lambda allows log streaming, which can then compress and store logs into S3 automatically.",
    domain: "Operations",
    section: "1"
  },
  {
    question: "You want to encrypt EBS volumes by default in your organization. What is the best approach?",
    answers: [
      { selection: "A", answer: "Manually enable encryption on every volume." },
      { selection: "B", answer: "Use a Launch Template with encryption enabled." },
      { selection: "C", answer: "Use AWS Organizations service control policy." },
      { selection: "D", answer: "Use default EBS KMS key in each account." }
    ],
    correctanswer: "B",
    explantion: "Launch Templates with encryption enabled ensure any new volumes are encrypted automatically when launched.",
    domain: "Security",
    section: "1"
  },
  {
    question: "Your media application needs to deliver large videos to a global audience. What should you use?",
    answers: [
      { selection: "A", answer: "Host videos in S3 and let users download directly." },
      { selection: "B", answer: "Serve via API Gateway." },
      { selection: "C", answer: "Use CloudFront with S3 origin and configure range requests." },
      { selection: "D", answer: "Use EC2 as a media server." }
    ],
    correctanswer: "C",
    explantion: "CloudFront caches content globally and supports efficient streaming via range requests for large files.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "Your web application must be accessible even during an entire AZ failure. What is the recommended architecture?",
    answers: [
      { selection: "A", answer: "Deploy in a single AZ with high-availability instances." },
      { selection: "B", answer: "Deploy across multiple AZs behind an ALB." },
      { selection: "C", answer: "Use Multi-Region with global Aurora." },
      { selection: "D", answer: "Use S3 static website." }
    ],
    correctanswer: "B",
    explantion: "Deploying across multiple AZs behind an ALB ensures high availability and resilience during AZ outages.",
    domain: "Availability",
    section: "1"
  },
  {
    question: "You need to control access to DynamoDB tables from Lambda functions only, preventing other services from reading them. How do you enforce this?",
    answers: [
      { selection: "A", answer: "Use VPC endpoint policies." },
      { selection: "B", answer: "Use IAM resource policies on the table." },
      { selection: "C", answer: "Grant access via IAM role attached to Lambda only." },
      { selection: "D", answer: "Use encryption keys for each service." }
    ],
    correctanswer: "C",
    explantion: "Attaching an IAM role with least privilege to the Lambda function restricts table access just to that function.",
    domain: "Security",
    section: "1"
  },
  {
    question: "Your batch processing on EC2 takes three hours per run. You’d like to cut costs by 50%. What should you do?",
    answers: [
      { selection: "A", answer: "Use On-Demand instances." },
      { selection: "B", answer: "Use Reserved Instances." },
      { selection: "C", answer: "Use Spot Instances with interruption handling." },
      { selection: "D", answer: "Use a larger instance type." }
    ],
    correctanswer: "C",
    explantion: "Spot Instances can reduce costs significantly for fault-tolerant batch workloads if you properly handle interruptions.",
    domain: "Cost Optimization",
    section: "1"
  },
  {
    question: "You want to track application usage metrics and log retention centrally. What should you enable?",
    answers: [
      { selection: "A", answer: "Enable metrics in CloudWatch only." },
      { selection: "B", answer: "Stream logs using Kinesis to a central account." },
      { selection: "C", answer: "Use CloudTrail only." },
      { selection: "D", answer: "Use S3 replication for logs." }
    ],
    correctanswer: "B",
    explantion: "Kinesis can aggregate logs from multiple accounts or regions into a central logging account for consolidated monitoring.",
    domain: "Operations",
    section: "1"
  },
  {
    question: "You need to centralize user authentication across multiple applications. What service is best suited?",
    answers: [
      { selection: "A", answer: "Use IAM users combined across apps." },
      { selection: "B", answer: "Use Cognito User Pools as identity provider." },
      { selection: "C", answer: "Use separate user directories per app." },
      { selection: "D", answer: "Use Identity Federation only with STS roles." }
    ],
    correctanswer: "B",
    explantion: "Cognito User Pools allow centralized user management and supports federation, SAML, and social login across multiple apps.",
    domain: "Security",
    section: "1"
  },
  {
    question: "To minimize latency between compute and data, where should you place your ElastiCache Redis cluster relative to your compute layer?",
    answers: [
      { selection: "A", answer: "In a different AZ for redundancy." },
      { selection: "B", answer: "In the same AZ as your compute instances." },
      { selection: "C", answer: "In a public subnet." },
      { selection: "D", answer: "In a separate VPC." }
    ],
    correctanswer: "B",
    explantion: "Placing Redis in the same AZ as compute minimizes network latency—optionally replicate across AZs for HA.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "You need to run code across multiple regions synchronously. Which AWS service helps you manage that reliably?",
    answers: [
      { selection: "A", answer: "Use EC2 Auto Scaling groups per region." },
      { selection: "B", answer: "Use Lambda with SQS and cross-region triggers." },
      { selection: "C", answer: "Use Step Functions distributed workflows." },
      { selection: "D", answer: "Use SNS cross-region delivery." }
    ],
    correctanswer: "D",
    explantion: "SNS supports cross-region fan-out, delivering messages reliably to endpoints in multiple regions.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "Your IoT devices are sending metrics to your backend. To ingest millions of events per second, which service should you use?",
    answers: [
      { selection: "A", answer: "Use API Gateway." },
      { selection: "B", answer: "Use IoT Core only." },
      { selection: "C", answer: "Use Kinesis Data Streams and Firehose." },
      { selection: "D", answer: "Use SQS." }
    ],
    correctanswer: "C",
    explantion: "Kinesis Data Streams can handle massive ingestion and Firehose can deliver that data downstream for analytics or storage.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "To rotate database credentials automatically without application changes, what should you use?",
    answers: [
      { selection: "A", answer: "Change credentials manually." },
      { selection: "B", answer: "Use AWS Secret Manager with rotation enabled." },
      { selection: "C", answer: "Store credentials in S3 and rotate via Lambda." },
      { selection: "D", answer: "Use IAM user credentials and rotate monthly." }
    ],
    correctanswer: "B",
    explantion: "Secrets Manager integrates automatic rotation with supported databases and eliminates the need for application changes when retrieving secrets.",
    domain: "Security",
    section: "1"
  },
  {
    question: "Your compute cluster runs in Spot Instances, but tasks are critical. How can you ensure they finish if interrupted?",
    answers: [
      { selection: "A", answer: "Use only On-Demand instances." },
      { selection: "B", answer: "Write results to S3 and use Spot with interruption handling and resume logic." },
      { selection: "C", answer: "Avoid Spot Instances entirely." },
      { selection: "D", answer: "Increase instance type size." }
    ],
    correctanswer: "B",
    explantion: "Effective Spot usage includes interruption handling with state persistence (e.g. to S3) and task resume logic to ensure critical completion.",
    domain: "Resilience",
    section: "1"
  },
  {
    question: "To control AWS spend in real time, which service provides alerts and budget enforcement?",
    answers: [
      { selection: "A", answer: "Use Billing dashboard only." },
      { selection: "B", answer: "Use AWS Budgets with alert thresholds." },
      { selection: "C", answer: "Use Cost Explorer only." },
      { selection: "D", answer: "Use manual periodic billing review." }
    ],
    correctanswer: "B",
    explantion: "AWS Budgets can set thresholds and trigger alerts (emails/SNS) when spend approaches or exceeds the budget.",
    domain: "Cost Optimization",
    section: "1"
  },
  {
    question: "Your application in multiple AZs must read from a shared storage with strong consistency. Which option is best?",
    answers: [
      { selection: "A", answer: "Use S3 eventually consistent reads." },
      { selection: "B", answer: "Use EFS with lifecycle policy." },
      { selection: "C", answer: "Use FSx for Lustre." },
      { selection: "D", answer: "Use RDS Multi-AZ." }
    ],
    correctanswer: "B",
    explantion: "EFS provides a shared file system with strong consistency across AZs—ideal for shared data needs.",
    domain: "Storage",
    section: "1"
  },
  {
    question: "To accelerate parity between development and production architectures, what should you do?",
    answers: [
      { selection: "A", answer: "Use CloudFormation templates for both environments." },
      { selection: "B", answer: "Manually configure production to match dev." },
      { selection: "C", answer: "Use Elastic Beanstalk only in production." },
      { selection: "D", answer: "Use dev manually and prod via templates." }
    ],
    correctanswer: "A",
    explantion: "Using CloudFormation templates consistently ensures architectural parity and version control across dev and prod environments.",
    domain: "Deployment",
    section: "1"
  },
  {
    question: "Your multi-tier application using ALB needs to support WebSocket connections. What must you do?",
    answers: [
      { selection: "A", answer: "Nothing—ALB supports WebSockets natively." },
      { selection: "B", answer: "Use NLB instead of ALB." },
      { selection: "C", answer: "Use API Gateway only." },
      { selection: "D", answer: "Use CloudFront for WebSockets." }
    ],
    correctanswer: "A",
    explantion: "ALBs support WebSocket traffic natively—unlike CLBs—making them suitable for real-time applications.",
    domain: "Networking",
    section: "1"
  },
  {
    question: "To prevent sensitive data from being exposed in S3 buckets, which tool can detect this automatically?",
    answers: [
      { selection: "A", answer: "Use manual audits." },
      { selection: "B", answer: "Use Macie for data visibility and protection." },
      { selection: "C", answer: "Use IAM policies only." },
      { selection: "D", answer: "Use CloudWatch alarms." }
    ],
    correctanswer: "B",
    explantion: "Amazon Macie uses ML to detect and alert on sensitive data in S3, aiding in security and compliance monitoring.",
    domain: "Security",
    section: "1"
  },
  {
    question: "You need to cache frequently accessed DynamoDB items to reduce read costs. What can you use?",
    answers: [
      { selection: "A", answer: "Use global tables." },
      { selection: "B", answer: "Use Buddy Streams." },
      { selection: "C", answer: "Enable DAX (DynamoDB Accelerator)." },
      { selection: "D", answer: "Use Read Replicas." }
    ],
    correctanswer: "C",
    explantion: "DAX provides in-memory caching for DynamoDB, reducing response latencies and read request costs.",
    domain: "Performance",
    section: "1"
  },
  {
    question: "You must ensure that critical S3 objects are stored in a separate AZ in case of regional infrastructure failure. What is the best strategy?",
    answers: [
      { selection: "A", answer: "Use cross-region replication to another region." },
      { selection: "B", answer: "Use multi-AZ replication." },
      { selection: "C", answer: "Use RRS storage class." },
      { selection: "D", answer: "Enable versioning only." }
    ],
    correctanswer: "A",
    explantion: "Cross-Region Replication ensures durable backup beyond the primary region, protecting against regional outages.",
    domain: "Resilience",
    section: "1"
  },
  {
    question: "Your application uses CloudWatch Events to trigger automated jobs. You want to track the success rate of those jobs. Which service is best for analysis?",
    answers: [
      { selection: "A", answer: "Use CloudWatch Logs Insights." },
      { selection: "B", answer: "Use CloudTrail." },
      { selection: "C", answer: "Use SNS notifications only." },
      { selection: "D", answer: "Use S3 analytics." }
    ],
    correctanswer: "A",
    explantion: "CloudWatch Logs Insights can query, analyze, and visualize logs—ideal for tracking jobs triggered via CloudWatch Events.",
    domain: "Operations",
    section: "1"
  },
  {
    question: "You want to distribute a static website multimodal globally with SSL and custom domain. What is the simplest architecture?",
    answers: [
      { selection: "A", answer: "Host behind ALB with SSL." },
      { selection: "B", answer: "Use S3 static website + CloudFront + ACM certificate." },
      { selection: "C", answer: "Host on EC2 with HTTPS enabled." },
      { selection: "D", answer: "Use API Gateway with S3 integration." }
    ],
    correctanswer: "B",
    explantion: "S3 static hosting with CloudFront and SSL via ACM provides a fully managed, scalable, secure static site delivery.",
    domain: "Performance",
    section: "1"
  }
];

const saaQuestionsSection2 = [
  {
    question: "A company needs to migrate their on-premise Oracle database to AWS with minimal application changes and high availability. Which service should you recommend?",
    answers: [
      { selection: "A", answer: "RDS for MySQL." },
      { selection: "B", answer: "RDS for Oracle with Multi-AZ enabled." },
      { selection: "C", answer: "DynamoDB." },
      { selection: "D", answer: "Aurora PostgreSQL." }
    ],
    correctanswer: "B",
    explantion: "RDS for Oracle with Multi-AZ provides managed Oracle compatibility with built-in high availability and minimal app changes.",
    domain: "Migration",
    section: "2"
  },
  {
    question: "Your application needs to process large payloads (over 6MB) through an API. Which service supports this natively?",
    answers: [
      { selection: "A", answer: "API Gateway REST APIs." },
      { selection: "B", answer: "API Gateway WebSocket APIs." },
      { selection: "C", answer: "API Gateway HTTP APIs (payload size up to 10MB)." },
      { selection: "D", answer: "Use ALB with Lambda." }
    ],
    correctanswer: "C",
    explantion: "API Gateway HTTP APIs support payloads up to 10MB natively—larger than REST API limits.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "Your application is configured with Cognito for authentication. You want to delegate fine-grained authorization. Which solution fits?",
    answers: [
      { selection: "A", answer: "Implement your own auth logic in your app." },
      { selection: "B", answer: "Use IAM policies attached to Cognito identities." },
      { selection: "C", answer: "Use Cognito User Pool groups plus Lambda authorizer." },
      { selection: "D", answer: "Add access control logic in CloudFront." }
    ],
    correctanswer: "C",
    explantion: "User Pool groups in combination with a Lambda authorizer allow flexible, fine-grained authorization logic.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need to encrypt data in transit to your RDS instance. What’s the simplest method?",
    answers: [
      { selection: "A", answer: "Use SSL/TLS in the database connection string." },
      { selection: "B", answer: "Use IPsec VPN in the VPC." },
      { selection: "C", answer: "Use VPC Peering with TLS." },
      { selection: "D", answer: "Use S3 transfer acceleration." }
    ],
    correctanswer: "A",
    explantion: "Most RDS engines support SSL/TLS connections; enabling this in the client connection string encrypts data in transit simply.",
    domain: "Security",
    section: "2"
  },
  {
    question: "A legacy application cannot tolerate interruptions. Which RDS deployment provides automatic failover and high availability?",
    answers: [
      { selection: "A", answer: "Single-AZ RDS instance." },
      { selection: "B", answer: "RDS Read Replica." },
      { selection: "C", answer: "RDS Multi-AZ deployment." },
      { selection: "D", answer: "Aurora Serverless." }
    ],
    correctanswer: "C",
    explantion: "Multi-AZ RDS deployment provides synchronous standby and automatic failover for high availability.",
    domain: "Resilience",
    section: "2"
  },
  {
    question: "You’re designing event-driven architecture and need guaranteed order of execution. Which service should you use?",
    answers: [
      { selection: "A", answer: "SQS Standard queue." },
      { selection: "B", answer: "SNS Topic." },
      { selection: "C", answer: "SQS FIFO queue." },
      { selection: "D", answer: "Kinesis Data Firehose." }
    ],
    correctanswer: "C",
    explantion: "SQS FIFO queues ensure ordered, exactly-once message delivery—ideal when order matters.",
    domain: "Resilience",
    section: "2"
  },
  {
    question: "Your application performs heavy simulations but intermittently. You need low-cost compute for short bursts. What’s best?",
    answers: [
      { selection: "A", answer: "Large On-Demand instance." },
      { selection: "B", answer: "Spot Instances with Auto Scaling." },
      { selection: "C", answer: "Reserved Instances." },
      { selection: "D", answer: "Dedicated hosts." }
    ],
    correctanswer: "B",
    explantion: "Spot Instances are cost-effective for intermittent workloads; Auto Scaling ensures capacity managed dynamically.",
    domain: "Cost Optimization",
    section: "2"
  },
  {
    question: "A data pipeline requires aggregation of streaming data then storing in S3. Which service combination is most efficient?",
    answers: [
      { selection: "A", answer: "Use Lambda triggered by Kinesis Data Streams." },
      { selection: "B", answer: "Use Kinesis Data Firehose with S3." },
      { selection: "C", answer: "Use SQS and Lambda to write to S3." },
      { selection: "D", answer: "Use API Gateway and Lambda to store in S3." }
    ],
    correctanswer: "B",
    explantion: "Firehose simplifies streaming ingestion and can batch, transform, and deliver directly to S3 efficiently.",
    domain: "Analytics",
    section: "2"
  },
  {
    question: "You need to centralize logs from CloudWatch Logs to S3 for archival. What’s the most scalable method?",
    answers: [
      { selection: "A", answer: "Use Lambda to export logs periodically." },
      { selection: "B", answer: "Use CloudWatch Logs subscription to Kinesis and delivery to S3." },
      { selection: "C", answer: "Download logs manually from CloudWatch." },
      { selection: "D", answer: "Use CloudTrail for all logs." }
    ],
    correctanswer: "B",
    explantion: "Subscriptions enable streaming to Kinesis, which can then batch and deliver logs to S3 at scale.",
    domain: "Operations",
    section: "2"
  },
  {
    question: "You serve APIs via HTTP APIs and notice fast rise in invocations. What feature helps cache responses at edge for better performance?",
    answers: [
      { selection: "A", answer: "Enable TTL caching on the backend." },
      { selection: "B", answer: "Configure cache in API Gateway HTTP APIs." },
      { selection: "C", answer: "Use CloudFront with caching." },
      { selection: "D", answer: "Enable ElastiCache for API data." }
    ],
    correctanswer: "B",
    explantion: "HTTP APIs support built-in, low-latency caching, reducing repeated backend hits effectively.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your environment uses SSH bastion hosts, but you’d like to restrict access more securely. What’s an improved solution?",
    answers: [
      { selection: "A", answer: "Use public key pairs only." },
      { selection: "B", answer: "Set up AWS Systems Manager Session Manager." },
      { selection: "C", answer: "Use NAT Gateway to access bastion hosts." },
      { selection: "D", answer: "Use a VPN to the bastion host." }
    ],
    correctanswer: "B",
    explantion: "Session Manager allows secure shell access without bastion hosts and offers logging, IAM control, and auditability.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need to ensure all incoming HTTPS requests to your API terminate TLS at the network edge. What configuration achieves that?",
    answers: [
      { selection: "A", answer: "Terminate TLS on ALB and forward HTTP to backend." },
      { selection: "B", answer: "Use NLB with TLS listener." },
      { selection: "C", answer: "Use API Gateway WebSocket only." },
      { selection: "D", answer: "Terminate TLS on the EC2 instances themselves." }
    ],
    correctanswer: "A",
    explantion: "ALB supports TLS termination at the edge, simplifying certificate management and offloading."

, domain: "Networking", section: "2"  
  },
  {
    question: "You want to audit every read and write operation to your DynamoDB tables. What should you enable?",
    answers: [
      { selection: "A", answer: "Enable DynamoDB Streams." },
      { selection: "B", answer: "Enable AWS Config on the table." },
      { selection: "C", answer: "Enable DynamoDB TTL." },
      { selection: "D", answer: "Enable CloudTrail data event logging for DynamoDB." }
    ],
    correctanswer: "D",
    explantion: "CloudTrail data events log every activity on DynamoDB tables—ideal for auditing reads and writes.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "Your S3 bucket content is critical and must be retained. What’s the most secure way to guard against accidental deletion?",
    answers: [
      { selection: "A", answer: "Enable MFA-Delete and versioning." },
      { selection: "B", answer: "Rely on lifecycle policies." },
      { selection: "C", answer: "Manually audit S3." },
      { selection: "D", answer: "Use bucket ACLs only." }
    ],
    correctanswer: "A",
    explantion: "MFA-Delete combined with versioning adds protection against accidental or malicious deletion by requiring additional authentication.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Your application is deployed in multiple regions and needs a unified traffic entry point. Which solution works best?",
    answers: [
      { selection: "A", answer: "Use regional ALBs with DNS weight-based routing." },
      { selection: "B", answer: "Use Global Accelerator with ALBs as endpoints." },
      { selection: "C", answer: "Use CloudFront only." },
      { selection: "D", answer: "Use Route 53 latency-based routing alone." }
    ],
    correctanswer: "B",
    explantion: "Global Accelerator provides a static anycast IP and improves performance and failover for multi-region applications.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "You need to allow S3 access from within your VPC without using the internet. What configuration should you employ?",
    answers: [
      { selection: "A", answer: "Use a NAT Gateway and private subnet." },
      { selection: "B", answer: "Use VPC Interface Endpoint (Gateway endpoint)." },
      { selection: "C", answer: "Use public S3 buckets." },
      { selection: "D", answer: "Use VPN to S3." }
    ],
    correctanswer: "B",
    explantion: "Gateway VPC endpoints for S3 enable private, secure access from VPC without going through the internet or NAT.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "To reduce costs of a large dataset being scanned infrequently, what S3 storage class is ideal?",
    answers: [
      { selection: "A", answer: "S3 Standard." },
      { selection: "B", answer: "S3 One Zone-IA." },
      { selection: "C", answer: "S3 Glacier Flexible Retrieval." },
      { selection: "D", answer: "S3 Intelligent-Tiering." }
    ],
    correctanswer: "C",
    explantion: "Glacier Flexible Retrieval offers the lowest cost for long-term storage when retrieval delay is acceptable, suitable for infrequent scanning.",
    domain: "Cost Optimization",
    section: "2"
  },
  {
    question: "Your organization wants consolidated billing and centralized security controls across AWS accounts. What's the recommended solution?",
    answers: [
      { selection: "A", answer: "Use individual IAM users per account." },
      { selection: "B", answer: "Use AWS Organizations." },
      { selection: "C", answer: "Use cross-account IAM roles manually configured." },
      { selection: "D", answer: "Use consolidated billing only." }
    ],
    correctanswer: "B",
    explantion: "AWS Organizations enables centralized billing, policy control, and account grouping—ideal for multi-account governance.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "To improve performance of a frequently accessed DynamoDB table, which option helps reduce latency?",
    answers: [
      { selection: "A", answer: "Increase provisioned throughput." },
      { selection: "B", answer: "Use DAX (DynamoDB Accelerator)." },
      { selection: "C", answer: "Use on-demand mode only." },
      { selection: "D", answer: "Add more Global Secondary Indexes." }
    ],
    correctanswer: "B",
    explantion: "DAX provides in-memory caching, significantly reducing read latency for hot items in DynamoDB.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your logs are stored in S3 and you want to analyze them using SQL queries. What is the optimal service to use?",
    answers: [
      { selection: "A", answer: "Use Athena with partitioned S3 data." },
      { selection: "B", answer: "Load data into RDS." },
      { selection: "C", answer: "Use DynamoDB." },
      { selection: "D", answer: "Use ElasticSearch." }
    ],
    correctanswer: "A",
    explantion: "Athena allows serverless, SQL-based querying directly on S3 logs, especially efficient when data is partitioned.",
    domain: "Analytics",
    section: "2"
  },
  {
    question: "You want to detect unauthorized changes to security group configurations. What service helps you do that?",
    answers: [
      { selection: "A", answer: "CloudWatch Events only." },
      { selection: "B", answer: "AWS Config with AWS Config Rule." },
      { selection: "C", answer: "Use security group tags only." },
      { selection: "D", answer: "Use IAM policies only." }
    ],
    correctanswer: "B",
    explantion: "AWS Config can monitor and flag non-compliant changes, enabling auto-remediation or alerts for security groups.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "Your application uses ALB and wants to throttle traffic coming from abusive IPs. What feature should you use?",
    answers: [
      { selection: "A", answer: "Network ACLs only." },
      { selection: "B", answer: "WAF web ACL on the ALB." },
      { selection: "C", answer: "Security groups rules." },
      { selection: "D", answer: "Route 53 geolocation blocking." }
    ],
    correctanswer: "B",
    explantion: "AWS WAF web ACL applied to the ALB enables flexible and dynamic blocking or throttling of traffic from abusive IPs.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need to share S3 cross-account for analytics but enforce encryption in transit. How do you ensure this?",
    answers: [
      { selection: "A", answer: "Use bucket policy requiring aws:SecureTransport." },
      { selection: "B", answer: "Use signed URLs only." },
      { selection: "C", answer: "Use IAM policies only." },
      { selection: "D", answer: "Use encryption at rest only." }
    ],
    correctanswer: "A",
    explantion: "Bucket policies can require encrypted transport (HTTPS) via aws:SecureTransport, enforcing secure data transfer.",
    domain: "Security",
    section: "2"
  },
  {
    question: "A web application fronted by CloudFront must run custom code at the edge for personalization. Which feature best supports that?",
    answers: [
      { selection: "A", answer: "Lambda@Edge." },
      { selection: "B", answer: "S3 static redirection." },
      { selection: "C", answer: "ALB rules." },
      { selection: "D", answer: "CloudFront behaviors only." }
    ],
    correctanswer: "A",
    explantion: "Lambda@Edge allows custom logic to run at global edge locations for personalization, headers, or A/B testing purposes.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your application must ensure zero downtime across deployments. What deployment strategy ensures immediate rollback if issues occur?",
    answers: [
      { selection: "A", answer: "Blue/Green deployment." },
      { selection: "B", answer: "In-place update with health checks." },
      { selection: "C", answer: "Canary deployment manually monitored." },
      { selection: "D", answer: "Manual replacement." }
    ],
    correctanswer: "A",
    explantion: "Blue/Green deployments enable traffic switching between environments and instant rollback if the new version fails.",
    domain: "Deployment",
    section: "2"
  },
  {
    question: "You need to grant fine-grained permission to S3 objects based on tags. What method should you use?",
    answers: [
      { selection: "A", answer: "Use separate buckets for each permission level." },
      { selection: "B", answer: "Use S3 bucket policies referencing object tags." },
      { selection: "C", answer: "Use ACLs only." },
      { selection: "D", answer: "Use IAM user-specific policies only." }
    ],
    correctanswer: "B",
    explantion: "Bucket policies can reference object tags for condition-based access control, enabling fine-grained permissions.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Your Lambda function occasionally fails due to throttling on downstream services. What feature helps you prevent this?",
    answers: [
      { selection: "A", answer: "Increase Lambda memory." },
      { selection: "B", answer: "Enable Lambda reserved concurrency." },
      { selection: "C", answer: "Use Step Functions only." },
      { selection: "D", answer: "Use SQS in between." }
    ],
    correctanswer: "B",
    explantion: "Reserved concurrency prevents Lambda from exceeding a concurrency limit, avoiding downstream throttling spikes.",
    domain: "Resilience",
    section: "2"
  },
  {
    question: "You need to manage and version your API Gateway definitions. What approach allows this?",
    answers: [
      { selection: "A", answer: "Use console manually." },
      { selection: "B", answer: "Use Swagger/OpenAPI definition and version in source control." },
      { selection: "C", answer: "Export from console each time." },
      { selection: "D", answer: "Use CloudFront hooks." }
    ],
    correctanswer: "B",
    explantion: "OpenAPI definitions can be kept in source control, versioned, and used in automated deployment pipelines.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "Your application fronted by CloudFront needs to access a protected private S3 bucket. What method ensures secure access?",
    answers: [
      { selection: "A", answer: "Make S3 bucket public." },
      { selection: "B", answer: "Use signed CloudFront origin access identity (OAI)." },
      { selection: "C", answer: "Embed credentials in requests." },
      { selection: "D", answer: "Use custom domain only." }
    ],
    correctanswer: "B",
    explantion: "OAI allows CloudFront to access S3 origin securely while keeping the bucket private from direct access.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need to invoke Lambda functions securely from a VPC without internet access. What configuration achieves that?",
    answers: [
      { selection: "A", answer: "Assign public IPs to Lambdas." },
      { selection: "B", answer: "Use VPC endpoints for Lambda." },
      { selection: "C", answer: "Use NAT Gateway." },
      { selection: "D", answer: "Use VPN." }
    ],
    correctanswer: "B",
    explantion: "VPC Interface Endpoints allow private, secure access to Lambda without traversing the internet.",
    domain: "Networking",
    section: "2"
  },
  {
    question: "To minimize IAM sprawl, you want to allow users to access multiple AWS accounts using single sign-on. What should you use?",
    answers: [
      { selection: "A", answer: "Enable IAM Users in each account." },
      { selection: "B", answer: "Use AWS SSO (IAM Identity Center)." },
      { selection: "C", answer: "Use separate IAM roles per user manually." },
      { selection: "D", answer: "Use root user with MFA." }
    ],
    correctanswer: "B",
    explantion: "AWS IAM Identity Center (SSO) simplifies user access to multiple AWS accounts with centralized permissions and authentication.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "Your microservices architecture uses ECS Fargate, and you want to collect custom metrics per task. What’s the easiest method?",
    answers: [
      { selection: "A", answer: "Push metrics manually from tasks to CloudWatch." },
      { selection: "B", answer: "Configure FireLens to send logs to CloudWatch or Kinesis." },
      { selection: "C", answer: "Use CloudWatch Agent on host." },
      { selection: "D", answer: "Use SQS to pass metrics offline." }
    ],
    correctanswer: "B",
    explantion: "FireLens allows log and metric forwarding from containers to CloudWatch or Kinesis in a managed way.",
    domain: "Operations",
    section: "2"
  },
  {
    question: "Your application must ensure that stale cached data is not served. What cache invalidation strategy should you implement?",
    answers: [
      { selection: "A", answer: "Set Cache-Control to a very long TTL." },
      { selection: "B", answer: "Use Cache-Control headers and CloudFront invalidation API." },
      { selection: "C", answer: "Don’t use caching." },
      { selection: "D", answer: "Use hardcoded object names." }
    ],
    correctanswer: "B",
    explantion: "Cache-Control headers control caching behavior, and invalidation API ensures stale content is refreshed.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "You want to detect anomalous API activity and be alerted. Which service can you use?",
    answers: [
      { selection: "A", answer: "Use WAF only." },
      { selection: "B", answer: "Use CloudTrail Insights." },
      { selection: "C", answer: "Use CloudWatch alarms only." },
      { selection: "D", answer: "Use Route 53 logs." }
    ],
    correctanswer: "B",
    explantion: "CloudTrail Insights detects unusual operational behavior such as spikes in activity and sends alerts automatically.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "Your database writes need to be audited and content redacted. Which combination helps achieve that?",
    answers: [
      { selection: "A", answer: "Enable CloudTrail and redact logs manually." },
      { selection: "B", answer: "Use Redshift with Role Based Access." },
      { selection: "C", answer: "Use RDS with database activity streams and KMS encryption." },
      { selection: "D", answer: "Use S3 and Athena." }
    ],
    correctanswer: "C",
    explantion: "RDS Database Activity Streams capture and audit activity securely; integrate with KMS to protect sensitive data.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You want to enforce TLS 1.2+ for all endpoints in your VPC. Which feature helps you do that centrally?",
    answers: [
      { selection: "A", answer: "Set TLS requirement in each service individually." },
      { selection: "B", answer: "Use Policy in ALB for TLS versions." },
      { selection: "C", answer: "Use Service Control Policy requiring TLS1.2." },
      { selection: "D", answer: "Use CloudFront behavior settings only." }
    ],
    correctanswer: "C",
    explantion: "SCPs can enforce minimum TLS versions across accounts centrally—ensuring all endpoints comply with TLS 1.2+.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "You want to decouple microservices with an orchestration engine supporting retries and branching. What service should you use?",
    answers: [
      { selection: "A", answer: "Use Lambda only." },
      { selection: "B", answer: "Use Step Functions." },
      { selection: "C", answer: "Use SNS and SQS only." },
      { selection: "D", answer: "Use CloudFormation workflows." }
    ],
    correctanswer: "B",
    explantion: "AWS Step Functions provide orchestration, retries, branching, and state tracking—ideal for coordinating microservices.",
    domain: "Deployment",
    section: "2"
  },
  {
    question: "Your container registry needs to enforce image scanning before deployment. What solution should you implement?",
    answers: [
      { selection: "A", answer: "Use ECS task definitions only." },
      { selection: "B", answer: "Use ECR with scanning on push, and block unscanned images." },
      { selection: "C", answer: "Scan images manually on local dev." },
      { selection: "D", answer: "Use S3 to store container images." }
    ],
    correctanswer: "B",
    explantion: "ECR supports image scanning and can be configured to block unscanned or vulnerable images from deployment—enhancing security.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need to ensure secrets used by Lambda functions are rotated automatically. What's the recommended approach?",
    answers: [
      { selection: "A", answer: "Store secrets in environment variables and rotate manually." },
      { selection: "B", answer: "Use Secrets Manager with rotation enabled and grant Lambda access." },
      { selection: "C", answer: "Store in S3 and rotate occasionally." },
      { selection: "D", answer: "Use Parameter Store only." }
    ],
    correctanswer: "B",
    explantion: "Secrets Manager supports automatic rotation and fine-grained permissions, and integrates with Lambda for secure secrets retrieval.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Your application has peaks every month and stays idle the rest of the time. You want minimal infrastructure costs. What compute model should you use?",
    answers: [
      { selection: "A", answer: "Reserved Instances only." },
      { selection: "B", answer: "On-Demand instances with Auto Scaling." },
      { selection: "C", answer: "Lambda or Fargate serverless." },
      { selection: "D", answer: "Dedicated hosts." }
    ],
    correctanswer: "C",
    explantion: "Serverless models like Lambda or Fargate scale to zero when idle and scale up during peaks—minimizing costs.",
    domain: "Cost Optimization",
    section: "2"
  },
  {
    question: "You need to move a physical data archive to AWS quickly and reliably. Which service is best suited?",
    answers: [
      { selection: "A", answer: "Use S3 Transfer Acceleration." },
      { selection: "B", answer: "Use Snowball." },
      { selection: "C", answer: "Use S3 multipart uploads." },
      { selection: "D", answer: "Use Direct Connect." }
    ],
    correctanswer: "B",
    explantion: "AWS Snowball allows physical shipping of large data archives quickly and securely, bypassing network limitations.",
    domain: "Migration",
    section: "2"
  },
  {
    question: "Your application is deployed using CloudFormation. You need to ensure rollbacks on failure automatically happen. What setting enforces this?",
    answers: [
      { selection: "A", answer: "--disable-rollback flag." },
      { selection: "B", answer: "--on-failure DELETE flag." },
      { selection: "C", answer: "--on-failure ROLLBACK flag." },
      { selection: "D", answer: "Use Change Sets." }
    ],
    correctanswer: "C",
    explantion: "Using the on-failure ROLLBACK flag ensures that failed stack creates or updates are automatically rolled back.",
    domain: "Deployment",
    section: "2"
  },
  {
    question: "To track anomalous API usage and automatically respond, what service can detect and remediate threats in real time?",
    answers: [
      { selection: "A", answer: "WAF only." },
      { selection: "B", answer: "GuardDuty with automated remediation." },
      { selection: "C", answer: "CloudTrail only." },
      { selection: "D", answer: "IAM User Access logs." }
    ],
    correctanswer: "B",
    explantion: "GuardDuty can detect threats like anomalous API calls and, if integrated with Lambda or EventBridge, enable automated remediation.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Your application backs up data nightly to S3 and you want lifecycle rules to archive old backups automatically. What feature should you configure?",
    answers: [
      { selection: "A", answer: "Use S3 Object Lock." },
      { selection: "B", answer: "Set up S3 Lifecycle transition to Glacier after X days." },
      { selection: "C", answer: "Use manual scripting to move data." },
      { selection: "D", answer: "Use S3 replication." }
    ],
    correctanswer: "B",
    explantion: "Lifecycle rules can automatically transition objects to cheaper storage tiers like Glacier based on age.",
    domain: "Cost Optimization",
    section: "2"
  },
  {
    question: "You need analytics on unstructured data in S3 without moving it. Which AWS service is designed for this?",
    answers: [
      { selection: "A", answer: "Athena." },
      { selection: "B", answer: "Redshift Spectrum." },
      { selection: "C", answer: "EMR Cluster." },
      { selection: "D", answer: "RDS for PostgreSQL." }
    ],
    correctanswer: "A",
    explantion: "Athena allows SQL queries directly on S3 objects—ideal for analytics on unstructured or semi-structured data without moving it.",
    domain: "Analytics",
    section: "2"
  },
  {
    question: "Your RDS instance's CPU usage spikes at irregular intervals, affecting performance. What feature helps protect the application?",
    answers: [
      { selection: "A", answer: "Enable Multi-AZ replica." },
      { selection: "B", answer: "Use Autoscaling for RDS." },
      { selection: "C", answer: "Use RDS Proxy." },
      { selection: "D", answer: "Increase instance size manually." }
    ],
    correctanswer: "C",
    explantion: "RDS Proxy can manage connections efficiently, reduce bursts, and help stabilize performance during irregular traffic.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your Lambda function needs access to S3, DynamoDB, and Secrets Manager. What’s the best way to grant permissions?",
    answers: [
      { selection: "A", answer: "Embed IAM user keys in Lambda." },
      { selection: "B", answer: "Attach an IAM role to Lambda with least privilege policies." },
      { selection: "C", answer: "Grant Lambda access via bucket policy only." },
      { selection: "D", answer: "Use root credentials." }
    ],
    correctanswer: "B",
    explantion: "An IAM role with least privilege, attached to Lambda, ensures secure and maintainable permissions across resources.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need database-level encryption of network connections to RDS Oracle. What configuration is required?",
    answers: [
      { selection: "A", answer: "Use SSL/TLS and enforce encryption via parameter group." },
      { selection: "B", answer: "Use Database Activity Streams." },
      { selection: "C", answer: "Enable storage-level encryption only." },
      { selection: "D", answer: "Use IAM authentication only." }
    ],
    correctanswer: "A",
    explantion: "SSL/TLS encrypts data in transit, and parameter group enforcement ensures all connections are secured at the database level.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Your API is behind CloudFront. You want visitors to be automatically redirected to HTTPS. What configuration achieves that?",
    answers: [
      { selection: "A", answer: "Use HTTP -> HTTPS redirect configured in CloudFront behaviors." },
      { selection: "B", answer: "Use ALB redirect rules only." },
      { selection: "C", answer: "Use Route 53 HTTPS record." },
      { selection: "D", answer: "Use Lambda@Edge for redirect logic." }
    ],
    correctanswer: "A",
    explantion: "CloudFront supports viewer protocol policy to redirect HTTP requests to HTTPS automatically at the edge.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Your app needs to share session state between web servers. Which service is best for this?",
    answers: [
      { selection: "A", answer: "DynamoDB only." },
      { selection: "B", answer: "S3." },
      { selection: "C", answer: "ElastiCache Redis." },
      { selection: "D", answer: "App server sticky sessions only." }
    ],
    correctanswer: "C",
    explantion: "ElastiCache Redis enables fast, shared in-memory session storage across web servers—better than sticky sessions or higher-latency options.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your static website uses S3, and you want to enable versioned backups and easy rollback. What should you enable?",
    answers: [
      { selection: "A", answer: "Enable versioning and use Lifecycle rules." },
      { selection: "B", answer: "Use manual copies only." },
      { selection: "C", answer: "Use CloudFront to store versions." },
      { selection: "D", answer: "Use S3 replication only." }
    ],
    correctanswer: "A",
    explantion: "Enabling versioning and lifecycle rules allows rollback and cleanup of older versions in a controlled manner.",
    domain: "Resilience",
    section: "2"
  },
  {
    question: "Your API is throttled despite high backend capacity. Which method helps identify throttling root cause?",
    answers: [
      { selection: "A", answer: "Check CloudWatch metrics on API Gateway and Lambda." },
      { selection: "B", answer: "Check billing dashboard only." },
      { selection: "C", answer: "Check server logs manually." },
      { selection: "D", answer: "Enable VPC flow logs only." }
    ],
    correctanswer: "A",
    explantion: "CloudWatch provides detailed metrics for throttling at API Gateway and Lambda layers for troubleshooting.",
    domain: "Operations",
    section: "2"
  },
  {
    question: "You want to distribute SQS messages across multiple consumers evenly. How do you configure the queue?",
    answers: [
      { selection: "A", answer: "Use FIFO queue." },
      { selection: "B", answer: "Use Standard queue with message groups." },
      { selection: "C", answer: "Use Standard queue only." },
      { selection: "D", answer: "Use Index-based partitioning in FIFO." }
    ],
    correctanswer: "C",
    explantion: "SQS Standard queues distribute messages across consumers in an unordered, best-effort fashion—ideal for load distribution.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your organization needs to enforce a company-wide tagging strategy. Which AWS service helps validate resources at creation?",
    answers: [
      { selection: "A", answer: "Trust administrator to tag correctly." },
      { selection: "B", answer: "Use AWS Config rule requiring tags." },
      { selection: "C", answer: "Use IAM policy conditional on tags." },
      { selection: "D", answer: "Use manual audits monthly." }
    ],
    correctanswer: "B",
    explantion: "AWS Config rules can be automated to verify tag compliance for resources at and after creation.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "Your application uses an RDS MySQL instance and scale reads. Which method gives the best read scalability with minimal changes?",
    answers: [
      { selection: "A", answer: "Enable Read Replica." },
      { selection: "B", answer: "Use Multi-AZ." },
      { selection: "C", answer: "Use Aurora cluster with reader endpoints." },
      { selection: "D", answer: "Scale vertically." }
    ],
    correctanswer: "C",
    explantion: "Aurora with reader endpoints can scale to multiple readers easily, requiring minimal app changes compared to traditional replicas.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your Lambda function is experiencing cold starts and latency. What solution reduces cold start delay?",
    answers: [
      { selection: "A", answer: "Increase memory only." },
      { selection: "B", answer: "Use Provisioned Concurrency." },
      { selection: "C", answer: "Use API Gateway caching." },
      { selection: "D", answer: "Use EC2 instead." }
    ],
    correctanswer: "B",
    explantion: "Provisioned Concurrency keeps Lambda instances initialized and warm, reducing cold start latencies significantly.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "You need to ensure cross-region replication of RDS data for compliance. What’s a built-in method?",
    answers: [
      { selection: "A", answer: "Use RDS Multi-AZ." },
      { selection: "B", answer: "Use cross-region Read Replica." },
      { selection: "C", answer: "Use manual snapshot exports." },
      { selection: "D", answer: "Use AWS Backup only." }
    ],
    correctanswer: "B",
    explantion: "Cross-region Read Replica allows for asynchronous replication to another region, useful for disaster recovery and compliance.",
    domain: "Resilience",
    section: "2"
  },
  {
    question: "You require real-time read/write analytics on DynamoDB streams. Which service can process this data efficiently?",
    answers: [
      { selection: "A", answer: "Use Lambda functions." },
      { selection: "B", answer: "Use Kinesis Data Streams." },
      { selection: "C", answer: "Use DynamoDB Streams with Kinesis Data Firehose." },
      { selection: "D", answer: "Use direct API Gateway integration." }
    ],
    correctanswer: "C",
    explantion: "DynamoDB Streams integrated with Firehose allows near-real-time analytics delivery to destinations like S3 or Redshift.",
    domain: "Analytics",
    section: "2"
  },
  {
    question: "Your application must make calls to external partner APIs. You need to store API credentials securely. Which service should you use?",
    answers: [
      { selection: "A", answer: "Store in Lambda environment variables." },
      { selection: "B", answer: "Store in Secrets Manager and grant Lambda read access." },
      { selection: "C", answer: "Store in S3 with public read." },
      { selection: "D", answer: "Embed directly into code." }
    ],
    correctanswer: "B",
    explantion: "Secrets Manager securely stores credentials with encryption, access control, and rotation—ideal for application secrets.",
    domain: "Security",
    section: "2"
  },
  {
    question: "Your application uses SQS with delayed jobs, but occasionally jobs fail. You need a mechanism to retry failed jobs. What should you configure?",
    answers: [
      { selection: "A", answer: "Use long polling." },
      { selection: "B", answer: "Set up a Dead-Letter Queue (DLQ)." },
      { selection: "C", answer: "Use S3 notifications." },
      { selection: "D", answer: "Use CloudWatch alarms." }
    ],
    correctanswer: "B",
    explantion: "Dead-Letter Queues capture failed messages for later inspection or reprocessing—essential for fault-tolerant messaging workflows.",
    domain: "Resilience",
    section: "2"
  },
  {
    question: "To prevent AWS resource renaming or deletion by mistake, which approach helps enforce prevention at deployment time?",
    answers: [
      { selection: "A", answer: "Use CloudFormation with DeletionPolicy and Retain/resource." },
      { selection: "B", answer: "Use IAM policies only." },
      { selection: "C", answer: "Use manual tagging and review." },
      { selection: "D", answer: "Use lifecycle rules." }
    ],
    correctanswer: "A",
    explantion: "CloudFormation DeletionPolicy settings like Retain prevent accidental deletion or alteration via stack updates.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "You need to orchestrate batch jobs that run on EC2 with dependency tasks. What AWS service helps coordinate this?",
    answers: [
      { selection: "A", answer: "Run manually via SSH." },
      { selection: "B", answer: "Use Step Functions with EC2 actions." },
      { selection: "C", answer: "Use Lambda only." },
      { selection: "D", answer: "Use SQS only." }
    ],
    correctanswer: "B",
    explantion: "Step Functions can orchestrate EC2 batch workflows with dependencies and state tracking, enabling reliable execution.",
    domain: "Deployment",
    section: "2"
  },
  {
    question: "Your system needs to scale static web hosting globally while minimizing cost. Which combination is cheapest and fastest?",
    answers: [
      { selection: "A", answer: "Use S3 public hosting only." },
      { selection: "B", answer: "Use CloudFront + S3 with Origin Shield." },
      { selection: "C", answer: "Use EC2 server hosting." },
      { selection: "D", answer: "Use Route 53 geolocation routing only." }
    ],
    correctanswer: "B",
    explantion: "CloudFront plus S3 (and optionally Origin Shield) provides cost-effective, performant global static hosting.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your organization wants to prevent changes in security groups outside change windows. Which tool can automate enforcement?",
    answers: [
      { selection: "A", answer: "Use IAM manual review." },
      { selection: "B", answer: "Use AWS Config with custom remediation Lambda." },
      { selection: "C", answer: "Use CloudWatch only." },
      { selection: "D", answer: "Use Security Hub only." }
    ],
    correctanswer: "B",
    explantion: "AWS Config rules with automated remediation Lambdas can enforce configuration policy like security-group lockdown windows.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "You need to run ad-hoc SQL queries on data residing in DynamoDB without impacting production. What’s the best option?",
    answers: [
      { selection: "A", answer: "Scan the table directly." },
      { selection: "B", answer: "Use Athena with DynamoDB connector." },
      { selection: "C", answer: "Export data to RDS." },
      { selection: "D", answer: "Use API Gateway." }
    ],
    correctanswer: "B",
    explantion: "Athena’s DynamoDB connector enables efficient, serverless SQL querying of DynamoDB data without impacting operational throughput.",
    domain: "Analytics",
    section: "2"
  },
  {
    question: "Your EC2 instances require credentials rotated daily. What method ensures automated rotation without deploy changes?",
    answers: [
      { selection: "A", answer: "Create IAM user and rotate manually." },
      { selection: "B", answer: "Use IAM role attached to instance (no credentials needed)." },
      { selection: "C", answer: "Store credentials in S3 and rotate daily." },
      { selection: "D", answer: "Embed credentials in UserData." }
    ],
    correctanswer: "B",
    explantion: "IAM roles assigned to instances provide temporary credentials automatically rotated—no manual rotations or code changes required.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need to prevent data exfiltration from S3 objects via public internet. What is the best approach?",
    answers: [
      { selection: "A", answer: "Block public access on bucket and use VPC Gateway Endpoint." },
      { selection: "B", answer: "Use bucket ACLs only." },
      { selection: "C", answer: "Use IAM policy only." },
      { selection: "D", answer: "Use CloudFront only." }
    ],
    correctanswer: "A",
    explantion: "Blocking public access plus VPC gateway endpoint ensures data remains private and accessible only within the VPC.",
    domain: "Security",
    section: "2"
  },
  {
    question: "To reduce costs on infrequently accessed data in DynamoDB, what feature can you enable?",
    answers: [
      { selection: "A", answer: "Provisioned throughput only." },
      { selection: "B", answer: "On-Demand billing mode." },
      { selection: "C", answer: "Enable DynamoDB Standard Infrequent Access (DAX-IA)." },
      { selection: "D", answer: "Use S3 instead." }
    ],
    correctanswer: "C",
    explantion: "DynamoDB Standard-IA storage class lowers costs for infrequently accessed items while keeping performance characteristics.",
    domain: "Cost Optimization",
    section: "2"
  },
  {
    question: "Your application experiences inconsistent API performance. You want real-time metrics aggregation across services. What helps achieve this?",
    answers: [
      { selection: "A", answer: "Use CloudTrail only." },
      { selection: "B", answer: "Use CloudWatch Container Insights and dashboards." },
      { selection: "C", answer: "Use EC2 instance monitoring only." },
      { selection: "D", answer: "Use billing dashboard." }
    ],
    correctanswer: "B",
    explantion: "Container Insights provides metrics across services (ECS, Lambda, etc.) and enables centralized performance dashboards.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "To authorize cross-account access safely to your S3 bucket, which method should you use?",
    answers: [
      { selection: "A", answer: "Share access keys." },
      { selection: "B", answer: "Use bucket policy granting AssumeRole permission." },
      { selection: "C", answer: "Use public access bucket ACLs." },
      { selection: "D", answer: "Use cross-account IAM user." }
    ],
    correctanswer: "B",
    explantion: "Bucket policies allowing a trusted cross-account role to assume access is secure and auditable, without sharing keys.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need to host a containerized application behind ALB with sticky sessions. What launch type supports this with minimal config?",
    answers: [
      { selection: "A", answer: "ECS Fargate with application cookie stickiness." },
      { selection: "B", answer: "EKS only." },
      { selection: "C", answer: "EC2 launch type with manual routing." },
      { selection: "D", answer: "Use ALB only without ECS." }
    ],
    correctanswer: "A",
    explantion: "ECS Fargate services behind ALB support session stickiness using application-level cookies—easy to configure in service definitions.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your database spans multiple regions and needs global read performance. What technology should you leverage?",
    answers: [
      { selection: "A", answer: "DynamoDB Global Tables." },
      { selection: "B", answer: "Cross-region Read Replica only." },
      { selection: "C", answer: "Route 53 latency routing." },
      { selection: "D", answer: "Use VPN between regions." }
    ],
    correctanswer: "A",
    explantion: "DynamoDB Global Tables provide fully replicated, multi-region tables for fast reads worldwide with minimal code changes.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "Your enterprise needs to enforce IAM policy boundaries across accounts. Which boundary helps you do that?",
    answers: [
      { selection: "A", answer: "Use IAM permission boundary." },
      { selection: "B", answer: "Use Service Control Policies (SCPs)." },
      { selection: "C", answer: "Use IAM role trust policies." },
      { selection: "D", answer: "Use security groups." }
    ],
    correctanswer: "B",
    explantion: "SCPs in AWS Organizations enforce service-level and permission-level constraints across accounts consistently.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "Your streaming data needs to be analyzed and stored in a data warehouse continuously. What pipeline pattern works best?",
    answers: [
      { selection: "A", answer: "Use Lambda with DynamoDB." },
      { selection: "B", answer: "Use Kinesis Data Firehose to stream into Redshift." },
      { selection: "C", answer: "Use SQS and manual loading." },
      { selection: "D", answer: "Use Athena only." }
    ],
    correctanswer: "B",
    explantion: "Firehose to Redshift enables direct streaming ingestion and transformation with minimal management overhead.",
    domain: "Analytics",
    section: "2"
  },
  {
    question: "Your application must scale read-heavy workloads and maintain strongly consistent caches. What solution works best?",
    answers: [
      { selection: "A", answer: "Use CloudFront in front of DynamoDB." },
      { selection: "B", answer: "Use DAX (DynamoDB Accelerator)." },
      { selection: "C", answer: "Use S3 only." },
      { selection: "D", answer: "Use regional replicas." }
    ],
    correctanswer: "B",
    explantion: "DAX provides fast, strongly consistent in-memory caching for DynamoDB read-heavy workloads.",
    domain: "Performance",
    section: "2"
  },
  {
    question: "You want to restrict AWS CLI usage to business hours only. Which feature can enforce this conditionally?",
    answers: [
      { selection: "A", answer: "Use CloudWatch alarms." },
      { selection: "B", answer: "Use IAM policy with aws:CurrentTime condition." },
      { selection: "C", answer: "Use SSO only." },
      { selection: "D", answer: "Use MFA only." }
    ],
    correctanswer: "B",
    explantion: "IAM policies can include time-based conditions using aws:CurrentTime to constrain access to specific hours.",
    domain: "Governance",
    section: "2"
  },
  {
    question: "Your containers need environment-specific secrets. You want centralized management and automatic injection. What approach is best?",
    answers: [
      { selection: "A", answer: "Store secrets in code." },
      { selection: "B", answer: "Use Secrets Manager with ECS task role." },
      { selection: "C", answer: "Use Parameter Store without injection." },
      { selection: "D", answer: "Store in S3." }
    ],
    correctanswer: "B",
    explantion: "Secrets Manager integration with ECS allows secret injection into containers at runtime securely and centrally.",
    domain: "Security",
    section: "2"
  },
  {
    question: "You need real-time dashboards for AWS resources across multiple accounts and regions. What’s the best centralized solution?",
    answers: [
      { selection: "A", answer: "Use separate CloudWatch dashboards per account." },
      { selection: "B", answer: "Use CloudWatch cross-account dashboards (dashboard sharing)." },
      { selection: "C", answer: "Use manual aggregation." },
      { selection: "D", answer: "Use AWS Config only." }
    ],
    correctanswer: "B",
    explantion: "CloudWatch cross-account dashboards allow you to visualize metrics centrally across accounts and regions easily.",
    domain: "Operations",
    section: "2"
  },
  {
    question: "Your organization requires immutable infrastructure deployment with versioning. What is a good strategy?",
    answers: [
      { selection: "A", answer: "Use in-place patching." },
      { selection: "B", answer: "Use blue-green deployment with immutable AMIs via Auto Scaling group." },
      { selection: "C", answer: "Use manual updates." },
      { selection: "D", answer: "Use Lambda function." }
    ],
    correctanswer: "B",
    explantion: "Immutable deployments using separate AMIs and blue-green swapping reduce configuration drift and allow safer rollbacks.",
    domain: "Deployment",
    section: "2"
  }
  // 65 total
];
 const aiPractitionerQuestions2 = [
  {
    "question": "Which AWS service is a fully managed platform for building, training, and deploying machine learning models?",
    "answers": [
      { "selection": "A", "answer": "Amazon SageMaker" },
      { "selection": "B", "answer": "Amazon Rekognition" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon SageMaker is a comprehensive service for the entire machine learning workflow, from data preparation to model deployment.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which AWS service uses deep learning to convert text into lifelike speech?",
    "answers": [
      { "selection": "A", "answer": "Amazon Lex" },
      { "selection": "B", "answer": "Amazon Transcribe" },
      { "selection": "C", "answer": "Amazon Polly" },
      { "selection": "D", "answer": "Amazon Translate" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Polly is a text-to-speech service that offers a wide selection of languages and realistic voices for creating natural-sounding speech.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "Which service is used for building conversational interfaces, such as chatbots, using voice and text?",
    "answers": [
      { "selection": "A", "answer": "Amazon Translate" },
      { "selection": "B", "answer": "Amazon Lex" },
      { "selection": "C", "answer": "Amazon Polly" },
      { "selection": "D", "answer": "Amazon Comprehend" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Lex provides the power of automatic speech recognition and natural language understanding to build sophisticated conversational bots.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "What is the primary function of Amazon Rekognition?",
    "answers": [
      { "selection": "A", "answer": "Translating text between languages" },
      { "selection": "B", "answer": "Analyzing images and videos for objects, faces, and activities" },
      { "selection": "C", "answer": "Converting speech to text" },
      { "selection": "D", "answer": "Providing a managed Jupyter notebook environment" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Rekognition is a computer vision service that can detect objects, faces, text, and activities within images and videos.",
    "domain": "Computer Vision",
    "section": "2"
  },
  {
    "question": "Which AWS service helps you find insights and relationships in text by extracting key phrases, entities, and sentiment?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Textract" },
      { "selection": "C", "answer": "Amazon Polly" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to uncover insights from unstructured text.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which service is used for automated speech recognition to convert spoken audio into text?",
    "answers": [
      { "selection": "A", "answer": "Amazon Translate" },
      { "selection": "B", "answer": "Amazon Transcribe" },
      { "selection": "C", "answer": "Amazon Polly" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Transcribe is an ASR (Automatic Speech Recognition) service that makes it easy for developers to add speech-to-text capability to their applications.",
    "domain": "Speech Recognition",
    "section": "2"
  },
  {
    "question": "Which AWS service provides neural machine translation to accurately translate text from one language to another?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Transcribe" },
      { "selection": "C", "answer": "Amazon Translate" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Translate is a machine translation service that uses deep learning to provide high-quality translation for a variety of languages.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which service can be used to analyze documents and automatically extract text, handwriting, and data from forms and tables?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon Comprehend" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon SageMaker" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Textract is an optical character recognition (OCR) service that goes beyond simple text extraction to identify fields and values in forms and data in tables.",
    "domain": "Document Analysis",
    "section": "2"
  },
  {
    "question": "Which AWS service helps businesses create individualized recommendations for their customers?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "Amazon Personalize" },
      { "selection": "C", "answer": "Amazon Lex" },
      { "selection": "D", "answer": "Amazon SageMaker" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Personalize is a service that uses machine learning to create real-time, personalized recommendations for users.",
    "domain": "Personalization",
    "section": "2"
  },
  {
    "question": "Which AWS service is designed for generating accurate time-series forecasts using machine learning?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "Amazon SageMaker" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon Forecast is a fully managed service that uses machine learning algorithms to produce highly accurate forecasts for business metrics such as demand or sales.",
    "domain": "Forecasting",
    "section": "2"
  },
  {
    "question": "Which service helps you to detect and prevent online fraud by using machine learning models?",
    "answers": [
      { "selection": "A", "answer": "AWS Shield" },
      { "selection": "B", "answer": "Amazon Macie" },
      { "selection": "C", "answer": "Amazon Fraud Detector" },
      { "selection": "D", "answer": "AWS WAF" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Fraud Detector is a fully managed service that makes it easy to identify potentially fraudulent online activities, such as online payment fraud or the creation of fake accounts.",
    "domain": "Fraud Detection",
    "section": "2"
  },
  {
    "question": "What is the primary purpose of Amazon Kendra?",
    "answers": [
      { "selection": "A", "answer": "To build a data warehouse" },
      { "selection": "B", "answer": "To provide intelligent search across multiple data sources" },
      { "selection": "C", "answer": "To translate documents" },
      { "selection": "D", "answer": "To generate personalized recommendations" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Kendra is an intelligent search service powered by machine learning that allows you to search across disparate data sources using natural language queries.",
    "domain": "Enterprise Search",
    "section": "2"
  },
  {
    "question": "Which AWS service would you use to get an AI-powered code review to find bugs and improve code quality?",
    "answers": [
      { "selection": "A", "answer": "Amazon CodeCommit" },
      { "selection": "B", "answer": "Amazon CodeGuru" },
      { "selection": "C", "answer": "Amazon CodeBuild" },
      { "selection": "D", "answer": "Amazon SageMaker" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon CodeGuru is a developer tool that provides intelligent recommendations to improve code quality and identify an application's most expensive lines of code.",
    "domain": "Developer Tools",
    "section": "2"
  },
  {
    "question": "Which AWS service is designed to help with the automated extraction of medical information from documents?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend Medical" },
      { "selection": "B", "answer": "Amazon HealthLake" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon Comprehend Medical is a natural language processing service that uses machine learning to extract relevant medical information from unstructured text.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "Which AWS service allows you to easily analyze and store healthcare data in a single, secure environment?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon DynamoDB" },
      { "selection": "C", "answer": "Amazon HealthLake" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon HealthLake is a HIPAA-eligible service that enables healthcare providers to securely store, transform, query, and analyze health data at petabyte scale.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "Which AWS service can automatically detect anomalies in industrial equipment using sensor data?",
    "answers": [
      { "selection": "A", "answer": "Amazon SageMaker" },
      { "selection": "B", "answer": "Amazon Lookout for Equipment" },
      { "selection": "C", "answer": "Amazon Forecast" },
      { "selection": "D", "answer": "AWS IoT Analytics" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Lookout for Equipment is a service that uses machine learning to detect abnormal behavior in industrial equipment and predict potential failures.",
    "domain": "Industrial AI",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to create and manage highly accurate machine learning datasets for computer vision?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon SageMaker Ground Truth" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon Comprehend" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon SageMaker Ground Truth helps you build highly accurate training datasets for machine learning by providing human and automated labeling workflows.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which AWS service is best suited for building, training, and deploying custom ML models?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon SageMaker" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon SageMaker provides the full lifecycle management for machine learning projects, making it ideal for custom model development.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to extract key phrases, entities, and sentiment from unstructured text?",
    "answers": [
      { "selection": "A", "answer": "Amazon Polly" },
      { "selection": "B", "answer": "Amazon Transcribe" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Translate" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Comprehend is the managed NLP service that provides insights from text content.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "What is the key benefit of using Amazon Lex for conversational interfaces?",
    "answers": [
      { "selection": "A", "answer": "It provides a wide range of human-like voices" },
      { "selection": "B", "answer": "It is based on the same technology as Alexa" },
      { "selection": "C", "answer": "It can be used for fraud detection" },
      { "selection": "D", "answer": "It allows you to build custom computer vision models" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Lex uses the same deep learning technologies as Amazon Alexa, allowing for high-quality speech recognition and natural language understanding.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "Which AWS service can analyze videos to detect objects and faces?",
    "answers": [
      { "selection": "A", "answer": "Amazon SageMaker" },
      { "selection": "B", "answer": "Amazon Rekognition" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Rekognition provides both image and video analysis capabilities, including face detection, object recognition, and content moderation.",
    "domain": "Computer Vision",
    "section": "2"
  },
  {
    "question": "Which service helps you create custom forecasts for business metrics like sales or inventory?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Forecast" },
      { "selection": "C", "answer": "Amazon Personalize" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Forecast uses machine learning to generate highly accurate time-series forecasts with minimal ML expertise required.",
    "domain": "Forecasting",
    "section": "2"
  },
  {
    "question": "What is the primary use case for Amazon Transcribe?",
    "answers": [
      { "selection": "A", "answer": "Translating spoken language" },
      { "selection": "B", "answer": "Converting audio to text" },
      { "selection": "C", "answer": "Converting text to audio" },
      { "selection": "D", "answer": "Generating code recommendations" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Transcribe is a fully managed speech-to-text service that supports a wide range of audio formats and languages.",
    "domain": "Speech Recognition",
    "section": "2"
  },
  {
    "question": "Which AWS service is best suited for automatically translating text from documents and websites?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Translate" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Translate is the dedicated service for fast, high-quality language translation using advanced machine learning models.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which AWS service can extract text, forms, and tables from documents and images?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon Comprehend" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon S3" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Textract can automatically identify and extract data from a wide variety of documents and images, including structured data in forms and tables.",
    "domain": "Document Analysis",
    "section": "2"
  },
  {
    "question": "Which AWS service uses machine learning to create a personalized user experience?",
    "answers": [
      { "selection": "A", "answer": "Amazon Personalize" },
      { "selection": "B", "answer": "Amazon SageMaker" },
      { "selection": "C", "answer": "Amazon Lex" },
      { "selection": "D", "answer": "Amazon Forecast" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon Personalize is a managed service that uses your data to create highly relevant recommendations for your users, similar to what you see on e-commerce sites.",
    "domain": "Personalization",
    "section": "2"
  },
  {
    "question": "Which service helps identify and prevent online payment fraud?",
    "answers": [
      { "selection": "A", "answer": "Amazon Macie" },
      { "selection": "B", "answer": "Amazon Fraud Detector" },
      { "selection": "C", "answer": "AWS Shield" },
      { "selection": "D", "answer": "AWS KMS" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Fraud Detector provides a machine learning-based service to detect and prevent various types of online fraud.",
    "domain": "Fraud Detection",
    "section": "2"
  },
  {
    "question": "Which AWS service provides an intelligent search capability that understands natural language?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon Kendra" },
      { "selection": "C", "answer": "Amazon Lex" },
      { "selection": "D", "answer": "Amazon Comprehend" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Kendra is a highly accurate and easy-to-use enterprise search service powered by machine learning.",
    "domain": "Enterprise Search",
    "section": "2"
  },
  {
    "question": "What is the purpose of Amazon CodeGuru?",
    "answers": [
      { "selection": "A", "answer": "To build and deploy applications" },
      { "selection": "B", "answer": "To provide intelligent code recommendations and identify expensive lines of code" },
      { "selection": "C", "answer": "To translate code between languages" },
      { "selection": "D", "answer": "To create chatbots from code" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon CodeGuru is a machine learning service that provides intelligent recommendations for improving code quality, identifying hard-to-find bugs, and reducing costs.",
    "domain": "Developer Tools",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used for extracting medical data like patient names and medication from clinical notes?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend Medical" },
      { "selection": "B", "answer": "Amazon Textract" },
      { "selection": "C", "answer": "Amazon HealthLake" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon Comprehend Medical is a HIPAA-eligible service that uses machine learning to extract clinical information from unstructured medical text.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "Which AWS service provides a serverless platform to run and scale machine learning workloads?",
    "answers": [
      { "selection": "A", "answer": "Amazon EC2" },
      { "selection": "B", "answer": "AWS Lambda" },
      { "selection": "C", "answer": "Amazon SageMaker" },
      { "selection": "D", "answer": "AWS Fargate" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon SageMaker is a fully managed service that provides a serverless experience for many machine learning tasks.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which of the following is a text-to-speech service with support for multiple languages?",
    "answers": [
      { "selection": "A", "answer": "Amazon Lex" },
      { "selection": "B", "answer": "Amazon Transcribe" },
      { "selection": "C", "answer": "Amazon Polly" },
      { "selection": "D", "answer": "Amazon Translate" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Polly is the primary text-to-speech service on AWS, offering a wide array of voices and languages.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to build chatbots and voice-enabled applications?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon Comprehend" },
      { "selection": "C", "answer": "Amazon Lex" },
      { "selection": "D", "answer": "Amazon Forecast" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Lex is specifically designed for creating conversational interfaces with automatic speech recognition and natural language understanding.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "Which service would you use to detect objects, people, and text in images?",
    "answers": [
      { "selection": "A", "answer": "Amazon Textract" },
      { "selection": "B", "answer": "Amazon Rekognition" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Rekognition provides a robust set of computer vision capabilities for image and video analysis.",
    "domain": "Computer Vision",
    "section": "2"
  },
  {
    "question": "Which AWS service is a natural language processing (NLP) service that uncovers insights from text?",
    "answers": [
      { "selection": "A", "answer": "Amazon Translate" },
      { "selection": "B", "answer": "Amazon Transcribe" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Comprehend is the managed service for NLP tasks, including sentiment analysis and key phrase extraction.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "What is the primary purpose of Amazon Transcribe?",
    "answers": [
      { "selection": "A", "answer": "To translate audio" },
      { "selection": "B", "answer": "To convert speech to text" },
      { "selection": "C", "answer": "To convert text to speech" },
      { "selection": "D", "answer": "To analyze text sentiment" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Transcribe provides a fast and accurate way to convert speech from audio and video files into text.",
    "domain": "Speech Recognition",
    "section": "2"
  },
  {
    "question": "Which service offers high-quality machine translation using deep learning models?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Translate" },
      { "selection": "C", "answer": "Amazon Polly" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Translate is the dedicated service for high-quality, neural machine translation.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which AWS service helps businesses create individualized product recommendations?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "Amazon Personalize" },
      { "selection": "C", "answer": "Amazon SageMaker" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Personalize is a machine learning service that uses your data to deliver tailored recommendations for your users, improving engagement and conversion.",
    "domain": "Personalization",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used for forecasting business metrics like product demand or resource needs?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon Comprehend" },
      { "selection": "C", "answer": "Amazon Forecast" },
      { "selection": "D", "answer": "Amazon SageMaker" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Forecast is a managed service that uses ML to deliver highly accurate time-series forecasts.",
    "domain": "Forecasting",
    "section": "2"
  },
  {
    "question": "Which AWS service would you use for automated document analysis and data extraction from forms?",
    "answers": [
      { "selection": "A", "answer": "Amazon Transcribe" },
      { "selection": "B", "answer": "Amazon Textract" },
      { "selection": "C", "answer": "Amazon Rekognition" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Textract's primary function is to extract text and structured data from documents, including forms and tables.",
    "domain": "Document Analysis",
    "section": "2"
  },
  {
    "question": "Which AWS service helps detect fraudulent online activities using machine learning models?",
    "answers": [
      { "selection": "A", "answer": "Amazon Macie" },
      { "selection": "B", "answer": "Amazon Fraud Detector" },
      { "selection": "C", "answer": "AWS Shield" },
      { "selection": "D", "answer": "AWS WAF" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Fraud Detector is a managed service that uses machine learning to identify potentially fraudulent activities in real-time.",
    "domain": "Fraud Detection",
    "section": "2"
  },
  {
    "question": "Which AWS service is an enterprise search service that understands natural language queries?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Kendra" },
      { "selection": "C", "answer": "Amazon Lex" },
      { "selection": "D", "answer": "Amazon S3" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Kendra is an intelligent search service that uses machine learning to deliver more relevant search results than traditional keyword-based searches.",
    "domain": "Enterprise Search",
    "section": "2"
  },
  {
    "question": "Which AWS service is designed to automate code reviews to find bugs and improve code quality?",
    "answers": [
      { "selection": "A", "answer": "AWS Cloud9" },
      { "selection": "B", "answer": "Amazon CodeGuru" },
      { "selection": "C", "answer": "Amazon CodeCommit" },
      { "selection": "D", "answer": "Amazon SageMaker" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon CodeGuru uses machine learning to automate code reviews and find defects in code, performance issues, and security vulnerabilities.",
    "domain": "Developer Tools",
    "section": "2"
  },
  {
    "question": "What is the key benefit of Amazon Comprehend Medical?",
    "answers": [
      { "selection": "A", "answer": "It provides text-to-speech for medical documents" },
      { "selection": "B", "answer": "It extracts and links medical information from unstructured text" },
      { "selection": "C", "answer": "It translates medical terminology between languages" },
      { "selection": "D", "answer": "It generates medical images from text descriptions" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Comprehend Medical is specifically trained to understand and extract protected health information (PHI) and clinical data from medical notes and reports.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "Which service helps you detect anomalies in industrial equipment by analyzing sensor data?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "AWS IoT Analytics" },
      { "selection": "C", "answer": "Amazon Lookout for Equipment" },
      { "selection": "D", "answer": "Amazon SageMaker" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Lookout for Equipment is a machine learning service that uses data from industrial sensors to detect early warning signs of machine failure.",
    "domain": "Industrial AI",
    "section": "2"
  },
  {
    "question": "Which AWS service allows you to create highly accurate datasets for machine learning models?",
    "answers": [
      { "selection": "A", "answer": "Amazon SageMaker Ground Truth" },
      { "selection": "B", "answer": "Amazon EMR" },
      { "selection": "C", "answer": "Amazon S3" },
      { "selection": "D", "answer": "Amazon SageMaker Feature Store" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon SageMaker Ground Truth is a managed service that helps you build high-quality datasets for training machine learning models by providing human-assisted labeling.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which of the following is a fully managed service for analyzing and storing healthcare data?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon HealthLake" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon HealthLake is a HIPAA-eligible service that enables organizations to store, transform, query, and analyze health data securely.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "Which service would you use to build, train, and deploy an ML model that predicts customer churn?",
    "answers": [
      { "selection": "A", "answer": "Amazon Personalize" },
      { "selection": "B", "answer": "Amazon Forecast" },
      { "selection": "C", "answer": "Amazon SageMaker" },
      { "selection": "D", "answer": "Amazon Rekognition" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon SageMaker provides the tools and infrastructure to build and deploy custom machine learning models for specific business problems like churn prediction.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to create and manage custom chatbots?",
    "answers": [
      { "selection": "A", "answer": "Amazon Polly" },
      { "selection": "B", "answer": "Amazon Lex" },
      { "selection": "C", "answer": "Amazon Transcribe" },
      { "selection": "D", "answer": "Amazon Comprehend" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Lex is the service for building conversational interfaces, including chatbots, using voice and text.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "What is the core functionality of Amazon Polly?",
    "answers": [
      { "selection": "A", "answer": "Speech-to-text" },
      { "selection": "B", "answer": "Text-to-speech" },
      { "selection": "C", "answer": "Text translation" },
      { "selection": "D", "answer": "Image analysis" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Polly's main purpose is to convert written text into natural-sounding audio.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "Which AWS service analyzes videos and images for inappropriate content?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon Rekognition" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Textract" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Rekognition provides content moderation features to detect explicit or suggestive content in visual media.",
    "domain": "Computer Vision",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used to extract sentiment from customer reviews?",
    "answers": [
      { "selection": "A", "answer": "Amazon Translate" },
      { "selection": "B", "answer": "Amazon Lex" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Comprehend's sentiment analysis feature can determine if a piece of text expresses a positive, negative, or neutral sentiment.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which AWS service can convert a 2-hour podcast audio file into a text transcript?",
    "answers": [
      { "selection": "A", "answer": "Amazon Lex" },
      { "selection": "B", "answer": "Amazon Polly" },
      { "selection": "C", "answer": "Amazon Transcribe" },
      { "selection": "D", "answer": "Amazon Comprehend" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Transcribe is a service that specializes in converting audio and video into text transcripts.",
    "domain": "Speech Recognition",
    "section": "2"
  },
  {
    "question": "Which service would you use to translate a document into multiple languages?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Translate" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Translate is a neural machine translation service that can quickly and accurately translate documents and text.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which AWS service uses machine learning to provide personalized product recommendations?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon SageMaker" },
      { "selection": "C", "answer": "Amazon Personalize" },
      { "selection": "D", "answer": "Amazon Forecast" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Personalize is a service specifically for creating and deploying personalization and recommendation engines.",
    "domain": "Personalization",
    "section": "2"
  },
  {
    "question": "Which service is a fully managed data warehouse that can handle petabytes of data?",
    "answers": [
      { "selection": "A", "answer": "Amazon RDS" },
      { "selection": "B", "answer": "Amazon Redshift" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon EMR" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Redshift is a petabyte-scale data warehouse service that can handle large-scale data analytics.",
    "domain": "Databases",
    "section": "2"
  },
  {
    "question": "Which AWS service would you use to get an AI-powered code review to find bugs and improve code quality?",
    "answers": [
      { "selection": "A", "answer": "Amazon CodeGuru" },
      { "selection": "B", "answer": "AWS CloudFormation" },
      { "selection": "C", "answer": "Amazon CodeBuild" },
      { "selection": "D", "answer": "Amazon SageMaker" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon CodeGuru is a developer tool that uses machine learning to provide intelligent recommendations for improving code.",
    "domain": "Developer Tools",
    "section": "2"
  },
  {
    "question": "What is the primary benefit of using Amazon Comprehend Medical?",
    "answers": [
      { "selection": "A", "answer": "Transcribing medical audio" },
      { "selection": "B", "answer": "Translating medical documents" },
      { "selection": "C", "answer": "Extracting medical data from unstructured text" },
      { "selection": "D", "answer": "Forecasting hospital resource usage" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Comprehend Medical is an NLP service specifically trained to understand and extract information from medical notes and reports.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "Which AWS service would you use to predict potential failures in industrial machinery?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "Amazon Rekognition" },
      { "selection": "C", "answer": "Amazon Lookout for Equipment" },
      { "selection": "D", "answer": "AWS IoT Analytics" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Lookout for Equipment uses sensor data from industrial equipment to detect anomalies and predict failures.",
    "domain": "Industrial AI",
    "section": "2"
  },
  {
    "question": "Which AWS service is best suited for building and managing a data lake for healthcare data?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon HealthLake" },
      { "selection": "C", "answer": "Amazon DynamoDB" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon HealthLake is a purpose-built service for building data lakes and analyzing healthcare data, while maintaining HIPAA compliance.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "What is the primary function of Amazon SageMaker?",
    "answers": [
      { "selection": "A", "answer": "To run serverless functions" },
      { "selection": "B", "answer": "To manage container orchestration" },
      { "selection": "C", "answer": "To build, train, and deploy ML models" },
      { "selection": "D", "answer": "To store unstructured data" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which AWS service converts text into realistic speech?",
    "answers": [
      { "selection": "A", "answer": "Amazon Lex" },
      { "selection": "B", "answer": "Amazon Polly" },
      { "selection": "C", "answer": "Amazon Transcribe" },
      { "selection": "D", "answer": "Amazon Translate" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Polly is a text-to-speech service that uses deep learning to synthesize speech.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "Which AWS service helps you create conversational interfaces like chatbots?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon Lex" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Forecast" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Lex is designed for building chatbots and voice interfaces with natural language understanding.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "Which AWS service can analyze videos to detect activities and people?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Textract" },
      { "selection": "C", "answer": "Amazon Rekognition" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Rekognition is a computer vision service that can analyze both images and videos.",
    "domain": "Computer Vision",
    "section": "2"
  },
  {
    "question": "Which AWS service is a managed NLP service that extracts insights from text?",
    "answers": [
      { "selection": "A", "answer": "Amazon Translate" },
      { "selection": "B", "answer": "Amazon Comprehend" },
      { "selection": "C", "answer": "Amazon Transcribe" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Comprehend is the managed service for natural language processing, including sentiment analysis, key phrase extraction, and more.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "What is the main use case of Amazon Transcribe?",
    "answers": [
      { "selection": "A", "answer": "Text-to-speech" },
      { "selection": "B", "answer": "Speech-to-text" },
      { "selection": "C", "answer": "Language translation" },
      { "selection": "D", "answer": "Fraud detection" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Transcribe is a speech-to-text service that uses machine learning to create accurate transcripts from audio.",
    "domain": "Speech Recognition",
    "section": "2"
  },
  {
    "question": "Which service is a neural machine translation service for fast, high-quality language translation?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Translate" },
      { "selection": "C", "answer": "Amazon Polly" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Translate is the dedicated service for high-quality language translation using deep learning.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which AWS service would you use to build a recommendation engine for an e-commerce website?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "Amazon Personalize" },
      { "selection": "C", "answer": "Amazon SageMaker" },
      { "selection": "D", "answer": "Amazon Rekognition" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Personalize is a service that helps you build a custom recommendation engine based on user behavior and preferences.",
    "domain": "Personalization",
    "section": "2"
  },
  {
    "question": "Which service is designed for generating accurate business forecasts?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "Amazon Comprehend" },
      { "selection": "C", "answer": "Amazon Personalize" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon Forecast is a machine learning-based service that can generate highly accurate forecasts for metrics like demand or sales.",
    "domain": "Forecasting",
    "section": "2"
  },
  {
    "question": "Which AWS service is used to extract text and structured data from documents and images?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon Comprehend" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon S3" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Textract is a service that automatically extracts text, handwriting, and data from forms and tables in documents.",
    "domain": "Document Analysis",
    "section": "2"
  },
  {
    "question": "Which AWS service uses machine learning to identify and prevent fraudulent activity?",
    "answers": [
      { "selection": "A", "answer": "AWS WAF" },
      { "selection": "B", "answer": "Amazon Fraud Detector" },
      { "selection": "C", "answer": "AWS Shield" },
      { "selection": "D", "answer": "Amazon Macie" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Fraud Detector is a managed service that uses machine learning to identify potentially fraudulent online activities.",
    "domain": "Fraud Detection",
    "section": "2"
  },
  {
    "question": "What is the main benefit of using Amazon Kendra?",
    "answers": [
      { "selection": "A", "answer": "It provides a data lake for analytics" },
      { "selection": "B", "answer": "It provides intelligent search that understands natural language" },
      { "selection": "C", "answer": "It manages database migrations" },
      { "selection": "D", "answer": "It translates documents" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Kendra is a highly accurate and easy-to-use enterprise search service powered by machine learning.",
    "domain": "Enterprise Search",
    "section": "2"
  },
  {
    "question": "Which service provides AI-powered recommendations for improving code quality?",
    "answers": [
      { "selection": "A", "answer": "Amazon SageMaker" },
      { "selection": "B", "answer": "Amazon CodeGuru" },
      { "selection": "C", "answer": "Amazon CodeCommit" },
      { "selection": "D", "answer": "AWS Cloud9" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon CodeGuru is a developer tool that uses machine learning to provide recommendations on code quality and performance.",
    "domain": "Developer Tools",
    "section": "2"
  },
  {
    "question": "Which AWS service would you use to analyze and store healthcare data securely?",
    "answers": [
      { "selection": "A", "answer": "Amazon S3" },
      { "selection": "B", "answer": "Amazon HealthLake" },
      { "selection": "C", "answer": "Amazon Redshift" },
      { "selection": "D", "answer": "Amazon DynamoDB" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon HealthLake is a HIPAA-eligible service designed for the secure storage and analysis of healthcare data.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "Which service helps you detect anomalies in industrial equipment by analyzing sensor data?",
    "answers": [
      { "selection": "A", "answer": "AWS IoT Analytics" },
      { "selection": "B", "answer": "Amazon Lookout for Equipment" },
      { "selection": "C", "answer": "Amazon Forecast" },
      { "selection": "D", "answer": "Amazon SageMaker" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Lookout for Equipment is a machine learning service that uses data from industrial sensors to detect anomalies and predict failures.",
    "domain": "Industrial AI",
    "section": "2"
  },
  {
    "question": "Which AWS service can automatically extract medical information from unstructured text?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Comprehend Medical" },
      { "selection": "C", "answer": "Amazon Textract" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Comprehend Medical is a specialized NLP service for extracting clinical and medical information from text.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "What is the primary purpose of Amazon SageMaker Ground Truth?",
    "answers": [
      { "selection": "A", "answer": "To run ML inference" },
      { "selection": "B", "answer": "To provide a hosted notebook" },
      { "selection": "C", "answer": "To create labeled datasets for training" },
      { "selection": "D", "answer": "To deploy ML models" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon SageMaker Ground Truth is a data labeling service that helps you build high-quality training datasets for machine learning.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which service provides a platform for building, training, and deploying custom ML models?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon SageMaker" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon SageMaker is the comprehensive service for the full machine learning lifecycle.",
    "domain": "Machine Learning",
    "section": "2"
  },
  {
    "question": "Which AWS service is a text-to-speech service that creates realistic human-like voices?",
    "answers": [
      { "selection": "A", "answer": "Amazon Lex" },
      { "selection": "B", "answer": "Amazon Polly" },
      { "selection": "C", "answer": "Amazon Transcribe" },
      { "selection": "D", "answer": "Amazon Translate" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Polly uses deep learning to synthesize speech from text.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "What is the main purpose of Amazon Lex?",
    "answers": [
      { "selection": "A", "answer": "To build chatbots and conversational interfaces" },
      { "selection": "B", "answer": "To analyze text for sentiment" },
      { "selection": "C", "answer": "To convert text to speech" },
      { "selection": "D", "answer": "To detect objects in images" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon Lex is designed for creating conversational bots using voice and text input.",
    "domain": "Conversational AI",
    "section": "2"
  },
  {
    "question": "Which AWS service would you use to detect faces and their attributes in an image?",
    "answers": [
      { "selection": "A", "answer": "Amazon Textract" },
      { "selection": "B", "answer": "Amazon Rekognition" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Rekognition can detect and analyze faces, including emotions, age, and other attributes.",
    "domain": "Computer Vision",
    "section": "2"
  },
  {
    "question": "Which AWS service provides insights from text by identifying entities and key phrases?",
    "answers": [
      { "selection": "A", "answer": "Amazon Transcribe" },
      { "selection": "B", "answer": "Amazon Translate" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon Polly" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Comprehend is a fully managed NLP service that helps you discover insights from text.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which AWS service converts spoken audio into text?",
    "answers": [
      { "selection": "A", "answer": "Amazon Lex" },
      { "selection": "B", "answer": "Amazon Polly" },
      { "selection": "C", "answer": "Amazon Transcribe" },
      { "selection": "D", "answer": "Amazon Comprehend" }
    ],
    "correctanswer": "C",
    "explantion": "Amazon Transcribe is an automated speech recognition service for converting audio to text.",
    "domain": "Speech Recognition",
    "section": "2"
  },
  {
    "question": "Which AWS service is a neural machine translation service?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Translate" },
      { "selection": "C", "answer": "Amazon Polly" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Translate provides high-quality language translation using neural networks.",
    "domain": "Natural Language Processing (NLP)",
    "section": "2"
  },
  {
    "question": "Which AWS service helps you create a recommendation engine?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "Amazon Personalize" },
      { "selection": "C", "answer": "Amazon SageMaker" },
      { "selection": "D", "answer": "Amazon Rekognition" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Personalize is a service that enables you to build personalized recommendation engines.",
    "domain": "Personalization",
    "section": "2"
  },
  {
    "question": "Which AWS service can be used for forecasting business metrics?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Forecast" },
      { "selection": "C", "answer": "Amazon Personalize" },
      { "selection": "D", "answer": "Amazon Redshift" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Forecast is a managed service for generating accurate time-series forecasts.",
    "domain": "Forecasting",
    "section": "2"
  },
  {
    "question": "Which AWS service extracts text and structured data from documents?",
    "answers": [
      { "selection": "A", "answer": "Amazon Rekognition" },
      { "selection": "B", "answer": "Amazon Textract" },
      { "selection": "C", "answer": "Amazon Comprehend" },
      { "selection": "D", "answer": "Amazon S3" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Textract is an OCR service that can extract text and structured data from various document formats.",
    "domain": "Document Analysis",
    "section": "2"
  },
  {
    "question": "Which service helps detect online fraud using machine learning?",
    "answers": [
      { "selection": "A", "answer": "AWS WAF" },
      { "selection": "B", "answer": "Amazon Fraud Detector" },
      { "selection": "C", "answer": "AWS Shield" },
      { "selection": "D", "answer": "Amazon Macie" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Fraud Detector is a machine learning service for identifying and preventing online fraud.",
    "domain": "Fraud Detection",
    "section": "2"
  },
  {
    "question": "Which AWS service provides intelligent search across your company's data sources?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend" },
      { "selection": "B", "answer": "Amazon Kendra" },
      { "selection": "C", "answer": "Amazon Lex" },
      { "selection": "D", "answer": "Amazon S3" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Kendra is an enterprise search service that uses machine learning to provide accurate search results.",
    "domain": "Enterprise Search",
    "section": "2"
  },
  {
    "question": "What is the main function of Amazon CodeGuru?",
    "answers": [
      { "selection": "A", "answer": "To build and deploy applications" },
      { "selection": "B", "answer": "To provide AI-powered code reviews" },
      { "selection": "C", "answer": "To manage source code repositories" },
      { "selection": "D", "answer": "To create chatbots from code" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon CodeGuru is a developer tool that uses machine learning to provide intelligent recommendations for improving code quality and performance.",
    "domain": "Developer Tools",
    "section": "2"
  },
  {
    "question": "Which AWS service would you use to analyze and extract medical information from clinical text?",
    "answers": [
      { "selection": "A", "answer": "Amazon Comprehend Medical" },
      { "selection": "B", "answer": "Amazon Textract" },
      { "selection": "C", "answer": "Amazon HealthLake" },
      { "selection": "D", "answer": "Amazon Lex" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon Comprehend Medical is a specialized NLP service for healthcare data.",
    "domain": "Healthcare AI",
    "section": "2"
  },
  {
    "question": "Which AWS service can detect anomalies in industrial equipment?",
    "answers": [
      { "selection": "A", "answer": "Amazon Forecast" },
      { "selection": "B", "answer": "Amazon Lookout for Equipment" },
      { "selection": "C", "answer": "Amazon SageMaker" },
      { "selection": "D", "answer": "AWS IoT Analytics" }
    ],
    "correctanswer": "B",
    "explantion": "Amazon Lookout for Equipment is a service that uses machine learning to detect anomalous behavior in industrial equipment.",
    "domain": "Industrial AI",
    "section": "2"
  },
  {
    "question": "Which service helps with creating high-quality datasets for machine learning?",
    "answers": [
      { "selection": "A", "answer": "Amazon SageMaker Ground Truth" },
      { "selection": "B", "answer": "Amazon EMR" },
      { "selection": "C", "answer": "Amazon S3" },
      { "selection": "D", "answer": "Amazon SageMaker Feature Store" }
    ],
    "correctanswer": "A",
    "explantion": "Amazon SageMaker Ground Truth is a managed service for data labeling, which is crucial for training high-quality machine learning models.",
    "domain": "Machine Learning",
    "section": "2"
  }
];
const data={
  saaQuestions1:saaQuestions1,
  saaQuestions2:saaQuestionsSection2,
  cloudPractitioner1:cloudPractitionerQuestions1,
  cloudPractitioner2:cloudPractitionerQuestions2,
  cloudPractitioner3:cloudPractitionerQuestions3,
  cloudPractitioner4:cloudPractitionerQuestions4,
  aiPractitionerQuestions1:aiPractitionerQuestions1,
  aiPractitionerQuestions2:aiPractitionerQuestions2
}
export default  data