"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "projects",
    path: "/projects",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="max-w-screen-sm mx-auto flex justify-between items-center ">
      <div className="flex justify-start p-4 lg:px-0 ">
        <Link href="/">
        <Image
          src="/assets/images/profile/profile.png"
          alt="profile-picture"
          width={50}
          height={50}
          className="object-cover"
        />
        </Link>
      </div>
      <div className="flex gap-2 items-center capitalize  ">
        {navItems?.map((navItem) => {
          return (
            <Link
              key={navItem?.path}
              href={navItem?.path}
              className={`${
                pathname === navItem?.path
                  ? "bg-white/10 text-white "
                  : "bg-transparent text-white/80 "
              } text-md lg:text-lg py-1 px-4 rounded-lg bg-transparent hover:bg-white/10 transition-all duration-300 ease`}
            >
              {navItem?.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
