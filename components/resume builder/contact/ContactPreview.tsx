import React from "react";

interface ContactPreviewProps {
  contactPageData: {
    name: string;
    address: string;
    city: string;
    postalcode: string;
    phone: string;
    email: string;
    linkedin: string;
  };
}

const ContactPreview: React.FC<ContactPreviewProps> = ({ contactPageData }) => {
  return (
    <div>
      <div className="flex flex-col ">
        <span className="text-md">{contactPageData.name}</span>
        <div>
          <span className="text-xs">{contactPageData.address}, </span>
          <span className="text-xs">{contactPageData.city}, </span>
          <span className="text-xs">{contactPageData.postalcode}</span>
        </div>
        <span className="text-xs">{contactPageData.phone}</span>
        <span className="text-xs">{contactPageData.email}</span>
        <a href={contactPageData.linkedin} className="text-xs">
          {contactPageData.linkedin}
        </a>
      </div>
    </div>
  );
};

export default ContactPreview;
