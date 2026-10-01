"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "NTCM", href: "/video" },
  { label: "Entradas", href: "/tickets" },
  { label: "Links", href: "/links" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-[37px] text-xl leading-[0.9] text-black">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

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
