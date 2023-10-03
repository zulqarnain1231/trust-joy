"use client";
import React, { useState } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaPlay, FaDownload } from "react-icons/fa";
import { RiMenu3Fill, RiSparklingLine } from "react-icons/ri";
import { PiMonitorFill } from "react-icons/pi";
import FilledBtn from "../Buttons/FilledBtn";
import OutlinedBtn from "../Buttons/OutlinedBtn";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const dropdownMenu = [
    {
      name: "Product Tour",
      detail: " Lorem ipsum dolor sit amet consectetur",
      icon: <FaPlay className="text-2xl text-brand-main" />,
      route: "/",
    },
    {
      name: "Collect & Import",
      detail: " Lorem ipsum dolor sit amet consectetur",
      icon: <FaDownload className="text-2xl text-brand-main" />,
      route: "/",
    },
    {
      name: "AI Review Collecting",
      detail: " Lorem ipsum dolor sit amet consectetur",
      icon: <RiSparklingLine className="text-2xl text-brand-main" />,
      route: "/",
    },
    {
      name: "Manage",
      detail: " Lorem ipsum dolor sit amet consectetur",
      icon: <PiMonitorFill className="text-2xl text-brand-main" />,
      route: "/",
    },
  ];
  return (
    <>
      <ComponentWrapper id="navbar">
        <nav className="w-full h-[70px] flex items-center justify-between">
          <Link href={"/"} className="w-[140px] h-[46px] relative">
            <Image
              src={"/Assets/Logo.png"}
              className="w-full h-full object-fill"
              alt=""
              fill
            />
          </Link>
          <div className="h-full lg:flex hidden items-center justify-center gap-5">
            <div className="h-full flex items-center justify-center gap-2 group relative">
              <Link
                href={"/"}
                className="text-sm text-black-main font-medium group-hover:text-brand-main group-hover:duration-200"
              >
                Features
              </Link>
              <FiChevronDown className="text-lg text-black-main hover:cursor-pointer group-hover:text-brand-main group-hover:duration-200 ease-in group-hover:rotate-180" />

              <div className="flex w-[500px] flex-col items-center justify-start gap-4 p-2 absolute top-12 left-0 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:duration-200 bg-white-main z-10 shadow-lg rounded-lg">
                {dropdownMenu.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={item.route}
                    className="w-full flex items-start justify-start gap-4 hover:bg-white-secondary hover:duration-200 p-4 cursor-pointer rounded-lg group/item"
                  >
                    <span className="h-[55px] w-[55px] flex items-center  justify-center rounded-md bg-white-off">
                      {item.icon}
                    </span>
                    <div className="h-full flex flex-col items-start justify-start gap-1">
                      <p className="text-base text-black-main font-medium group-hover/item:text-brand-main group-hover/item:duration-200">
                        {item.name}
                      </p>
                      <p className="text-base text-black-secondary/70 font-normal">
                        {item.detail}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={"/"}
              className="text-sm text-black-main font-medium hover:text-brand-main hover:duration-200"
            >
              Trustjoy <span className="text-brand-main">AI</span>
            </Link>
            <Link
              href={"/"}
              className="text-sm text-black-main font-medium hover:text-brand-main hover:duration-200"
            >
              Pricing
            </Link>
            <Link
              href={"/"}
              className="text-sm text-black-main font-medium hover:text-brand-main hover:duration-200"
            >
              Blog
            </Link>
            <Link
              href={"/"}
              className="text-sm text-black-main font-medium hover:text-brand-main hover:duration-200"
            >
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
