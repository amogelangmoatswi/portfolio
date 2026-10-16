"use client";

import { cn } from "@/lib/utils";
import { MenuIcon, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";

const navLinks = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Designs", href: "#Designs" },
  { label: "Contact", href: "#Contact" },
];

export function NavBar() {
  const [visible, setVisible] = React.useState(true);
  const prevScrollRef = React.useRef(0);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollPos = window.scrollY;
        const isScrollingUp = prevScrollRef.current > currentScrollPos;
        const isAtTop = currentScrollPos < 10;

        setVisible(isScrollingUp || isAtTop);
        prevScrollRef.current = currentScrollPos;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "transition-transform duration-500 ease-in-out fixed top-0 left-0 right-0 z-[50] py-4",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex justify-center items-center w-full px-3 sm:px-4">
        <div className="flex justify-between items-center w-full max-w-2xl text-foreground relative bg-black/70 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 pl-1 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center shadow-sm shadow-primary/30 group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-bold text-[11px] sm:text-xs tracking-wider">AM</span>
            </div>
            <span className="text-foreground font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors">Mr.Moatswi</span>
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="max-[825px]:hidden">
            <NavigationMenuList className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <span className="inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="min-[825px]:hidden p-2 rounded-full hover:bg-white/10 transition text-white min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              <MenuIcon className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-950/98 backdrop-blur-2xl border-l border-white/10 text-white flex flex-col justify-between w-[280px] sm:w-[320px] p-6">
              <div>
                <SheetHeader className="text-left mb-6">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">AM</span>
                    </div>
                    <SheetTitle className="text-white text-base font-display">Amogelang Moatswi</SheetTitle>
                  </div>
                  <SheetDescription className="text-muted-foreground text-xs">
                    Full-Stack Developer & Designer
                  </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link href={link.href}>
                        <Button
                          variant="mine"
                          className="w-full justify-start text-sm h-11 px-4 font-medium hover:border-primary/50"
                        >
                          {link.label}
                        </Button>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer with Quick Contact */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-muted-foreground mb-3 font-mono">Connect with me</p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/amogelang-moatswi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 transition flex-1 flex justify-center"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/amogelangmoatswi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 transition flex-1 flex justify-center"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:moatswi12@gmail.com"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 transition flex-1 flex justify-center"
                    aria-label="Email Contact"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}