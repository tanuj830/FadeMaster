import React from "react";
interface EducationPreviewProps {
  educationPageData: Array<{
    year: string;
    degree: string;
    school: string;
    grade: string;
  }>;
}
const EducationPreview: React.FC<EducationPreviewProps> = ({
  educationPageData,
}) => {
  return (
    <div>
      <div className="mt-2">
        <h2 className="bg-gray-200 py-1 rounded-sm text-xs w-full text-center font-bold uppercase">
          Education
        </h2>
      </div>
      {educationPageData.length > 0
        ? educationPageData.map((data) => (
            <div className="py-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{data.school}</span>
                <span className="font-semibold text-sm">{data.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs italic">{data.degree}</span>
                <span className="text-xs italic">{data.grade}</span>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default EducationPreview;
