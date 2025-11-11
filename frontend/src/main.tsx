import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import { Buffer } from "buffer";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_KEY;
window.global = window;
window.Buffer = Buffer;

// The rest of your app's code...
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
