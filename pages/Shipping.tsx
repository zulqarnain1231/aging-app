"use client";
import React, { useState } from "react";
import ShipmentRow from "@/components/Shipping/ShipmentRow";
import DialogueWrapper from "@/components/Shared/Dialogue/DialogueWrapper";
import TextInput from "@/components/Shared/Inputs/TextInput";
import Button from "@/components/Shared/Buttons/Button";
import Static from "../constants/Data/Static.json";
import ShipmentGrid from "@/components/Shipping/ShipmentGrid";
import DropDown from "@/components/Shared/DropDown/DropDown";
import { IShippingFilters } from "@/types/types";
type Props = {};

const Shipping = (props: Props) => {
  const { shipments } = Static;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };
  const handleFilterInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  const [filters, setFilters] = useState<IShippingFilters>({
    filter: "",
    from: "",
    to: "",
  });

  const options = [
    { label: "ALL Truck", value: "ALL Truck" },
    { label: "ASSIGNED TO TRUCK", value: "ASSIGNED TO TRUCK" },
    { label: "FEDEX", value: "FEDEX" },
  ];

  return (
    <div className="w-full h-full">
      <ShipmentGrid
        SetFilter={() => setIsOpen(true)}
        Title="Shipping"
        GridCols="grid-cols-[2fr,2fr,2fr,1fr,1fr,1.5fr,2fr,1fr,1fr,1fr,2fr,2fr,1.5fr,1fr,1fr,1fr]"
        TableHeaders={[
          "CUR T_DT",
          "CUR TRK",
          "SHIP TO",
          "ARB",
          "PT#",
          "STATUS",
          "COMMENT",
          "BO#",
          "LINE",
          "QTY",
          "ORD PATT",
          "ORA PATT",
          "TYPE",
          "FIN",
          "WID",
          "LENG",
        ]}
      >
        {shipments.map((item: any, index: number) => (
          <ShipmentRow
            key={index}
            comment={item.comment}
            curtd={item.curtd}
            curtrk={item.curtrk}
            pt={item.pt}
            bo={item.bo}
            oraPatt={item.oraPatt}
            ordPatt={item.ordPatt}
            type={item.type}
            wid={item.wid}
            leng={item.leng}
            shipTo={item.shipTo}
            qty={item.qty}
            arb={item.arb}
            fin={item.fin}
            status={item.status}
            line={item.line}
            onEdit={() => setIsOpen(true)}
          />
        ))}
      </ShipmentGrid>
      <DialogueWrapper
        Open={isOpen}
        CloseEvent={() => {
          setIsOpen(false);
          setFilters({ filter: "", from: "", to: "" });
        }}
        Title="Filters"
      >
        <form
          onSubmit={handleEditFormSubmit}
          className="w-full h-[500px] flex flex-col gap-6 items-center justify-start px-4 sm:px-6 pt-6 overflow-auto"
        >
          <div className="w-full h-[calc(100%-70px)] flex justify-start items-center flex-col gap-4">
            <DropDown
              placeholder="Select One Filter"
              required
              setSelectedOption={(e: { value: string; label: string } | null) =>
                setFilters({ ...filters, filter: e?.value })
              }
              title="Filters"
              dropdownItems={options}
            />

            <TextInput
              type="date"
              state={filters.from}
              name="from"
              title="From Date"
              setState={handleFilterInputs}
            />
            <TextInput
              type="date"
              state={filters.to}
              name="to"
              title="To Date"
              setState={handleFilterInputs}
            />
          </div>
          <div className="w-full h-[70px] flex items-center justify-end gap-4">
            <Button
              text="Cancel"
              event={() => {
                setIsOpen(false);
                setFilters({ filter: "", from: "", to: "" });
              }}
              variation="outlined"
            />
            <Button text="Search" event={() => {}} type="submit" />
          </div>
        </form>
      </DialogueWrapper>
    </div>
  );
};

export default Shipping;
