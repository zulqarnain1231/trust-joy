"use client";
import React, { useState } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { BsChevronDown, BsArrowRight } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import FilledBtn from "../Buttons/FilledBtn";
import OutlinedBtn from "../Buttons/OutlinedBtn";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <ComponentWrapper id="navbar">
        <nav className="w-full h-[70px] flex items-center justify-between">
          <Link href={"/"} className="w-[140px] h-[40px] relative">
            <Image
              src={"/Assets/Logo.png"}
              className="w-full h-full object-fill"
              alt=""
              fill
            />
          </Link>
          <div className="h-full lg:flex hidden items-center justify-center gap-5">
            <div className="h-full flex items-center justify-center gap-2 group">
              <Link href={"/"} className="text-sm text-black-main font-normal">
                Features
              </Link>
              <BsChevronDown className="text-lg text-black-main hover:cursor-pointer" />
            </div>
            <Link href={"/"} className="text-sm text-black-main font-normal">
              Trustjoy <span className="text-brand-main">AI</span>
            </Link>
            <Link href={"/"} className="text-sm text-black-main font-normal">
              Pricing
            </Link>
            <Link href={"/"} className="text-sm text-black-main font-normal">
              Blog
            </Link>
            <Link href={"/"} className="text-sm text-black-main font-normal">
              Affiliates
            </Link>
          </div>
          <div className="h-full lg:flex hidden items-center justify-center gap-6">
            <OutlinedBtn text=" Login" />
            <FilledBtn text="Book a demo " />
          </div>
          <RiMenu3Fill
            onClick={toggleDrawer}
            className="lg:hidden inline-block text-2xl text-black-main cursor-pointer"
          />
        </nav>
      </ComponentWrapper>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        style={{ width: "100%" }}
      >
        <button onClick={toggleDrawer}>close</button>
      </Drawer>
    </>
  );
};

export default Navbar;
