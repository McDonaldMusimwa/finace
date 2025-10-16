/*import {
  Authenticator as AuthenticatorX,
  ThemeProvider as AmplifyThemeProvider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import type { PropsWithChildren } from "react";
import App from "../../App";

export const Authenticator: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = {
    name: "my-theme",
    tokens: {
      colors: {
        primary: {
          value: "#FF0000",
        },
      },
    },
  };
  return (
    <AmplifyThemeProvider theme={theme}>
    
      <AuthenticatorX
        variation="modal"
   
        formFields={{
          signIn: {
            username: {
              labelHidden: true,
              placeholder:"Enter valid Email"
            },
            password: {
              labelHidden: true,
              placeholder:"Enter valid Password"
            },
          },
          signUp: {
            email: {
              labelHidden: true,
              placeholder:"Enter valid Email"
            },
    
          },
        }}
      >
   
      </AuthenticatorX>
    </AmplifyThemeProvider>
  );
};
*/