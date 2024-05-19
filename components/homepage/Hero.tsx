import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
// import Lines from "./Lines";
// import ConvertToPDF from "./resume builder/ConvertToPDF";

const Hero = () => {
  return (
    <div className="relative  cont py-10 px-[6vw] lg:px-[10vw]">
      <div className="flex flex-col lg:flex-row-reverse justify-between ">
        <div className=" lg:p-0">
          <img
            className="object-contain"
            src="https://assets-global.website-files.com/655dd78870c51459319f6bbb/655df71ede1029cae5386583_geo-3-p-500.png"
            alt=""
          />
        </div>
        <div className="flex justify-center  flex-col items-center lg:items-start">
          <h1 className=" text-center  font-[600] text-primary/90 leading-10 lg:leading-[80px] md:text-[4rem] text-[2.1rem] ">
            Vocal Remover and Isolation with
          </h1>
          {/* <h1 className="text-[#0000ff] font-[600] text-center text-[2rem] lg:pl-20 md:text-[4rem]">
            Your Carrer
          </h1> */}
          <h1 className="font-bold text-primary leading-10 lg:leading-[80px] text-center text-[2.1rem] md:text-[4rem]">
            Fade Master.
          </h1>
          <p className="py-10 text-lg text-center lg:text-start text-muted-foreground font-medium">
            Separate voice from music out of a song free with powerful AI
            algorithms
          </p>
          <div className="flex gap-3 items-center my-2">
            <Button
              className="  text-primary-foreground hover:text-primary-foreground"
              size={"lg"}
            >
              <Link href="/dashboard">Get's Started</Link>
            </Button>
            <Button className=" bg-primary/50" size={"lg"}>
              How it Works ?
            </Button>
          </div>
          {/* <button className="px-10 py-5 font-medium w-fit bg-[#0000ff] rounded-full lg:mt-10">
            Get in Touch
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
