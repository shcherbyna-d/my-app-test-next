import LayoutLogin from "@/components/Layout/LayoutLogin";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import React, { ReactElement } from "react";
import login from "@/components/LoginForm/LoginForm.module.scss";

export default function Login() {
  return (
    <div className={`${login.loginPage}`}>
      <h2>Login page</h2>
      <div className={`${login.loginWrapper}`}>
        <LoginForm />
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLogin>{page}</LayoutLogin>;
};
