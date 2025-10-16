import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import { Buffer } from "buffer";
import { AuthProvider } from "react-oidc-context";

const domain = "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_VkxpvO3t3"
//const domain = ""https://cognito-idp.us-east-1.amazonaws.com/us-east-1_tNpZ7Kn4W""
//const redirectUri = "http://localhost:5173/Questionares"
//const clientId = "5vnnnbupq21711l42jtds0b2fr"
const redirectUri ="https://staging.d385k1fvsqio60.amplifyapp.com/Questionares";
const clientId ="1oodu8054l3ft60lf1r3cvbbc3"
const cognitoAuthConfig = {
  authority:domain ,
  client_id: clientId,
  redirect_uri:redirectUri, //"https://staging.d385k1fvsqio60.amplifyapp.com/Questionares",
  response_type: "code",
  scope: "email openid phone",
};

window.global = window;
window.Buffer = Buffer;

// The rest of your app's code...

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
