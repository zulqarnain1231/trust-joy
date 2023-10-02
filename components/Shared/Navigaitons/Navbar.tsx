import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <ComponentWrapper id="navbar">
      <nav className="w-full h-[70px] flex items-center justify-between">
        <Link href={"/"} className="w-[140px] h-[32px] relative">
          <Image
            src={"/Assets/Logo.png"}
            className="w-full h-full object-fill"
            alt=""
            fill
          />
        </Link>
      </nav>
    </ComponentWrapper>
  );
};

export default Navbar;
