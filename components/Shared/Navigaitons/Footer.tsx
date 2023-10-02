import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { AiFillHeart } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "@/constants/Svg/Icons";

const Footer = () => {
  const year = new Date().getFullYear();
  const navigateMenu = [
    { name: "Product", route: "/", icon: false },
    { name: "Pricing", route: "/", icon: false },
    { name: "Case studies", route: "/", icon: false },
    { name: "Blog", route: "/", icon: false },
    { name: "About us", route: "/", icon: false },
    { name: "Our wall of love", route: "/", icon: true },
  ];
  const productMenu = [
    { name: "Collect", route: "/", icon: false },
    { name: "Manage reviews", route: "/", icon: false },
    { name: "Share & display", route: "/", icon: false },
    { name: "Trustjoy AI", route: "/", icon: false },
    { name: "Widgets", route: "/", icon: false },
    { name: "Affiliate", route: "/", icon: false },
    {
      name: "Roadmap",
      route: "/",
      icon: true,
    },
  ];
  const helpMenu = [
    { name: "Help Center", route: "/", icon: true },
    { name: "User agreement", route: "/", icon: false },
    { name: "Privacy Policy", route: "/", icon: false },
    { name: "Cookie policy", route: "/", icon: false },
    { name: "Uptime Status", route: "/", icon: true },
  ];

  const testimonialsMenu = [
    { name: "Building trust", route: "/", icon: false },
    { name: "Increase traffic", route: "/", icon: false },
    { name: "Increase conversion", route: "/", icon: false },
    { name: "Differentiation", route: "/", icon: false },
  ];

  return (
    <ComponentWrapper id="footer" style="lg:pt-20 lg:pb-12 py-12 bg-[#E6E7FF]">
      <footer className="w-full h-full flex flex-col items-center justify-start lg:gap-20 gap-10">
        <div className="w-full grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* first column */}
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <Link
              href={"/"}
              className="sm:w-[230px] w-[200px] sm:h-[68px] h-[56px] relative"
            >
              <Image
                src={"/Assets/Logo.png"}
                className="w-full h-full object-fill"
                alt=""
                fill
              />
            </Link>
            <p className="text-black-secondary text-center text-sm font-normal">
              Trustjoy is a reputation and review management platform
            </p>
            <div className="w-full flex items-center md:justify-center justify-start gap-4">
              <BsTwitter className="h-[30px] w-[28px] text-black-main cursor-pointer hover:scale-105 hover:duration-300" />
              <BsLinkedin className="h-[30px] w-[28px] text-black-main cursor-pointer hover:scale-105 hover:duration-300" />
              <Icons.Dev
                stroke=""
                ClassName="h-[30px] w-[28px] text-black-main cursor-pointer hover:scale-105 hover:duration-300"
                fill=""
              />
            </div>
          </div>
          {/* second column */}
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-xl text-black-main font-normal">Navigate</p>
            {navigateMenu.map((item: any, index: number) => (
              <Link
                href={item.route}
                key={index}
                className="flex items-center justify-start gap-2 text-black-main text-sm font-normal"
              >
                {item.name}
                {item.icon && (
                  <BiLinkExternal className="text-black-main text-lg" />
                )}
              </Link>
            ))}
          </div>
          {/* third column */}
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-xl text-black-main font-normal">Product</p>
            {productMenu.map((item: any, index: number) => (
              <div key={index}>
                <Link
                  href={item.route}
                  className="flex items-center justify-start gap-2 text-black-main text-sm font-normal"
                >
                  {item.name}

                  {item.name == "Affiliate" && (
                    <span className="w-[78px] h-[20px] flex items-center justify-center text-xs text-black-main font-normal bg-brand-main rounded">
                      EARN 30%
                    </span>
                  )}
                  {item.icon && (
                    <BiLinkExternal className="text-black-main text-lg" />
                  )}
                </Link>

                {index == 5 && (
                  <span className="sm:w-[128px] w-full bg-black-main h-[2px]"></span>
                )}
              </div>
            ))}
          </div>
          {/* fourth coulmn */}
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-xl text-black-main font-normal">Help</p>
            {helpMenu.map((item: any, index: number) => (
              <Link
                href={item.route}
                key={index}
                className="flex items-center justify-start gap-2 text-black-main text-sm font-normal"
              >
                {item.name}
                {item.icon && (
                  <BiLinkExternal className="text-black-main text-lg" />
                )}
              </Link>
            ))}
          </div>

          {/* fifth coulmn */}
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-xl text-black-main font-normal">
              Testimonials for
            </p>
            {testimonialsMenu.map((item: any, index: number) => (
              <Link
                href={item.route}
                key={index}
                className="flex items-center justify-start gap-2 text-black-main text-sm font-normal"
              >
                {item.name}
                {item.icon && (
                  <BiLinkExternal className="text-black-main text-lg" />
                )}
              </Link>
            ))}

            <span className="sm:w-[128px] w-full h-[2px] bg-black-main"></span>
            <p className="text-xl text-black-main font-normal">Blog</p>
            <p className="text-black-secondary text-left text-sm font-normal">
              How to Add Google Reviews to Website (for Dummies)
            </p>
          </div>
        </div>
        <div className="w-full flex sm:flex-row flex-col sm:items-center items-start gap-3 justify-between sm:py-4 py-1 border-t-2 border-t-black-main">
          <div className="flex items-center justify-start gap-0">
            <p className="text-black-main text-sm font-normal">Made with ️</p>
            <AiFillHeart className="text-xl text-brand-main" />
            <p className="text-black-main text-sm font-normal">remotely</p>
          </div>
          <p className="text-black-main text-sm font-normal">
            Copyright {year} Trustjoy – All rights reserved.
          </p>
        </div>
      </footer>
    </ComponentWrapper>
  );
};

export default Footer;
