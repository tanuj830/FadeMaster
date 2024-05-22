"use client";
import {
  Building,
  Code,
  CreditCardIcon,
  Home,
  ScissorsIcon,
  SearchCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
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
      text: "Audio Cutter",
      route: "/dashboard/audio-cutter",
      icon: ScissorsIcon,
    },
  ];
  return (
    <aside className="p-5 border-r border-r-secondary h-screen">
      <div className="flex flex-col justify-between h-full">
        <div className="h-fit">
          <div className="">
            <Link className="cursor-pointer text-2xl  font-semibold" href="/">
              Fade Master.
            </Link>
          </div>
          <div className="mt-10 flex flex-col ">
            {/* Navlinks */}
            <div className="flex flex-col gap-y-1">
              {dashboardLinks.map((link) => (
                <Link
                  className={`hover:bg-secondary ${
                    path == link.route ? "bg-secondary" : null
                  } p-3 rounded-lg flex items-center gap-2 text-md `}
                  key={link.id}
                  href={link.route}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  <span className="text-sm">{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Link
            className={`bg-primary  p-3 rounded-lg flex items-center gap-2 text-md text-primary-foreground`}
            href="#"
          >
            <CreditCardIcon className="mr-2 h-4 w-4" />
            <span
              className="text-sm"
              onClick={() =>
                alert(
                  "This feature is not released yet, till then explore Fade Master for free."
                )
              }
            >
              Buy Credits
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
