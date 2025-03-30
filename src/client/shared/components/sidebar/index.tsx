"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { LuSettings } from "react-icons/lu";
import { menuItems } from "./path";
import { MenuItem } from "./MenuItems";


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-border-light flex flex-col">
      <div className="p-4 border-b border-border-light">
        <h1 className="text-2xl font-bold text-primary-500">KasirKu</h1>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <MenuItem key={item.href} item={item} />
          ))}
        </div>

        <div className="absolute bottom-4 w-56">
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
              pathname === "/settings"
                ? "bg-primary-50 text-primary-500"
                : "text-gray-700 hover:bg-primary-50 hover:text-primary-500"
            }`}
          >
            <LuSettings className="w-5 h-5" />
            <span>Pengaturan</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
