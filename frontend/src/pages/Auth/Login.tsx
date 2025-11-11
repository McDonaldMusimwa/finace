import styles from "./Auth.module.css";

import { SignIn } from "@clerk/clerk-react";

function Login() {

  return (
    <div className={styles.authcontainer}>
<div className={styles.clerk}>
  
  <SignIn redirectUrl="/dashboard" />
  </div>
   
    </div>
  );
}

export default Login;
