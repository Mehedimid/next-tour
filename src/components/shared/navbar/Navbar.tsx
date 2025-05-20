"use client";
import Link from "next/link";
import { FaPhone, } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Logo from "../logo/Logo";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import PrimaryButton from "../buttons/PrimaryButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="shadow-md relative z-50 bg-white layout-padding py-4 md:py-0">
      {/* Main Navigation Bar */}
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-black px-4 py-4 transition-all duration-500 font-medium ${
                link.href === path && "bg-primary text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Call & Register */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <div className="text-secondary rounded-full">
              <FaPhone />
            </div>
            <div className="ml-2 text-sm">
              <p className="font-bold text-gray-900">+88 (01) 53 33 09</p>
            </div>
          </div>

          <Link href="/register">
            <PrimaryButton label="Register" fromColor="bg-primary" />
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
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-black text-2xl"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col px-6 py-6 space-y-6">
          {/* Nav Links */}
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-black px-4 py-3 rounded-md font-medium ${
                  link.href === path ? "bg-primary text-white" : "hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call Info */}
          <div className="flex items-center space-x-3 border-y py-4">
            <div className="bg-secondary text-white rounded-full p-3">
              <FaPhone />
            </div>
            <div className="text-sm">
              <p className="text-gray-700">Call Us</p>
              <p className="font-bold text-gray-900">+88 (01) 53 33 09</p>
            </div>
          </div>

          {/* Register Button */}
          <div className="w-full">
            <Link href="/register" onClick={() => setMenuOpen(false)}>
              <PrimaryButton
                label="Register"
                fromColor="bg-primary"
                className="w-full text-lg"
                padding="py-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
