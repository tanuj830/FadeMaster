"use client";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RiMenu4Line } from "react-icons/ri";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";
import { ThemeButton } from "../ThemeButton";
import { Button } from "../ui/button";

const Navbar = () => {
  const path = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const [showTopBanner, setShowTopBanner] = React.useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleTopBanner = () => {
    setShowTopBanner(!showTopBanner);
  };

  return (
    <>
      <div className=" inline md:hidden  z-40 relative ">
        {/* for mobile */}
        <div className="pt-4 pb-3  w-full  ">
          {/* border-b border-gray-700 */}
          <div className="  flex justify-between items-center gap-4 px-4 md:gap-44 ">
            <div className="flex items-center  ">
              <Link
                className="cursor-pointer text-[1.3rem] font-semibold"
                href="/"
              >
                Fade Master
              </Link>
            </div>
            <div className="ml-2 transition-all  duration-1000 flex gap-2">
              <ThemeButton />
              {!showMenu ? (
                <button
                  className="text-3xl  font-extrabold mr-3 brightness-200"
                  onClick={handleClick}
                >
                  <RiMenu4Line />
                </button>
              ) : null}
            </div>
          </div>
          <div className="mb-2 transition-all duration-1000 flex  items-center justify-between">
            {/* <div> */}
            {showMenu === true ? (
              <div className="relative  w-full   py-1">
                <div className="fixed top-0 bottom-0 left-0 right-0  bg-background  rounded-b-3xl   h-screen w-full text-2xl  p-5">
                  <div className="flex justify-between items-center">
                    <Link
                      className="cursor-pointer text-[1.3rem] font-semibold"
                      href="/"
                    >
                      Fade Master
                    </Link>
                    <button
                      className="text-3xl  font-extrabold mr-3 brightness-200"
                      onClick={handleClick}
                    >
                      <RxCross2 />
                    </button>
                  </div>
                  <div className="flex  items-start  w-full h-full gap-4 flex-col mt-10">
                    <div className="text-center flex items-center justify-center gap-2">
                      <Link
                        className={`brightness-200  font-semibold flex items-center ${
                          path == "/" ? "text-primary " : "text-muted"
                        }`}
                        href="/"
                      >
                        <span className="p-2 font-bold rounded-full text-xs">
                          01
                        </span>
                        Home
                      </Link>
                    </div>
                    <div className="text-center flex items-center justify-center gap-2">
                      <Link
                        className={`brightness-200  font-semibold flex items-center ${
                          path == "/how-it-works"
                            ? "text-primary "
                            : "text-primary/50"
                        }`}
                        href="/how-it-works"
                      >
                        <span className="p-2 font-bold rounded-full text-xs">
                          02
                        </span>
                        How it Works
                      </Link>
                    </div>
                    <div className="text-center flex items-center justify-center gap-2">
                      <Link
                        className={`brightness-200  font-semibold flex items-center ${
                          path == "/dashboard/audio-cutter"
                            ? "text-primary "
                            : "text-primary/50"
                        }`}
                        href="/dashboard/audio-cutter"
                      >
                        <span className="p-2 font-bold rounded-full text-xs">
                          03
                        </span>
                        Audio Cutter
                      </Link>
                    </div>
                    {/* icons */}
                    <div className=" absolute bottom-6 left-0 right-0">
                      <div className="flex items-center justify-center gap-6 md:gap-8 ">
                        <Link
                          className="hover:scale-110 hover:text-white transition-all duration-300 text-3xl"
                          href="https://github.com/tanuj830"
                        >
                          <AiFillGithub />
                        </Link>
                        <Link
                          className="hover:scale-110 hover:text-white transition-all duration-300 text-3xl"
                          href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/"
                        >
                          <AiFillLinkedin />
                        </Link>
                        <Link
                          className="hover:scale-110 hover:text-white transition-all duration-300 text-3xl"
                          href="https://leetcode.com/tanujdotcpp/"
                        >
                          <SiLeetcode />
                        </Link>
                        <Link
                          className="hover:scale-110 hover:text-white transition-all duration-300 text-3xl"
                          href="https://www.instagram.com/aka_tanuj/"
                        >
                          <AiFillInstagram />
                        </Link>
                      </div>
                      <p className="mt-4 text-xs text-muted-foreground text-center w-full">
                        Made with 💓 by tanujbhatt.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* for pc */}
      <div className="hidden px-4 lg:px-20 md:inline-block z-50 relative  backdrop-blur-md overflow-hidden	w-full xl:h-20 h-16   ">
        <div className=" flex justify-between items-center  w-full h-full">
          <div className=" flex items-center  h-full">
            <Link
              className="cursor-pointer text-[1.8rem] font-semibold"
              href="/"
            >
              Fade Master
              <span className=" font-extrabold text-3xl">.</span>
            </Link>
          </div>

          <div className=" flex  items-center gap-x-4 h-full ">
            <Link
              className={`brightness-200  font-semibold flex items-center ${
                path == "/"
                  ? "text-primary underline underline-offset-4"
                  : "text-primary/50"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`brightness-200  font-semibold flex items-center ${
                path == "/how-it-works"
                  ? "text-primary underline underline-offset-4"
                  : "text-primary/50"
              }`}
              href="/how-it-works"
            >
              How it Works
            </Link>
            <Link
              className={`brightness-200  font-semibold flex items-center ${
                path == "/dashboard/audio-cutter"
                  ? "text-primary underline underline-offset-4"
                  : "text-primary/50"
              }`}
              href="/dashboard/audio-cutter"
            >
              Audio Cutter
            </Link>
            <ThemeButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
