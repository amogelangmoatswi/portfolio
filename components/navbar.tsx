"use client";

import { cn } from "@/lib/utils";
import { MenuIcon } from 'lucide-react';
import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet";

function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function NavBar() {
    const [visible, setVisible] = React.useState(true);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = debounce(() => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = prevScrollPos > currentScrollPos;
            const isAtTop = currentScrollPos < 10;

            setVisible(isScrollingUp || isAtTop);
            setPrevScrollPos(currentScrollPos);
        }, 80);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`transition-transform duration-500 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 right-0 z-[50] py-4 bg-transparent`}>
            <div className="flex justify-center items-center w-full px-4">
                <div className="flex justify-between items-center w-[55%] text-slate-50 relative bg-navcolor border border-cvstroke shadow-sm border-opacity-20 rounded-[20px] p-2">
                    <Sheet>
                        <SheetTrigger className="min-[825px]:hidden p-2 transition">
                            <MenuIcon />
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Amogelang Moatswi</SheetTitle>
                                <SheetDescription>
                                Developer & Creative Thinker
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                                <SheetClose asChild>
                                    <Link href="#about-us">
                                        <Button variant="outline" className="w-full">About Us</Button>
                                    </Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link href="#about-us">
                                        <Button variant="outline" className="w-full">About Us</Button>
                                    </Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link href="#about-us">
                                        <Button variant="outline" className="w-full">About Us</Button>
                                    </Link>
                                </SheetClose>
                            
                                <SheetClose asChild>
                                    <Link href="/survey">
                                        <Button variant="outline" className="w-full">Download CV</Button>
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <Link href="/" className="flex items-center space-x-2 pl-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-base">AM</span>
                        </div>
                        <span className="text-white font-medium text-sm">Mr.Moatswi</span>
                    </Link>

                    <NavigationMenu className="flex-grow justify-center max-[825px]:hidden">
                        <NavigationMenuList className="space-x-1">
                            <Link href="#Home">
                                <Button variant="ghost" size="md">Home</Button>
                            </Link>
                            <Link href="#Projects">
                                <Button variant="ghost" size="md">Projects</Button>
                            </Link>
                            <Link href="#Contact">
                                <Button variant="ghost" size="md">Contact</Button>
                            </Link>
                        </NavigationMenuList>
                    </NavigationMenu>
                    
                    <Link href="/cv">
                        <Button variant="mine"  className=" max-[825px]:hidden">Download CV</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}