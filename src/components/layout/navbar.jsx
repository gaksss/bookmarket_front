import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/img/logo.png";
import Image from "next/image";
import BoxIcon from "../scripts/BoxIcon";

const navbar = () => {
  return (
    <header className="bg-transparent relative z-50 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center -m-1.5 p-1.5">
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
            <BoxIcon name="cart" size="30px" color="#ffffff" />
          </Link>
          <Link href="/">
            <BoxIcon name="search" size="30px" color="#ffffff" />
          </Link>
          <Link href="/">
            <BoxIcon name="user" size="30px" color="#ffffff" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
