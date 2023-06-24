"use client";
import React, { Fragment, useState } from "react";
import ReportGrid from "@/components/Report/ReportGrid";
import ReportRow from "@/components/Report/ReportRow";
import DialogueWrapper from "@/components/Shared/Dialogue/DialogueWrapper";
import DropDown from "@/components/Shared/DropDown/DropDown";
import { IReportFilters } from "@/types/types";
import Static from "../constants/Data/Static.json";
import Button from "@/components/Shared/Buttons/Button";
import TextInput from "@/components/Shared/Inputs/TextInput";
import ReportFilterRadioButtons from "@/components/Report/ReportFilterRadioButtons";
type Props = {};

const Report = (props: Props) => {
  const { orders } = Static;
  const [isOpen, setIsOpen] = useState({
    editDialogue: false,
    filterDialogue: false,
  });

  const [filters, setFilters] = useState<IReportFilters>({
    filter: "",
    oldestOrderDate: "",
  });
  const [inputs, setInputs] = useState({
    search: "",
  });

  const handleFilterFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen({ ...isOpen, filterDialogue: false });
  };
  
  return (
    <Fragment>
      <ReportGrid
        Title="Report"
        SetFilter={() =>
          setIsOpen({ editDialogue: false, filterDialogue: true })
        }
        GridCols="grid-cols-[1.5fr,1.5fr,1fr,1.5fr,1.5fr]"
        TableHeaders={["Order", "Product Name", "Date", "Price", "Description"]}
      >
        {orders.map((item: any, index: number) => (
          <ReportRow
            key={index}
            orderId={item.orderId}
            price={item.price}
            date={item.date}
            description={item.description}
            productName={item.productName}
            onEdit={() =>
              setIsOpen({ editDialogue: true, filterDialogue: false })
            }
          />
        ))}
      </ReportGrid>
      <DialogueWrapper
        Open={isOpen.filterDialogue}
        CloseEvent={() => setIsOpen({ ...isOpen, filterDialogue: false })}
        Title="Filters"
      >
        <form
          onSubmit={handleFilterFormSubmit}
          className="w-full h-[500px] flex flex-col gap-6 items-center justify-start px-4 sm:px-6 pt-6 overflow-auto"
        >
          <div className="w-full h-[calc(100%-70px)] flex justify-start items-start flex-col gap-4">
            <p className="font-semibold font-secondary text-black-main text-[16px]">
              Filters:
            </p>
            <ReportFilterRadioButtons
              firstOption={{
                label: "All Open Ticket",
                value: "All Open Ticket",
              }}
              secondOption={{ label: "All Shipped", value: "All Shipped" }}
              thirdOption={{ label: "Over 14 Days", value: "Over 14 Days" }}
              fourthOption={{
                label: "Spill Over Risk",
                value: "Spill Over Risk",
              }}
              fifthOption={{
                label: "Oldest Order Date",
                value: "Oldest Order Date",
              }}
              sixthOption={{ label: "All In Process", value: "All In Process" }}
              value={filters.filter}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFilters({
                  ...filters,
                  filter: (e.target as HTMLInputElement).value,
                });
              }}
            />
            {filters.filter == "Oldest Order Date" && (
              <TextInput
                title="Oldest Order Date"
                type="date"
                name="oldestOrderDate"
                state={filters.oldestOrderDate}
                setState={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFilters({ ...filters, oldestOrderDate: e.target.value })
                }
              />
            )}
          </div>

          <div className="w-full h-[70px] flex items-center justify-end gap-4">
            <Button
              text="Cancel"
              event={() => setIsOpen({ ...isOpen, filterDialogue: false })}
              variation="outlined"
            />
            <Button text="Search" event={() => {}} type="submit" />
          </div>
        </form>
      </DialogueWrapper>
    </Fragment>
  );
};

export default Report;
