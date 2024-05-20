"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Building,
  Code,
  CreditCardIcon,
  Home,
  Menu,
  MenuIcon,
  MenuSquareIcon,
  ScissorsIcon,
  SearchCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileSidebar = () => {
  const path = usePathname();
  const dashboardLinks = [
    {
      id: 0,
      text: "Home",
      route: "/dashboard",
      icon: Home,
    },
    {
      id: 1,
      text: "Trim Audio",
      route: "/dashboard/audio-cutter",
      icon: ScissorsIcon,
    },
  ];
  return (
    <div className="flex items-center">
      <Sheet>
        <div className="">
          <SheetTrigger>
            <MenuIcon className="w-8 h-8" />
          </SheetTrigger>
        </div>
        <SheetContent className="border-secondary">
          <Link className="cursor-pointer text-[1.5rem] font-semibold" href="/">
            ProfilePro
            <span className="text-[#0000ff] font-extrabold text-3xl">.</span>
          </Link>
          <div className="mt-10">
            <div className="flex  flex-col gap-y-2">
              {dashboardLinks.map((link) => (
                <Link
                  className={`hover:bg-secondary ${
                    path == link.route ? "bg-secondary" : null
                  } p-3 rounded-lg flex items-center gap-2 text-md `}
                  key={link.id}
                  href={link.route}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  <span>{link.text}</span>
                </Link>
              ))}
            </div>
            <div className="py-3">
              <div>
                <Link
                  onClick={() =>
                    alert(
                      "This feature is not released yet, till then explore Fade Master for free."
                    )
                  }
                  className={`bg-primary text-primary-foreground  p-3 rounded-lg flex items-center gap-2 text-md `}
                  href="#"
                >
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  <span>Buy Credits</span>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
