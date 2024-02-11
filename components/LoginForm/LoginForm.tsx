import React from "react";
import login from "./LoginForm.module.scss";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const router = useRouter();

  return (
    <form className={`${login.loginForm}`} onSubmit={() => router.push("/")}>
      <div className={`${login.formRow}`}>
        <label htmlFor="email">Login</label>
        <input type="email" name="" id="email" />
      </div>
      <div className={`${login.formRow}`}>
        <label htmlFor="pass">Password</label>
        <input type="password" name="" id="pass" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
