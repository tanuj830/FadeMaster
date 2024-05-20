"use client";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Editor from "@/components/Editor";

const ResumeBuilder = () => {
  return (
    <div className="h-[80vh] lg:h-ful w-full">
      <div className="flex justify-center h-full w-full items-center ">
        {/* <h6>Your current route is {path}</h6> */}
        <div className="flex flex-col items-center text-center gap-5">
          <span className="w-fit bg-secondary p-5 rounded-full ">
            <File className="w-10 h-10 text-primary" />
          </span>
          <div className="md:w-[60%]">
            <h5 className="text-foreground font-medium my-4">
              Trim your audio
            </h5>
            <p className="text-muted-foreground text-wrap leading-7 text-sm">
              Trim any audio and download it in the best quality for free.
            </p>
          </div>{" "}
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Trim Audio</Button>
            </DrawerTrigger>
            <DrawerContent className="h-[100vh] flex justify-center items-center px-5 lg:px-0">
              <div className="h-full w-full md:w-[60vw] lg:w-[50vw] xl:w-[40vw]">
                <DrawerHeader className="">
                  <DrawerTitle>Audio Trimmer</DrawerTitle>
                </DrawerHeader>
                <Editor />
                {/* <div className="p-5 rounded-lg flex flex-col gap-1 mt-3 bg-muted ">
                  <label className="text-muted-foreground text-sm">
                    Upload Audio
                  </label>
                  <input type="file" accept="audio" />
                </div> */}
                {/* <DrawerFooter>made with love</DrawerFooter> */}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
