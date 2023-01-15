import Image from "next/image";
import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNavLink from "../components/mobile-link";
import NavLink from "../components/nav-link";
import { NavLinks } from "../constants/nav-links";
import { NavLinkModel } from "../models/nav-link";
import { Context } from "./index";

export default function Navbar() {
  const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);
  const { isDarkMode }: any = useContext(Context);

  return (
    <>
      <div
        className={
          "flex items-center justify-between z-50 sm:px-16 px-2 shadow-nav top-0 w-full lg:pb-1 " +
          (isDarkMode ? "bg-gray-450 text-white" : "bg-white text-gray-450")
        }
      >
        <div className="flex items-center">
          <Image
            width={200}
            height={100}
            src="/images/logo.png"
            alt="logo"
            className="p-1 h-14 w-14"
          />
          <h3 className="sm:text-3xl text-xl font-bold">Vision Group</h3>
        </div>
        <div className="items-center gap-4 font-normal text-18 hidden lg:flex">
          {NavLinks.map((link: NavLinkModel, index: number) => (
            <NavLink
              isDarkMode={isDarkMode}
              key={index}
              route={link.route}
              linkName={link.name}
            />
          ))}
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuBtnClicked(!isMenuBtnClicked)}
        >
          <AiOutlineMenu className="w-8 h-6" />
        </button>
      </div>
      <div
        className={
          "items-start px-4 gap-4 font-normal text-18 fixed top-[50px] z-50 w-full h-full flex flex-col lg:hidden " +
          (isMenuBtnClicked ? " " : "hidden ") +
          (isDarkMode ? "bg-gray-450 text-white" : "bg-white text-gray-450")
        }
      >
        {NavLinks.map((link: NavLinkModel, index: number) => (
          <MobileNavLink key={index} route={link.route} linkName={link.name} />
        ))}
      </div>
    </>
  );
}
