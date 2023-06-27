"use client";
import React from "react";

interface Props {
  firstName: string;
  email: string; 
  role: string;
  phoneNo: string;
  onEdit: (e: any) => void;
}

const RecentUserRow: React.FC<Props> = ({
  firstName,
  email,
  phoneNo,
  role,
  onEdit,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1.5fr,1.5fr,1fr,1fr] min-w-[800px] border-b-[2px] border-gray px-4 py-[8px] font-primary">
      <div className="w-full flex items-center justify-start">
        <p className="font-semibold text-black-main text-[14px] capitalize">
          {firstName}
        </p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{email}</p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{role}</p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{phoneNo}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <button
          className="w-[80px] h-[30px] flex items-center justify-center rounded-[6px] text-white-main text-[14px] font-inter font-medium bg-brand-main"
          onClick={onEdit}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default RecentUserRow;
