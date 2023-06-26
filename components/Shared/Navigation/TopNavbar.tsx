import Link from "next/link";
import React, { Fragment, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { IoIosListBox } from "react-icons/io";
import { MdQueryStats } from "react-icons/md";

const TopNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
    <Fragment>
      <div className="w-full  h-[70px] flex items-center justify-between  px-4 md:px-10 bg-brand-main">
        <p className="font-secondary text-white-main font-bold text-[18px]" >
          Logo here ...
        </p>


        <button
          className="h-[30px] w-[30px] md:hidden inline-block text-white-main"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <AiOutlineMenu className="text-[30px]" />
        </button>
        <div className="md:flex hidden  items-center gap-3">
          <Fragment>
            <Link
              className="h-[40px] w-[90px] flex items-center justify-center border-[2px] border-white-main font-primary font-bold text-[14px] text-white-main rounded-lg"
              href={"/login"}
            >
              Login
            </Link>
           
          </Fragment>
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{ width: "100%" }}
      >
        <div className="w-full h-full px-4">
          <div className="w-[50px] h-[40px] flex items-center justify-end py-4">
            <RxCross1
              onClick={toggleDrawer}
              size={36}
              className="text-brand-main bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5  items-center"
            />
          </div>

          <div className="w-full h-[calc(100%-40px)] flex justify-start items-center flex-col gap-5 bg-white-main my-4">
            {Menu?.map((menu: any, index: number) => {
              return (
                <Link
                  key={index}
                  onClick={toggleDrawer}
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
            <div className="w-full flex items-center justify-start gap-3">
              <Fragment>
                <Link
                  className="h-[40px] w-[120px] flex items-center justify-center border-[2px] border-brand-main bg-brand-main font-primary font-medium text-[15px] text-white-main rounded-lg"
                  href={"/login"}
                >
                  Login
                </Link>
               
              </Fragment>
            </div>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
};

export default TopNavbar;
