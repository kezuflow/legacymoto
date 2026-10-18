"use client";
import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "Helmets", href: "#helmets" },
  { label: "Riding gear", href: "#riding-gear" },
  { label: "Accessories", href: "#accessories" },
  { label: "Brands", href: "#brands" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "About us", href: "#about" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a href="#" className="wordmark" aria-label="LegacyMoto home">
          LEGACYMOTO.
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#featured"
          className={`${buttonVariants({ variant: "outline" })} header-cta pill-button`}
        >
          Explore gear <ArrowUpRight size={15} />
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="mobile-menu"
                aria-label="Open navigation"
              />
            }
          >
            <Menu size={23} />
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader>
              <SheetTitle className="wordmark">LEGACYMOTO.</SheetTitle>
              <SheetDescription className="sr-only">
                Explore helmets, riding gear, accessories, and brands.
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="mobile-nav">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </nav>
            <a
              href="#featured"
              onClick={() => setOpen(false)}
              className={`${buttonVariants()} pill-button mobile-explore`}
            >
              Explore gear <ArrowUpRight size={16} />
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
