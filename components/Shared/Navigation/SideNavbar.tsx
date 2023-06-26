import React from "react";
import Link from "next/link";
import { IoIosListBox } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { MdQueryStats } from "react-icons/md";
import { usePathname } from "next/navigation";

const SideNavbar = () => {
  const pathname = usePathname();

  const Menu = [
    {
      Name: "Home",
      Route: "/",
      Icon: (
        <IoIosListBox
          className={`text-[24px] ${pathname === "/" ? "text-white-main" : "text-black-olive"
            }`}
        />
      ),
    },
    {
      Name: "Update Pick Ticket",
      Route: "/updatePT",
      Icon: (
        <BsTicketPerforatedFill
          className={`text-[24px] ${pathname === "/updatePT"
            ? "text-white-main"
            : "text-black-olive"
            }`}
        />
      ),
    },
    {
      Name: "Update Ticket Runs",
      Route: "/updateTicketRuns",
      Icon: (
        <MdQueryStats
          className={`text-[24px] ${pathname === "/updateTicketRuns"
            ? "text-white-main"
            : "text-black-olive"
            }`}
        />
      ),
    },
    {
      Name: "Report",
      Route: "/report",
      Icon: (
        <HiDocumentReport
          className={`text-[24px] ${pathname === "/report"
            ? "text-white-main"
            : "text-black-olive"
            }`}
        />
      ),
    },
    {
      Name: "Shipping",
      Route: "/shipping",
      Icon: (
        <FaShippingFast
          className={`text-[24px] ${pathname === "/shipping"
            ? "text-white-main"
            : "text-black-olive"
            }`}
        />
      ),
    },
    {
      Name: "Add user",
      Route: "/addUser",
      Icon: (
        <AiOutlineUserAdd
          className={`text-[24px] ${pathname === "/addUser"
            ? "text-white-main"
            : "text-black-olive"
            }`}
        />
      ),
    },
  ];

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-3 bg-white-soft shadow-nav rounded-xl p-4">
      {Menu?.map((menu: any, index: number) => {
        return (
          <Link
            key={index}
            href={menu.Route}
            className={`w-full h-[46px] whitespace-nowrap capitalize px-4 flex justify-start items-center rounded-xl font-primary font-medium text-[16px] hover:text-white-main hover:bg-brand-main leading-[28px] gap-3 navLink ${pathname === menu.Route
              ? "bg-brand-main text-white-main"
              : "text-black-olive"
              } `}
          >
            {menu.Icon}
            {menu.Name}
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavbar;
