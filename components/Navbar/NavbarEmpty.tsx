import React from "react";
import navbar from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavbarEmty = () => {
  const router = useRouter();

  const currentPath = router.pathname;

  return (
    <nav className={`${navbar.navbar}`}>
      <ul>
      </ul>
    </nav>
  );
};
