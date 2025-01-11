"use client";

import { useState } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link"

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/" },
    { name: "Contact", link: "/contact" },
  ];

  const handleMenuClick = () => {
    setMobileMenu(!mobileMenu);
    document.body.style.overflow = mobileMenu ? "unset" : "hidden";
  };

  return (
    <>
      <header className="bg-black p-5">
        <nav className="mx-auto max-w-screen-xl text-white flex items-center justify-between">
          <Link href="/">
            <Image className="" src="/images/bmo-logo.png" width={100} height={10} alt="bmo-logo" />
          </Link>
          <div className=" gap-3 hidden md:flex flex-1 justify-center">
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className=" text-white hover:text-bmo-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className=" gap-2 hidden md:flex">
            <Link href="https://www.facebook.com/BMOElitePerformance">
              <FaFacebookSquare className="text-white hover:text-bmo-primary" size={20} />
            </Link>
            <Link href="https://www.tiktok.com/@bmo.elite.perform">
              <AiFillTikTok className="hover:text-bmo-primary" size={21} />
            </Link>
            <Link href="https://www.instagram.com/BMOElite21">
              <FaInstagram className=" text-white hover:text-bmo-primary" size={21} />
            </Link>
            <Link href="https://www.youtube.com/@BMOElite2321">
              <FaYoutube className="text-white hover:text-bmo-primary" size={21} />
            </Link>
          </div>

          <button
            onClick={handleMenuClick}
            className=" p-2 hover:bg-orange-500 rounded-lg transition-colors right-4 top-4 z-50 md:hidden"
            aria-expanded={mobileMenu}
            aria-label=" Toggle Menu"
          >
            {!mobileMenu ? (
              <HiMiniBars3 size={24} />
            ) : (
              <HiMiniXMark className=" text-white" size={30} />
            )}
          </button>
          {mobileMenu && (
            <div className=" fixed inset-0 bg-black z-40 flex flex-col items-center justify-center">
              <nav className=" flex flex-col items-center space-y-8 text-xl">
                <Image className="" src="/images/bmo-logo.png" width={150} height={10} alt="bmo-logo" />
                {menuLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    className=" text-white hover:text-orange-500 transition-colors"
                    onClick={handleMenuClick}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
