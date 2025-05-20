"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { Menu, UserCircle } from "lucide-react";
import Logo from "../logo/Logo";

const Navbar = () => {
  const user = false; // Set this based on authentication
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const path = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Contact Us", href: "/contact" },
    ...(!user ? [{ label: "Login", href: "/login" }] : []),
  ];

  const renderProfileMenu = (onItemClick?: () => void) => (
    <div className="flex flex-col">
      <Link
        href="/profile"
        className="text-black block px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 font-medium"
      >
        Profile
      </Link>
      <Link
        href="/dashboard"
        className="text-black block px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 font-medium"
      >
        Dashboard
      </Link>
      <button
        onClick={() => {
          if (onItemClick) onItemClick();
          // logout logic
        }}
        className="w-full text-left px-4 py-2 text-red-600 hover:bg-primary hover:text-white transition-all duration-300 font-medium"
      >
        Logout
      </button>
    </div>
  );

  return (
    <nav className="shadow-md relative z-50 bg-white layout-padding py-4 md:py-0">
      <div className="mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Nav + Profile */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-black px-4 py-2 md:py-4 transition-all duration-500 font-medium ${
                  link.href === path && "bg-primary dark:bg-secondary text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="p-2 rounded-full bg-primary text-white hover:opacity-90 transition duration-300"
            >
              <UserCircle className="w-7 h-7" />
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded shadow-lg py-2 transform origin-top-right transition-all duration-300 ease-out ${
                dropdownOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              } z-50`}
            >
              {renderProfileMenu(() => setDropdownOpen(false))}
            </div>
          </div>
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
        className={`fixed top-0 right-0 h-full w-3/5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
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

        <div className="flex flex-col ">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-black px-4 py-3 rounded-md font-medium ${
                  link.href === path
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            {renderProfileMenu(() => setMenuOpen(false))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
