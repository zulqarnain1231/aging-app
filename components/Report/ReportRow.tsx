"use client"
import React from "react";

interface Props {
  productName: string;
  orderId: string;
  price: number;
  date: string;
  description: string;
  onEdit: (e: any) => void;
}

const ReportRow: React.FC<Props> = ({
  productName,
  orderId,
  price,
  date,
  description,
  onEdit,
}: Props) => {
  return (
    <div className="w-full grid grid-cols-[1.5fr,1.5fr,1fr,1.5fr,1.5fr] min-w-[800px] border-b-[1px] border-gray px-4 py-[8px] font-primary">
      <div className="w-full flex items-center justify-start">
        <p className="font-semibold text-black-main text-[14px] capitalize">
          {orderId}
        </p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{productName}</p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{date}</p>
      </div>

      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">{price}</p>
      </div>
      <div className="w-full flex items-center justify-start">
        <p className="font-medium text-black-main text-[14px]">
          {description.length > 16
            ? description.substring(0, 15) + "..."
            : description}
        </p>
      </div>
    </div>
  );
};

export default ReportRow;
