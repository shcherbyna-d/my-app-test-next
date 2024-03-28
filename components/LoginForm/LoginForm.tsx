import React from "react";
import login from "./LoginForm.module.scss";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const router = useRouter();

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={() => router.push("/")}
    >
      <div className="flex w-full items-center gap-4">
        <label
          htmlFor="email"
          className="flex min-w-16 text-base text-slate-900"
        >
          Login
        </label>
        <input
          className="transition-border flex h-9 flex-1 rounded-md border-2 border-solid border-transparent bg-slate-100 p-4 outline-none duration-300 hover:border-slate-400 focus:border-slate-400"
          type="email"
          name=""
          id="email"
        />
      </div>
      <div className="flex w-full items-center gap-4">
        <label
          htmlFor="pass"
          className="flex min-w-16 text-base text-slate-900"
        >
          Password
        </label>
        <input
          className="transition-border flex h-9 flex-1 rounded-md border-2 border-solid border-transparent bg-slate-100 p-4 outline-none duration-300 hover:border-slate-400 focus:border-slate-400"
          type="password"
          name=""
          id="pass"
        />
      </div>
      <button
        type="submit"
        className=" mt-5 bg-slate-800 h-9 text-slate-100 rounded-md hover:bg-slate-600 transition-[background-color] duration-300"
      >
        Login
      </button>
    </form>
  );
};
