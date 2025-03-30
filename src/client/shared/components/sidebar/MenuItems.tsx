import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

interface MenuItem {
  href: string;
  icon?: React.ReactNode;
  label: string;
  subItems?: {
    href: string;
    label: string;
  }[];
}

export const MenuItem = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    (item.subItems &&
      item.subItems.some((subItem) => pathname === subItem.href));

  return (
    <div>
      <Link
        href={item.subItems ? "#" : item.href}
        className={`flex items-center justify-between gap-3 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
          isActive
            ? "bg-primary-50 text-primary-500"
            : "text-gray-700 hover:bg-primary-50 hover:text-primary-500"
        }`}
        onClick={() => item.subItems && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {item.icon}
          <span>{item.label}</span>
        </div>
        {item.subItems && (
          <LuChevronDown
            className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      {item.subItems && (
        <div
          className={`space-y-1 mt-1 overflow-hidden border-l-2 border-primary-500 ml-6 transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {item.subItems.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className={`flex items-center gap-3 pl-6 py-2 rounded-lg transition-all duration-300 ease-in-out text-sm ${
                pathname === subItem.href
                  ? "text-primary-500 bg-primary-50"
                  : "text-gray-700 hover:bg-primary-50 hover:text-primary-500"
              }`}
            >
              <span>{subItem.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
