import Navbar from "@/components/homepage/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className=" px-5 md:px-[10vw] w-full ">
        <h6 className="text-2xl my-5 font-bold">How it Works ?</h6>
        <div className="flex flex-col md:flex-row gap-10 bg-muted rounded-lg md:p-5">
          <video
            src="/fademaster.mp4"
            className="w-full md:w-[50vw] md:h-[70vh]"
            autoPlay
            controls
          ></video>
          <div className="flex flex-col gap-4 md:w-[50vw] p-2">
            <p className="bg-muted p-3 rounded-lg border shadow-lg">
              This app can be used to trim and/or cut audio tracks, remove an
              audio fragments. Fade in and fade out your music easily to make
              the audio harmoniously.
            </p>
            <p className="bg-muted p-3 rounded-lg border shadow-lg">
              It fast and easy to use. You can save the audio file in any format
              (codec parameters are configured)
            </p>
            <p className="bg-muted p-3 rounded-lg border shadow-lg">
              It works directly in the browser, no needs to install any
              software, is available for mobile devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
