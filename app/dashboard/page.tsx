"use client";
import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import { ThemeButton } from "@/components/ThemeButton";
import { Button } from "@/components/ui/button";
import {
  DogIcon,
  File,
  FileJson,
  HelpCircleIcon,
  ScanLine,
  ScissorsIcon,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = () => {
  const path = usePathname();
  const [ishover, setIsHover] = React.useState(false);
  const [hoverid, sethoverid] = React.useState(0);
  const features = [
    {
      id: 1,
      featureName: "Audio Cutter",
      route: "/dashboard/audio-cutter",
      disp: "The user-friendly audio cutter helps you to trim audio by seconds.",
      icon: ScissorsIcon,
    },
    {
      id: 2,
      featureName: "Resume Analyzer",
      route: "/dashboard/resume-analyzer",
      disp: "Our Resume Analyzer tool enhances your resume's impact. Upload it, and our AI tool will assess formatting, keywords, and content quality, providing an ATS Score.",
      icon: ScanLine,
    },
    {
      id: 3,
      featureName: "Code Chat",
      route: "/dashboard/code-chat",
      disp: "Code Chat enables real-time collaboration on coding projects. Whether solo or in a team, it offers a seamless environment for discussing code, sharing ideas, and debugging together.",
      icon: FileJson,
    },
  ];
  return (
    <main className="w-full h-full ">
      <div>
        <h1 className="font-bold ">Features</h1>
        <p className="text-muted-foreground text-sm">
          Here you can see features of ProfilePro
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:mt-10 py-10">
        {features.map((f, ind) => (
          <Link
            href={f.route}
            onMouseEnter={() => {
              setIsHover(true);
              sethoverid(f.id);
            }}
            onMouseLeave={() => {
              setIsHover(false);
              sethoverid(0);
            }}
            key={ind}
            className="p-5 md:p-6 border border-muted rounded-lg bg-muted/30 transition-all duration-500"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="w-fit bg-secondary  rounded-full ">
                <f.icon
                  className={`w-20 h-20 p-5 transition-all rounded-full duration-1000  ${
                    ishover && hoverid == f.id
                      ? "text-primary p-5 shadow-sm rounded-full bg-primary/10 "
                      : null
                  }`}
                />
              </span>
              <h6 className={`font-medium text-md `}>{f.featureName}</h6>
              <p className="text-sm text-muted-foreground leading-6">
                {f.disp}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Layout;
