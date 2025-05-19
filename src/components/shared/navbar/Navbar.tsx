"use client";
import Link from "next/link";
import { FaPhone, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Logo from "../logo/Logo";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  console.log(path);

  return (
    <nav className="shadow-md relative z-50 bg-white layout-padding py-4 md:py-0">
      {/* Main Navigation Bar */}
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo Image */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-black px-4 py-4 transition-all duration-500 font-medium ${
                link.href == path && "bg-primary  text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Call Us & Reservation (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <div className=" text-secondary rounded-full">
              <FaPhone />
            </div>
            <div className="ml-2 text-sm">
              <p className="font-semibold text-gray-900">+88 01 53 33 09</p>
            </div>
          </div>

          <Link href="/reservation">
            <Button className="hover:bg-secondary bg-primary">
              {" "}
              Register
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 inline-block ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 5.29a.75.75 0 011.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-black hover:text-gray-900 focus:outline-none"
          >
         <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-black text-2xl"
          >
            <IoMdClose />
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-black hover:bg-gray-100 px-3 py-2 rounded"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/reservation"
            onClick={() => setMenuOpen(false)}
            className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md text-sm font-semibold text-center"
          >
            Reservation
          </Link>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <div className="bg-secondary text-white rounded-full p-2">
                <FaPhone />
              </div>
              <div className="ml-2 text-sm">
                <span className="text-black">Call Us</span>
                <p className="font-semibold text-gray-900">+88 (09) 53 33 09</p>
              </div>
            </div>
            <button className="text-black hover:text-gray-900">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
