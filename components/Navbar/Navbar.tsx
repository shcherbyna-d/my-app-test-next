import React, { useEffect, useState } from "react";
import navbar from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  const currentPath = router.pathname;

  return (
    <nav className={`${navbar.navbar}`}>
      <ul>
        <Link
          href={"/"}
          className={currentPath === "/" ? `${navbar.selected}` : ""}
        >
          Home
        </Link>
        <Link
          href={"/restaurants"}
          className={currentPath === "/restaurants" ? `${navbar.selected}` : ""}
        >
          Strapi Restaurants
        </Link>
        <Link
          href={"/about"}
          className={currentPath === "/about" ? `${navbar.selected}` : ""}
        >
          About
        </Link>
        <Link
          href={"/login"}
        >
          Logout
        </Link>
      </ul>
    </nav>
  );
};
