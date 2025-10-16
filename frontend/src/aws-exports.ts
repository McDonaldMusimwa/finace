/*export const awsExports = {
    "aws_project_region" : "us-west-2",
    "aws_user_pools_id": "us-west-2_TxqfNjZcS",
    "aws_user_pools_web_client_id": "765guo9h90ijdnoekbsupnck0s"
}
*/
// aws-exports.ts
import type { ResourcesConfig } from "aws-amplify";

const awsExports: ResourcesConfig = {
    
  Auth: {
    Cognito: {
     /*aws_project_region: "us-west-2",*/
      userPoolClientId:"1oodu8054l3ft60lf1r3cvbbc3",// "765guo9h90ijdnoekbsupnck0s",
      userPoolId:"us-west-2_VkxpvO3t3",// "us-west-2_TxqfNjZcS",
      signUpVerificationMethod: "code", // or "link" depending on your Cognito setup
    },
  },
};

export default awsExports;
