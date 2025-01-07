"use client";

import { cn } from "@/lib/utils";
import { BarChart2, Clock, Trophy, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // Import useState for handling the sidebar visibility on mobile

const routes = [
  {
    icon: Clock,
    label: "Focus Timer",
    href: "/",
  },
  {
    icon: BarChart2,
    label: "Analytics",
    href: "/analytics",
  },
  {
    icon: Trophy,
    label: "Achievements",
    href: "/achievements",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility on mobile

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex h-screen w-64 flex-col fixed left-0 top-0 bg-[#181E2A] text-[#E5E7EB] shadow-xl">
        {/* Header */}
        <div className="p-6 border-b border-[#232B3A]">
          <h1 className="text-2xl font-bold tracking-tight text-[#16C784]">
            Focus Tracker
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-x-4 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                pathname === route.href
                  ? "bg-[#16C784] text-[#FFFFFF] shadow-md"
                  : "text-[#A1A1AA] hover:bg-[#232B3A] hover:text-white"
              )}
            >
              <route.icon
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  pathname === route.href
                    ? "text-white scale-110"
                    : "text-[#A1A1AA] group-hover:text-white"
                )}
              />
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="p-6 border-t border-[#232B3A] mt-auto">
          <div className="flex items-center gap-x-4">
            <User className="w-8 h-8 text-[#16C784]" />
            <div className="flex-1">
              <p className="text-base font-semibold text-[#E5E7EB]">John Doe</p>
              <p className="text-sm text-[#A1A1AA]">johndoe@example.com</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-[#16C784] to-[#2ECC71] rounded-lg hover:from-[#2ECC71] hover:to-[#28A745] shadow-md">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-[#16C784] text-white p-3 rounded-full focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#181E2A] text-[#E5E7EB] shadow-xl z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#232B3A]">
          <h1 className="text-2xl font-bold tracking-tight text-[#16C784]">
            Focus Tracker
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-x-4 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                pathname === route.href
                  ? "bg-[#16C784] text-[#FFFFFF] shadow-md"
                  : "text-[#A1A1AA] hover:bg-[#232B3A] hover:text-white"
              )}
            >
              <route.icon
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  pathname === route.href
                    ? "text-white scale-110"
                    : "text-[#A1A1AA] group-hover:text-white"
                )}
              />
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="p-6 border-t border-[#232B3A] mt-auto">
          <div className="flex items-center gap-x-4">
            <User className="w-8 h-8 text-[#16C784]" />
            <div className="flex-1">
              <p className="text-base font-semibold text-[#E5E7EB]">John Doe</p>
              <p className="text-sm text-[#A1A1AA]">johndoe@example.com</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-[#16C784] to-[#2ECC71] rounded-lg hover:from-[#2ECC71] hover:to-[#28A745] shadow-md">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
