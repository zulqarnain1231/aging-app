"use client";
import React, { useState } from "react";
import TextInput from "@/components/Shared/Inputs/TextInput";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="md:w-[35%] w-full mx-auto flex flex-col gap-4 items-center justify-center bg-white-main shadow-secondary overflow-auto HideScroll p-6 rounded-[8px] font-primary"
      >
        <p className="font-bold text-brand-main text-[24px] mb-2">
          Login
        </p>
        <p className="font-medium text-black-main/60 text-[16px]">
          Please login using your email and password.
        </p>

        <TextInput
          type="email"
          name="email"
          state={inputs.email}
          setState={handleInputs}
          title="Email"
        />
        <TextInput
          type="password"
          name="password"
          state={inputs.password}
          setState={handleInputs}
          title="Password"
        />

        <div className="w-full h-[36px] mt-6">
          <button
            type="submit"
            className="h-full w-full flex items-center justify-center bg-brand-main text-white-main text-[16px] font-primary font-[500] rounded-[8px]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
