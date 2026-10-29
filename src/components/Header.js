"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_URL, LOGO, NAV, PHONE, PHONE_HREF } from "@/lib/site";

function isActive(pathname, to) {
  return to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={LOGO}
            alt="Therapy With Purpose logo"
            width={160}
            height={106}
            className="h-11 w-auto"
          />
          <span className="sr-only">Therapy With Purpose</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`transition-colors hover:text-violet${
                isActive(pathname, item.to) ? " text-violet font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-sm font-medium text-teal-deep transition-colors hover:text-violet sm:inline"
          >
            {PHONE}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-violet px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-violet-deep sm:inline-flex"
          >
            Book appointment
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="rounded-full border border-border px-3 py-2 text-sm lg:hidden"
          >
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-violet${
                  isActive(pathname, item.to) ? " text-violet font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-violet px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Book appointment
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
