"use client";
import React from "react";
import {MdEdit} from "react-icons/md"

interface Props {
  curtd: string;
  curtrk: number;
  shipTo: string;
  arb: number;
  pt: number;
  status: string;
  comment: string;
  bo: number;
  line: number;
  qty: number;
  ordPatt: number;
  oraPatt: number;
  type: string;
  fin: number;
  wid: number;
  leng: number;
  onEdit: (e: any) => void;
}

const ShipmentRow: React.FC<Props> = ({
  curtd,
  curtrk,
  shipTo,
  arb,
  pt,
  status,
  comment,
  bo,
  line,
  qty,
  ordPatt,
  oraPatt,
  type,
  fin,
  wid,
  leng,
  onEdit,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[2fr,2fr,2fr,1fr,1fr,1.5fr,2fr,1fr,1fr,1fr,2fr,2fr,1.5fr,1fr,1fr,1fr] min-w-[1000px] border-b-[2px] border-gray px-4 py-[8px] font-primary">
      <div className="w-full flex items-center justify-start">
        <p className="font-semibold text-black-main text-[14px] capitalize">
          {curtd}
        </p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{curtrk}</p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{shipTo}</p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{arb}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{pt}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{status}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">
          {comment.length > 10 ? comment.substring(0, 9) + "..." : comment}
        </p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{bo}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{line}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{qty}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{ordPatt}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{oraPatt}</p>
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
     
    </div>
  );
};

export default ShipmentRow;
