import Layout from "@/components/Layout/Layout";
import React, { ReactElement, useEffect, useState } from "react";

export default function Home() {
  const [, setRender] = useState(0);
  // const [isClient, setIsClient] = useState(false);

  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const currentTime = `${hours}:${minutes}:${seconds}`;

    return currentTime;
  }

  useEffect(() => {
    // setIsClient(true);

    const id = setInterval(() => setRender(Date.now()), 1000);

    return () => {
      console.log("clearInterval");

      clearInterval(id);
    };
  }, []);

  return (
    <section>
      <h1>Home page</h1>
      <p>This is the main content of the page.</p>
      <h3>Current time</h3>
      {/* <div>{isClient ? updateTime() : ""}</div> */}
      <div suppressHydrationWarning>{updateTime()}</div>
      <h1>Home page</h1>
      <p>This is the main content of the page.</p>
      <h3>Current time</h3>
      {/* <div>{isClient ? updateTime() : ""}</div> */}
      <div suppressHydrationWarning>{updateTime()}</div>
      <h1>Home page</h1>
      <p>This is the main content of the page.</p>
      <h3>Current time</h3>
      {/* <div>{isClient ? updateTime() : ""}</div> */}
      <div suppressHydrationWarning>{updateTime()}</div>
      <h1>Home page</h1>
      <p>This is the main content of the page.</p>
      <h3>Current time</h3>
      {/* <div>{isClient ? updateTime() : ""}</div> */}
      <div suppressHydrationWarning>{updateTime()}</div>
      <h1>Home page</h1>
      <p>This is the main content of the page.</p>
      <h3>Current time</h3>
      {/* <div>{isClient ? updateTime() : ""}</div> */}
      <div suppressHydrationWarning>{updateTime()}</div>
      <h1>Home page</h1>
      <p>This is the main content of the page.</p>
      <h3>Current time</h3>
      {/* <div>{isClient ? updateTime() : ""}</div> */}
      <div suppressHydrationWarning>{updateTime()}</div>
      <h1>Home page</h1>
      <p>This is the main content of the page.</p>
      <h3>Current time</h3>
      {/* <div>{isClient ? updateTime() : ""}</div> */}
      <div suppressHydrationWarning>{updateTime()}</div>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
