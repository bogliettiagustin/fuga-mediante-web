"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "DISIMULAR", href: "/" },
  { label: "NTCM", href: "/video" },
  { label: "Entradas", href: "/tickets" },
  { label: "Links", href: "/links" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg leading-[0.9] text-black sm:gap-x-[37px] sm:text-xl">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className="transition-opacity hover:opacity-70 aria-[current=page]:font-bold"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
