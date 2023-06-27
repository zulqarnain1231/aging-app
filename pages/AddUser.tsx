"use client";
import React, { Fragment, useState } from "react";
import TextInput from "@/components/Shared/Inputs/TextInput";
import DropDown from "@/components/Shared/DropDown/DropDown";
import { IAddUser, IUpdateUser } from "@/types/types";
import Button from "@/components/Shared/Buttons/Button";
import Grid from "@/components/Shared/Grid/Grid";
import RecentUserRow from "@/components/AddUser/RecentUserRow";
import DialogueWrapper from "@/components/Shared/Dialogue/DialogueWrapper";
type Props = {};

const AddUser = (props: Props) => {
  const [inputs, setInputs] = useState<IAddUser>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    search: "",
  });
  const [updateUserInputs, setUpdateUserInputs] = useState<IUpdateUser>({
    firstName: "jhon",
    lastName: "akan",
    email: "user123@gmail.com",
    phone: "+92344323434",
    role: "Supervisor",
    password: "12345",
  });

  const [isOpen, setIsOpen] = useState(false);
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleUpdateInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateUserInputs({ ...updateUserInputs, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleUpdateFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };
  const roles = [
    { label: "Puller", value: "puller" },
    { label: "Packer", value: "packer" },
    { label: "Shortage clerk", value: "shortage_clerk" },
    { label: "Sander Commander", value: "sander_commander" },
    { label: "Team Lead", value: "team_lead" },
    { label: "Supervisor", value: "supervisor" },
    { label: "Shipping Clerk", value: "shipping_clerk" },
    { label: "Shipping Liaison", value: "shipping_liaison" },
    { label: "Manager", value: "manager" },
    { label: "Editor", value: "Editor" },
  ];

  const users = [
    {
      id: 1,
      email: "user123@gmail.com",
      firstName: "jhon",
      phoneNo: "+92344323434",
      role: "Supervisor",
    },
    {
      id: 2,
      email: "user123@gmail.com",
      firstName: "jhon",
      phoneNo: "+92344323434",
      role: "Supervisor",
    },
    {
      id: 3,
      email: "user123@gmail.com",
      firstName: "jhon",
      phoneNo: "+92344323434",
      role: "Supervisor",
    },
  ];
  return (
    <Fragment>
      <div className="w-full h-full flex flex-col gap-8 items-center justify-start">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-6 items-center justify-start bg-white-main border-[1px] rounded-[8px] shadow-secondary md:p-6 p-4"
        >
          <p className="font-secondary font-semibold text-black-main text-[20px]">
            Add New User
          </p>
          <div className="w-full grid md:grid-cols-2 gap-4 mb-8">
            <TextInput
              name="firstName"
              type="text"
              title="First Name:"
              state={inputs.firstName}
              setState={handleInputs}
              required
            />
            <TextInput
              name="lastName"
              type="text"
              title="Last Name:"
              state={inputs.lastName}
              setState={handleInputs}
              required
            />
            <DropDown
              placeholder="Select User Role"
              required
              setSelectedOption={(e: { value: string; label: string } | null) =>
                setInputs({ ...inputs, role: e?.value })
              }
              title="Select User Role"
              dropdownItems={roles}
            />
            <TextInput
              name="phone"
              type="tel"
              title="Phone No:"
              state={inputs.phone}
              required
              setState={handleInputs}
            />
            <TextInput
              name="email"
              type="email"
              title="Email:"
              state={inputs.email}
              required
              setState={handleInputs}
            />

            <TextInput
              name="password"
              type="password"
              title="Password :"
              state={inputs.password}
              setState={handleInputs}
              required
            />
            <div className="w-full flex items-center justify-start h-[50px]">
              <Button
                type="submit"
                text="Add"
                event={() => {}}
                style="h-[34px] md:w-[100px] w-full text-[16px]"
              />
            </div>
          </div>
        </form>
        <Grid
          Title="Recent Users"
          Search={inputs.search}
          SetSearch={handleInputs}
          GridCols="grid-cols-[1.5fr,1.5fr,1.5fr,1fr,1fr]"
          TableHeaders={["First Name", "Email", "Role", "Phone No", ""]}
        >
          {users.map((item: any, index: number) => (
            <RecentUserRow
              key={index}
              firstName={item.firstName}
              email={item.email}
              role={item.role}
              phoneNo={item.phoneNo}
              onEdit={() => setIsOpen(true)}
            />
          ))}
        </Grid>
      </div>

      <DialogueWrapper
        Open={isOpen}
        CloseEvent={() => setIsOpen(false)}
        Title="Filters"
      >
        <form
          onSubmit={handleUpdateFormSubmit}
          className="w-full h-[500px] px-4 sm:px-6 pt-6 "
        >
          {/* <div className="w-full h-[calc(100%-70px)] flex justify-start items-center flex-col gap-4 overflow-auto">
            <TextInput
              name="firstName"
              type="text"
              title="First Name:"
              state={updateUserInputs.firstName}
              setState={handleUpdateInputs}
              required
            />
            <TextInput
              name="lastName"
              type="text"
              title="Last Name:"
              state={updateUserInputs.lastName}
              setState={handleUpdateInputs}
              required
            />
            <DropDown
              placeholder="Select Role"
              required
              setSelectedOption={(e: { value: string; label: string } | null) =>
                setUpdateUserInputs({ ...updateUserInputs, role: e?.value })
              }
              title="Role"
              dropdownItems={roles}
            />
            <TextInput
              name="phone"
              type="tel"
              title="Phone No:"
              state={updateUserInputs.phone}
              required
              setState={handleUpdateInputs}
            />
            <TextInput
              name="email"
              type="email"
              title="Email:"
              state={updateUserInputs.email}
              required
              setState={handleUpdateInputs}
            />

            <TextInput
              name="password"
              type="password"
              title="Password :"
              state={updateUserInputs.password}
              setState={handleUpdateInputs}
              required
            />
          </div> */}
          <div className="w-full h-[200px] bg-['url(/vercel.svg)']">
            <p>Hello world</p>
          </div>
          <div className="w-full h-[70px] flex items-center justify-end gap-4">
            <Button
              text="Cancel"
              event={() => setIsOpen(false)}
              variation="outlined"
            />
            <Button text="Update" event={() => {}} type="submit" />
          </div>
        </form>
      </DialogueWrapper>
    </Fragment>
  );
};

export default AddUser;
