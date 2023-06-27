"use client";
import React from "react";

interface Props {
  pt: number;
  line: string;
  qty: number;
  patt: number;
  type: string;
  fin: number;
  wid: number;
  leng: number;
  id: number;
  onEdit: (e: any) => void;
}

const TicketRow: React.FC<Props> = ({
  pt,
  line,
  qty,
  patt,
  type,
  fin,
  wid,
  leng,
  id,
  onEdit,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] min-w-[800px] border-b-[2px] border-gray px-4 py-[8px] font-primary">
      <div className="w-full flex items-center justify-start">
        <p className="font-semibold text-black-main text-[14px] capitalize">
          {pt}
        </p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{line}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{qty}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{patt}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{type}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{fin}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{wid}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{leng}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{id}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <button
          className="w-[80px] h-[30px] flex items-center justify-center rounded-[6px] text-white-main text-[14px] font-inter font-medium bg-brand-main"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TicketRow;
