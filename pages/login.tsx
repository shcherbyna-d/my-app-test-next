import LayoutLogin from "@/components/Layout/LayoutLogin";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import React, { ReactElement } from "react";

export default function Login() {
  return (
    <div className="bg-slate-200 bg-opacity-50 backdrop-blur-lg rounded-lg p-5">
      <LoginForm />
    </div>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLogin>{page}</LayoutLogin>;
};
