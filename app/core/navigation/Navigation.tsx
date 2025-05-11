"use client";

import { useState, useRef, useEffect } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import CustomBanner from "@/app/components/custom-banner/CustomBanner";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [formsDropdownOpen, setFormsDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const formsDropdownRef = useRef<HTMLDivElement>(null);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
      subLinks: [
        { name: "One-on-One", link: "/services/oneonone" },
        { name: "Facility Rentals", link: "/services/facility-rentals" },
        { name: "Camps and Events", link: "/services/camps-and-events" },
      ],
    },
    { name: "Contact", link: "/contact" },
    {
      name: "Forms",
      subLinks: [
        { name: "Waiver Form", link: "/waiver" },
        { name: "Feedback Form", link: "/feedback" },
      ],
    },
  ];

  const handleMenuClick = () => {
    setMobileMenu(!mobileMenu);
    document.body.style.overflow = mobileMenu ? "unset" : "hidden";
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    document.body.style.overflow = "unset"; // Reset overflow when closing
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    if (formsDropdownOpen) setFormsDropdownOpen(false); // Close forms dropdown if open
  };

  const toggleFormsDropdown = () => {
    setFormsDropdownOpen(!formsDropdownOpen);
    if (servicesDropdownOpen) setServicesDropdownOpen(false); // Close services dropdown if open
  };

  const closeDropdowns = () => {
    setServicesDropdownOpen(false);
    setFormsDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node) &&
        formsDropdownRef.current &&
        !formsDropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <CustomBanner />
      <header className="bg-black p-5">
        <nav className="mx-auto max-w-screen-xl text-white flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/bmo-logo.png"
              width={100}
              height={10}
              alt="bmo-logo"
            />
          </Link>
          <div className="gap-3 hidden md:flex flex-1 justify-center">
            {menuLinks.map((link) =>
              link.subLinks ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={
                      link.name === "Services"
                        ? toggleServicesDropdown
                        : toggleFormsDropdown
                    }
                    className="text-white hover:text-bmo-primary transition-colors"
                  >
                    {link.name}
                  </button>
                  {(link.name === "Services"
                    ? servicesDropdownOpen
                    : formsDropdownOpen) && (
                    <div
                      ref={
                        link.name === "Services"
                          ? servicesDropdownRef
                          : formsDropdownRef
                      }
                      className="absolute left-0 mt-2 w-56 bg-black text-white rounded shadow-lg z-50"
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.link}
                          onClick={() => {
                            closeMobileMenu();
                            closeDropdowns();
                          }}
                        >
                          <div className="block px-4 py-2 hover:bg-gray-700">
                            {subLink.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.link}
                  className="text-white hover:text-bmo-primary transition-colors"
                  onClick={closeMobileMenu} // Close mobile menu on link click
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
          <div className="gap-2 hidden md:flex">
            <Link href="https://www.facebook.com/BMOElitePerformance">
              <FaFacebookSquare
                className="text-white hover:text-bmo-primary"
                size={20}
              />
            </Link>
            <Link href="https://www.tiktok.com/@bmo.elite.perform">
              <AiFillTikTok className="hover:text-bmo-primary" size={21} />
            </Link>
            <Link href="https://www.instagram.com/BMOElite21">
              <FaInstagram
                className="text-white hover:text-bmo-primary"
                size={21}
              />
            </Link>
            <Link href="https://www.youtube.com/@BMOElite2321">
              <FaYoutube
                className="text-white hover:text-bmo-primary"
                size={21}
              />
            </Link>
          </div>

          <button
            onClick={handleMenuClick}
            className="p-2 hover:bg-orange-500 rounded-lg transition-colors right-4 top-4 z-50 md:hidden"
            aria-expanded={mobileMenu}
            aria-label="Toggle Menu"
          >
            {!mobileMenu ? (
              <HiMiniBars3 size={24} />
            ) : (
              <HiMiniXMark className="text-white" size={30} />
            )}
          </button>
          {mobileMenu && (
            <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center space-y-8 text-xl">
                <Image
                  src="/images/bmo-logo.png"
                  width={150}
                  height={10}
                  alt="bmo-logo"
                />
                {menuLinks.map((link) =>
                  link.subLinks ? (
                    <div key={link.name} className="relative">
                      <button
                        onClick={
                          link.name === "Services"
                            ? toggleServicesDropdown
                            : toggleFormsDropdown
                        }
                        className="text-white hover:text-orange-500 transition-colors"
                      >
                        {link.name}
                      </button>
                      {(link.name === "Services"
                        ? servicesDropdownOpen
                        : formsDropdownOpen) && (
                        <div
                          ref={
                            link.name === "Services"
                              ? servicesDropdownRef
                              : formsDropdownRef
                          }
                          className="absolute left-0 mt-2 w-56 bg-black text-white rounded shadow-lg"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.link}
                              onClick={() => {
                                closeMobileMenu();
                                closeDropdowns();
                              }}
                            >
                              <div className="block px-4 py-2 hover:bg-gray-700">
                                {subLink.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.link}
                      className="text-white hover:text-orange-500 transition-colors"
                      onClick={closeMobileMenu} // Close mobile menu on link click
                    >
                      {link.name}
                    </Link>
                  ),
                )}
              </nav>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
