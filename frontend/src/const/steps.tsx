// src/data/steps.tsx
import { FcUpload, FcReadingEbook, FcBusinesswoman } from "react-icons/fc";
import type { ReactElement } from "react";

interface Step {
  key: number;
  name: string;
  icon: ReactElement;
  description: string;
}

const steps: Step[] = [
  {
    key: 1,
    name: "Log In",
    icon: <FcBusinesswoman />,
    description:"Create an account or sign in securely to get started with your personal financial dashboard."
  },
  {
    key: 2,
    name: "Upload",
    icon: <FcUpload />,
    description:"Upload your bank statement in CSV or PDF format. Our system automatically reads and processes your data."
  },
  {
    key: 3,
    name: "Analyze & Understand",
    icon: <FcReadingEbook />,
    description:"Explore clear visual summaries of your transactions to understand your spending habits and financial behavior."
  },
];

export default steps;
