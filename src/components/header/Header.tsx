"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLink } from "./data";

type navToggleType = boolean;

export default function Header() {
  const [handleNavToggle, setHandleNavToggle] = useState<navToggleType>(false);

  return (
    <header className="flex sm:h-25 h-20 items-center z-3 fixed left-6/12 -translate-x-6/12 md:px-10 px-5 md:w-11/12 w-full bg-black justify-between">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/images/logo.png"
          className="m-auto sm:w-15 w-10 h-auto"
          width={400}
          height={400}
          alt="logo"
        />
        <p className="font-extrabold text-xl  text-orange-primary">
          indoor<span className="text-white">Studio</span>
        </p>
      </Link>
      <nav
        className={` ${
          handleNavToggle ? "right-0" : "-right-5/11"
        } max-md:bg-black/60 z-100 max-md:backdrop-blur-xl max-md:fixed max-md:h-[calc(100vh-80px)] max-md:w-5/11 top-20 transition-all`}
      >
        <ul className="flex gap-x-1 max-md:flex-col max-md:items-center  text-black">
          {navLink.map(({ href, name }, index) => {
            return (
              <li
                key={index}
                className="md:hover:scale-70 transition-transform"
              >
                <Link
                  href={href}
                  className="md:bg-orange-primary md:hover:bg-white py-4 max-md:font-extrabold max-md:text-white max-md:text-[1.1rem] md:hover:text-orange-primary block transition-colors text-[.75rem] rounded-full px-3 md:py-1"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        onClick={() => setHandleNavToggle(!handleNavToggle)}
        className="grid gap-1 rounded-md bg-white/10 md:hidden cursor-pointer py-[0.6rem] px-[0.5rem]"
      >
        <p
          className={`w-8 h-[3px] ${
            handleNavToggle && "translate-y-[7px] rotate-[45deg]"
          } bg-white transition-transform`}
        ></p>
        <p
          className={`${
            handleNavToggle ? "opacity-0" : "opacity-100"
          } w-8 h-[3px] bg-white transition-opacity`}
        ></p>
        <p
          className={`${
            handleNavToggle && "-translate-y-[7px] -rotate-[45deg]"
          } w-8 h-[3px] bg-white transition-transform`}
        ></p>
      </div>
    </header>
  );
}
