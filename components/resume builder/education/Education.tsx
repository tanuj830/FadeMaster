"use client";
import React from "react";
import Input from "../Input";
import { TiArrowRightThick } from "react-icons/ti";
import { IoAdd } from "react-icons/io5";
import PreviousAddedItems from "./PreviousAddedItems";
interface EducationProps {
  setEducationPageCompleted: Function;
  setEducationPageData: Function;
  educationPageData: Array<any>;
}

const Education: React.FC<EducationProps> = ({
  setEducationPageCompleted,
  setEducationPageData,
  educationPageData,
}) => {
  const [year, setYear] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [educationInfo, setEducationInfo] = React.useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEducationPageCompleted(true);
    let data = {
      year,
      degree,
      school,
      grade,
    };
    setEducationPageData([...educationPageData, data]);
  };
  const handleAddEducation = () => {};

  return (
    <div className="h-full  w-full p-5 md:p-10">
      <div className="flex justify-start h-full flex-col gap-5">
        <div>
          <h2 className="text-[1.4rem] lg:text-[1.8rem] font-medium">
            Please enter your <span className="text-primary"> Education </span>{" "}
            info
          </h2>
          <small className="text-md text-muted-foreground leading-10">
            It allows employers to see how you performed in your acadmeics.
          </small>
        </div>
        <div>
          <PreviousAddedItems
            setData={setEducationPageData}
            data={educationPageData}
          />
        </div>
        <div className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Input
                value=""
                label="Start and End Year"
                placeholder="2020-2024"
                setText={setYear}
              />
              <Input
                value=""
                label="Degree"
                placeholder="B-tech"
                setText={setDegree}
              />
              <Input
                value=""
                label="Institute"
                placeholder="Graphic Era Hill University"
                setText={setSchool}
              />
              <Input
                value=""
                label="CGPA/ Marks"
                placeholder="8.1/ 10"
                setText={setGrade}
              />
            </div>
            <div className="flex items-center gap-5">
              <button
                type="submit"
                onClick={handleAddEducation}
                className=" py-5 mt-5 font-medium w-fit  lg:mt-10 flex items-center justify-center gap-3"
              >
                <span className="text-2xl font-bold p-1  border border-gray-600 rounded-full">
                  <IoAdd />
                </span>
                <span>Add more</span>
                {/* <span className="text-2xl">
                <TiArrowRightThick />
              </span> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Education;
