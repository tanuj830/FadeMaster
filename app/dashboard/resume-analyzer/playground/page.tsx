"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  const [startAnalyzing, setStartAnalyzing] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const handleclick = () => {
    setStartAnalyzing(true);

    setTimeout(() => {
      setScore(Math.floor(Math.random() * 100));
    }, 10000);
  };
  return (
    <div className="flex justify-center items-center h-[80vh]">
      {startAnalyzing === false ? (
        <div className="">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Upload Resume</Label>
            <Input id="picture" type="file" />
          </div>
          <Button className="my-3" onClick={handleclick}>
            Analyze Score
          </Button>
        </div>
      ) : (
        <div className="">
          <div>
            {score === 0 ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin w-5 h-5" />{" "}
                <span>Analyzing your resume ATS score </span>
              </span>
            ) : (
              <span>Your resume ATS score: {score}</span>
            )}
          </div>
          <Button
            className="my-3"
            onClick={() => {
              window.location.reload();
            }}
          >
            Add another resume
          </Button>
        </div>
      )}
    </div>
  );
};

export default page;
