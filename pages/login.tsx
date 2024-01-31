import Layout from "@/components/Layout/Layout";
import router from "next/router";
import React, { ReactElement } from "react";

export default function About() {
  return (
    <main>
      <h2>Login page</h2>
      <form onSubmit={() => router.push("/")}>
        <div>
          <label htmlFor="email">Login</label>
          <input type="email" name="" id="email" />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input type="password" name="" id="pass" />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
