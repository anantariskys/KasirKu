"use client";
import { LuSearch, LuUser, LuChevronDown } from "react-icons/lu";
import { useAuthStore } from "../../store/useAuthStore";
import Input from "../Input";
import { useState } from "react";
import Logout from "../Logout";
import Link from "next/link";

export default function Navbar() {
  const { user } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-border-light">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="max-w-2xl w-full">
            <Input
              leftIcon={LuSearch}
              placeholder="Cari..."
              size="md"
              width="w-full"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
          {/* Left side */}

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="flex items-center gap-2 text-gray-700 hover:text-primary-500 transition-colors">
            
                <span className="text-sm font-medium">{user?.username}</span>
              </button>
            </div>

            <div className="h-6 w-px bg-gray-200" />

            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">A</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
                <LuChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                  <Link
                    href="/profile"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 flex py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                        <LuUser className="w-5 h-5" />
                    Profile
                  </Link>
                  <Logout type="secondary"/>
                 
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
