import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const currentPath = router.pathname;

  const toogleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="w-full bg-slate-700 h-full text-slate-50 flex items-center relative">
      <ul className="w-full hidden md:flex md:justify-around md:items-center">
        <Link
          href={"/"}
          className={currentPath === "/" ? `text-slate-400` : ""}
        >
          Home
        </Link>
        {/* <Link
          href={"/restaurants"}
          className={currentPath === "/restaurants" ? `${navbar.selected}` : ""}
        >
          Strapi Restaurants
        </Link> */}
        <Link
          href={"/about"}
          className={currentPath === "/about" ? `text-slate-400` : ""}
        >
          About
        </Link>
        <Link
          href={"/components"}
          className={currentPath === "/components" ? `text-slate-400` : ""}
        >
          Components
        </Link>
        <Link href={"/login"}>Logout</Link>
      </ul>
      <button
        type="button"
        className="flex text-4xl text-slate-50 w-10 h-10 p-3 z-50 justify-center items-center hover:text-slate-400 transition-colors ml-auto md:hidden"
        onClick={toogleMobileMenu}
      >
        =
      </button>
      <ul
        className={`${
          showMobileMenu
            ? "transform translate-y-0 "
            : "transform -translate-y-full"
        } w-full fixed h-screen top-0 left-0 bg-slate-700 flex flex-col gap-4 p-5 pt-16 z-40 transition-transform duration-300 md:hidden`}
      >
        <Link
          href={"/"}
          className={currentPath === "/" ? `text-slate-400` : ""}
          onClick={toogleMobileMenu}
        >
          Home
        </Link>
        {/* <Link
          href={"/restaurants"}
          className={currentPath === "/restaurants" ? `${navbar.selected}` : ""}
        >
          Strapi Restaurants
        </Link> */}
        <Link
          href={"/about"}
          className={currentPath === "/about" ? `text-slate-400` : ""}
          onClick={toogleMobileMenu}
        >
          About
        </Link>
        <Link
          href={"/components"}
          className={currentPath === "/components" ? `text-slate-400` : ""}
          onClick={toogleMobileMenu}
        >
          Components
        </Link>
        <Link href={"/login"} onClick={toogleMobileMenu}>
          Logout
        </Link>
      </ul>
    </nav>
  );
};
