import Layout from "@/components/Layout/Layout";
import React, { ReactElement } from "react";

export default function About() {
  return (
    <article>
      <h2>About Title</h2>
      <p>This is the about content of the page.</p>
    </article>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
