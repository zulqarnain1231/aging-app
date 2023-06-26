"use client";
import React, { useState } from "react";
import Grid from "@/components/Shared/Grid/Grid";
import DialogueWrapper from "@/components/Shared/Dialogue/DialogueWrapper";
import TextInput from "@/components/Shared/Inputs/TextInput";
import TicketRow from "@/components/UpdatePickTicket/TicketRow";
import Button from "@/components/Shared/Buttons/Button";
import DropDown from "@/components/Shared/DropDown/DropDown";
import { IEditPickedTicket } from "@/types/types";
import Static from "../constants/Data/Static.json";
type Props = {};

const UpdatePickTicket = (props: Props) => {
  const { tickets } = Static;
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const [editedTikcet, setEditedTicket] = useState<IEditPickedTicket>({
    laminart: "",
    additionalComment: "",
    cts: "",
    wareHouse: 0,
    status: "",
    Inv: "",
    run: "",
  });
  const handleEditTicketInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedTicket({ ...editedTikcet, [name]: value });
  };

  const statuses = [
    { label: "8n80", value: "8n80" },
    { label: "Sanders", value: "Sanders" },
    { label: "Turned in", value: "Turned in" },
    { label: "QTY Shipped", value: "QTY Shipped" },
    { label: "Shipped", value: "Shipped" },
    { label: "Fedex", value: "Fedex" },
    { label: "Packed", value: "Packed" },
    { label: "Invoiced", value: "Invoiced" },
  ];

  return (
    <div className="w-full h-full">
      <Grid
        Title="Pick Tickets"
        Search={search}
        SetSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        GridCols="grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr]"
        TableHeaders={[
          "PT#",
          "LINE",
          "QTY",
          "PATT",
          "TYPE",
          "FIN",
          "WID",
          "LENG",
          "ID",
          "",
        ]}
      >
        {tickets.map((item: any, index: number) => (
          <TicketRow
            key={index}
            pt={item.pt}
            id={item.id}
            fin={item.fin}
            patt={item.patt}
            qty={item.qty}
            leng={item.leng}
            wid={item.wid}
            line={item.line}
            type={item.type}
            onEdit={() => setIsOpen(true)}
          />
        ))}
      </Grid>
      <DialogueWrapper
        Open={isOpen}
        CloseEvent={() => setIsOpen(false)}
        Title="Edit Record"
      >
        <form
          onSubmit={handleEditFormSubmit}
          className="w-full h-[500px] flex flex-col gap-6 items-center justify-start px-4 sm:px-6 pt-6 overflow-auto"
        >
          <div className="w-full h-[calc(100%-70px)] flex justify-start items-center flex-col gap-4">
            <DropDown
              placeholder="Select Status"
              required
              setSelectedOption={(e: { value: string; label: string } | null) =>
                setEditedTicket({ ...editedTikcet, status: e?.value })
              }
              title="Status"
              dropdownItems={statuses}
            />
            {editedTikcet.status == "8n80" && (
              <TextInput
                name="Inv"
                state={editedTikcet.Inv}
                title="Inv/Adj"
                setState={handleEditTicketInputs}
                required
                type="text"
              />
            )}
            {editedTikcet.status == "Sanders" && (
              <TextInput
                name="run"
                state={editedTikcet.run}
                title="Run#"
                setState={handleEditTicketInputs}
                required
                type="text"
              />
            )}

            <div className="w-full flex flex-col gap-2 jsutify-start">
              <label
                htmlFor="Additional-comment"
                className="font-primary font-semibold text-black-main text-[16px]"
              >
                Additional Comment
              </label>
              <textarea
                id="Additional-comment"
                className="w-full max-h-[100px] min-h-[100px] font-inter font-[500] text-black-main text-[14px] bg-gray-50 border disabled:cursor-not-allowed disabled:bg-gray-300 rounded-lg focus:outline-none focus:ring-brand-main focus:border-brand-main p-2.5"
                value={editedTikcet.additionalComment}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setEditedTicket({
                    ...editedTikcet,
                    additionalComment: e.target.value,
                  })
                }
                placeholder="Add Additional Comments Here"
                cols={30}
                rows={5}
                required
              />
            </div>
          </div>
          <div className="w-full h-[70px] flex items-center justify-end gap-4">
            <Button
              text="Cancel"
              event={() => setIsOpen(false)}
              variation="outlined"
            />
            <Button text="Edit" event={() => {}} type="submit" />
          </div>
        </form>
      </DialogueWrapper>
    </div>
  );
};

export default UpdatePickTicket;
