import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

interface Props {
  Title: string;
  TableHeaders: Array<string>;
  children: React.ReactNode;
  GridCols: string;
  SetFilter: (e: any) => void;
  Pages?: number;
  CurrentPage?: number;
  OnPageChange?: any;
}

const ShipmentGrid: React.FC<Props> = ({
  Title,
  TableHeaders,
  GridCols,
  children,
  SetFilter,
  Pages,
  CurrentPage,
  OnPageChange,
}: Props) => {
  return (
    <section className="w-full h-[calc(100vh-118px)] bg-white-main border-[1px] rounded-[8px] shadow-secondary">
      <div className="w-full h-[60px] flex items-center justify-between border-b-[1px] px-4">
        <p className="font-primary capitalize font-semibold text-black-main sm:text-[20px] text-[16px]">
          {Title}
        </p>
        <button
          onClick={SetFilter}
          className="h-[30px] w-[80px] flex items-center justify-center gap-1 rounded-[5px] text-white-main font-secondary font-medium text-[14px] bg-brand-main"
        >
          <FaFilter size={15} />
          Filters
        </button>
      </div>

      <div className="w-full h-[calc(100%-120px)]">
        <div
          className={`w-full h-[40px] grid ${GridCols} min-w-[1000px] border-b-[1px] border-gray px-4`}
        >
          {TableHeaders.map((item: string, index: any) => (
            <div
              key={index}
              className="w-full flex items-center justify-start capitalize font-medium whitespace-nowrap text-black-main sm:text-[14px] font-inter"
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className={`w-full h-[calc(100%-40px)] overflow-auto ThinScrollbar`}
        >
          {children}
        </div>
        <div></div>
      </div>

      <div className="w-full h-[60px] border-t-[1px] border-gray flex justify-center items-center">
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#FF1818",
                  color: "white",
                  display: {
                    md: "block",
                    xs: "none",
                  },
                },
              }}
            />
          )}
        />
      </div>
    </section>
  );
};

export default ShipmentGrid;
