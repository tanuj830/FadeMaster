import React from "react";

interface ProjectPreviewProps {
  experiencePageData: Array<{
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    city: string;
    disp: string;
  }>;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  experiencePageData,
}) => {
  return (
    <div>
      <div className="mt-2">
        <h2 className="bg-gray-200 py-1 rounded-sm text-xs w-full text-center font-bold uppercase">
          Experience
        </h2>
      </div>
      {experiencePageData.length > 0
        ? experiencePageData.map((data) => (
            <div className="py-1">
              <div className="text-xs flex justify-between">
                <span className="font-semibold text-sm">{data.employer}</span>
                <span className="font-semibold text-sm">
                  {data.startDate}
                  {" - "}
                  {data.endDate}
                </span>
              </div>
              <div className="text-xs flex justify-between py-[2px]">
                <span className="italic text-xs">{data.title}</span>
                <span className="italic text-xs">{data.city}</span>
              </div>

              <p className="text-xs">{data.disp}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default ProjectPreview;
