import React from "react";

export const FooterLogin = () => {
  return (
    <div className="bg-slate-700 w-full h-full text-slate-50 flex justify-end items-center pr-4 text-xs">
      <p>
        Photo by{" "}
        <a
          className="underline"
          target="_blank"
          href="https://unsplash.com/@abednego?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          abednego s g
        </a>{" "}
        on{" "}
        <a
          className="underline"
          target="_blank"
          href="https://unsplash.com/photos/black-mountain-under-blue-sky-at-daytime-h7FysA92Jww?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
};
