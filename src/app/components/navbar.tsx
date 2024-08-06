"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar border-b drop-shadow-md sticky top-0 z-[9999] ${
        isSticky ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="hover:bg-slate-200 hover:rounded-lg">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:bg-slate-200 hover:rounded-lg">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className="hover:bg-slate-200 hover:rounded-lg">
              <Link href={"/product"}>Product</Link>
            </li>
            <li className="hover:bg-slate-200 hover:rounded-lg">
              <Link href={"/teams"}>Our Teams</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Props
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:rounded-lg hover:bg-slate-200">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:rounded-lg hover:bg-slate-200">
            <Link href={"/about"}>About Us</Link>
          </li>
          <li className="hover:rounded-lg hover:bg-slate-200">
            <Link href={"/product"}>Product</Link>
          </li>
          <li className="hover:rounded-lg hover:bg-slate-200">
            <Link href={"/teams"}>Our Teams</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
};


