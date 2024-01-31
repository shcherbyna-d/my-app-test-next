import Layout from "@/components/Layout/Layout";
import React, { ReactElement } from "react";

export default function Home() {
  return (
    <article>
      <h2>Article Title</h2>
      <p>This is the main content of the page.</p>
    </article>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page} </Layout>;
};
