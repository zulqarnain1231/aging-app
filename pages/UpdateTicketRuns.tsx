"use client";
import React, { useState } from "react";
import Grid from "@/components/Shared/Grid/Grid";
import DialogueWrapper from "@/components/Shared/Dialogue/DialogueWrapper";
import TextInput from "@/components/Shared/Inputs/TextInput";
import Button from "@/components/Shared/Buttons/Button";
import RadioButtonGroup from "@/components/Shared/Buttons/RadioButtonGroup";
import Static from "../constants/Data/Static.json";
import TicketRunsRow from "@/components/UpdateTicketRuns/TicketRunsRow";
type Props = {};

const UpdateTicketRuns = (props: Props) => {
  const { tickets } = Static;
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const [editedTicket, setEditedTicket] = useState({
    ticketId: "#123w12",
    ticketAddress: "7th Aveneue Las Angeles,USA",
    ticketDate: "22-3-23",
    status: "",
    sandersRun: "",
    n80Run: "",
  });
  const handleEditTicketInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedTicket({ ...editedTicket, [name]: value });
  };

  return (
    <div className="w-full h-full">
      <Grid
        Title="Ticket Runs"
        Search={search}
        SetSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        GridCols="grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1.5fr,1fr,1fr,1fr,1fr,1fr,1fr]"
        TableHeaders={[
          "PT#",
          "BO#",
          "LINE",
          "QTY",
          "ORD",
          "PATT",
          "ORA PATT",
          "TYPE",
          "FIN",
          "WID",
          "LENG",
          "ID",
          "",
        ]}
      >
        {tickets.map((item: any, index: number) => (
          <TicketRunsRow
            key={index}
            pt={item.pt}
            bo={item.bo}
            id={item.id}
            fin={item.fin}
            ord={item.ord}
            patt={item.patt}
            oraPatt={item.oraPatt}
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

            <div className="w-full flex items-center justify-start">
              <RadioButtonGroup
                firstOption={{ label: "8n80", value: "8n80" }}
                secondOption={{ label: "Sanders", value: "Sanders" }}
                value={editedTicket.status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEditedTicket({
                    ...editedTicket,
                    status: (e.target as HTMLInputElement).value,
                  });
                }}
              />
            </div>
            {editedTicket.status == "Sanders" && (
              <TextInput
                name="sandersRun"
                state={editedTicket.sandersRun}
                title="Run#(Sanders)"
                setState={handleEditTicketInputs}
                required
                type="text"
              />
            )}
            {editedTicket.status == "8n80" && (
              <TextInput
                name="n80Run"
                state={editedTicket.n80Run}
                title="Run#(8n80)"
                setState={handleEditTicketInputs}
                required
                type="text"
              />
            )}
          </div>
          <div className="w-full h-[70px] flex items-center justify-end gap-4">
            <Button
              text="Cancel"
              event={() => setIsOpen(false)}
              variation="outlined"
            />
            <Button text="Edit" event={() => { }} type="submit" />
          </div>
        </form>
      </DialogueWrapper>
    </div>
  );
};

export default UpdateTicketRuns;
