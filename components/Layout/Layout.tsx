import React, { ReactNode, FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Head from "next/head";
import { Inter } from "next/font/google";
import layout from "./Layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.className} ${layout.page}`}>
        <div className={`${layout.navbar}`}>
          <Navbar />
        </div>
        <main className={`${layout.main}`}>{children}</main>
        <div className={`${layout.footer}`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
