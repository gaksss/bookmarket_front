"use client";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/img/logo.png";
import Image from "next/image";
import BoxIcon from "../scripts/BoxIcon";
import { usePathname } from "next/navigation";

const navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  const isHomePage = pathname === "/";
  return (
    <header
      className={`relative z-50 ${
        isHomePage ? "bg-transparent" : "bg-[#5B8C90]"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center -m-4 p-1.5">
            <span className="sr-only">BookMarket</span>
            <Image
              src={logo}
              alt="Logo de la marque BookMarket"
              height={60}
              width={60}
              className="filter brightness-200"
            />
            <span className="ml-2 text-xl font-bold font-manrope">
              BookMarket
            </span>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/">
            <div className="transition-all duration-200 hover:opacity-70 hover:scale-110">
              <BoxIcon name="cart" size="30px" color="#ffffff" />
            </div>
          </Link>
          <Link href="/">
            <div className="transition-all duration-200 hover:opacity-70 hover:scale-110">
              <BoxIcon name="search" size="30px" color="#ffffff" />
            </div>
          </Link>
          <Link href="/">
            <div className="transition-all duration-200 hover:opacity-70 hover:scale-110">
              <BoxIcon name="user" size="30px" color="#ffffff" />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
