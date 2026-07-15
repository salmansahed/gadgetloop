"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "@heroui/react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import ThemeSwitcher from "../theme-switcher";
import { authClient } from "../../lib/auth-client";
import LogoutModal from "../auth/LogoutModal";
import { useClientUserSession } from "../../hooks/user-session/useClientUserSession";
import Image from "next/image";

interface NavLink {
  name: string;
  path: string;
}

export default function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const { user, isPending } = useClientUserSession();

  const publicLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const privateLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Add Gadget", path: "/product/add" },
    { name: "Manage Items", path: "/product/manage" },
  ];

  const currentLinks: NavLink[] = user ? privateLinks : publicLinks;

  return (
    <>
      {/* Invisible backdrop overlay to close menu on outside tap */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent cursor-default"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200/50 dark:bg-gray-900/70 dark:border-gray-800/50">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-40">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="shrink-0">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold tracking-wider"
              >
                <span className="bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent transition-colors duration-300">
                  GadgetLoop
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {currentLinks.map((link: NavLink, index: number) => (
                  <Link
                    key={index}
                    href={link.path}
                    className={`text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200 ${
                      pathname === link.path
                        ? "text-purple-500 border dark:border-gray-500 px-2 py-1 rounded-lg"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:block">
              {isPending ? (
                <div className="space-x-4 flex items-center">
                  <ThemeSwitcher />
                  <div className="h-8 w-26 rounded-lg bg-gray-300 animate-pulse dark:bg-gray-600" />
                  <div className="h-8 w-26 rounded-lg bg-gray-300 animate-pulse dark:bg-gray-600" />
                </div>
              ) : user ? (
                <div className="space-x-4 flex items-center">
                  <ThemeSwitcher />
                  <div className="flex items-center gap-3">
                    <div className="p-0.5 rounded-full border-2 border-purple-600 dark:border-purple-500 flex items-center justify-center shrink-0">
                      <Image
                        src={user.image}
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col leading-tight">
                      <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                        {user.name}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">
                        {user.role}
                      </span>
                    </div>
                  </div>
                  <LogoutModal />
                </div>
              ) : (
                <div className="space-x-4 flex items-center">
                  <ThemeSwitcher />
                  <Link href="/signup">
                    <Button
                      variant="outline"
                      className="rounded-lg dark:border-gray-600"
                    >
                      <FaUserCheck />
                      Sign Up
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button className="bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all duration-200">
                      <FiLogIn />
                      Login
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <ThemeSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Layer */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full z-50 bg-white/95 backdrop-blur-lg dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800 shadow-xl lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {user && (
                <div className="px-3 pt-1 pb-3 mb-2 border-b border-gray-100 dark:border-gray-800/60">
                  <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-800/80">
                    <div className="p-0.5 rounded-full border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center shrink-0">
                      <Image
                        src={user.image}
                        alt="User Avatar"
                        width={36}
                        height={36}
                        className="size-9 rounded-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col leading-tight">
                      <span className="font-bold text-base text-zinc-800 dark:text-zinc-200">
                        {user.name || "Salman Sahed"}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">
                        {user.role || "User"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {currentLinks.map((link: NavLink, index: number) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-700 px-3">
                {user ? (
                  <div className="w-full">
                    <LogoutModal />
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link href="/signup">
                      <Button
                        onClick={() => setIsOpen(false)}
                        variant="outline"
                        className="w-full rounded-lg"
                      >
                        <FaUserCheck />
                        Sign Up
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all duration-200"
                      >
                        <FiLogIn />
                        Login
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
