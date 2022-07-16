import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Divider,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IoLogOutOutline } from "react-icons/io5";
//svg icon
import Doctors from "../icons/DoctorsBlue.svg";
import Laboratory from "../icons/LaboratoryBlue.svg";
import Pharmacy from "../icons/Pharmacy.svg";
import SupportIcon from "../icons/SupportIconBlue.svg";
import VisitsIcon from "../icons/VisitsIconBlue.svg";
import TransactionsIcon from "../icons/TransactionsIconBlue.svg";
import ProfileIcon from "../icons/ProfileIconBlue.svg";
// import DoctorReportIcon from "../icons/DoctorReport.svg";

//navs
const navs = [
  [
    {
      name: "پزشکان",
      link: "/doctors",
      //?
      path: /^\/$/g,
      //?
      icon: (props) => <Doctors {...props} className={`${props.className}`} />,
      className: "hidden md:flex",
    },
    {
      name: "داروخانه‌",
      link: "/pharmacy",
      path: /^\/pharmacy/g,
      icon: (props) => (
        <Pharmacy
          {...props}
          className={`${props.className} w-[2rem] h-[1rem]`}
        />
      ),
      className: "hidden md:flex",
    },
    {
      name: "آزمایشگاه",
      link: "/laboratory",
      path: /^\/laboratory/g,
      icon: Laboratory,
      className: "hidden md:flex",
    },
  ],
  [
    {
      name: "ویزیت‌ها",
      link: "/visits",
      path: /^\/visits/g,
      icon: VisitsIcon,
    },
  ],
  [
    {
      name: "تراکنش‌ها",
      link: "/transactions",
      path: /^\/transactions/g,
      icon: TransactionsIcon,
    },
    {
      name: "  ناحیه کاربری",
      link: "/profile",
      path: /^\/profile/g,
      icon: ProfileIcon,
    },
  ],
  [
    {
      name: " پشتیبانی",
      link: "/support",
      path: /^\/support/g,
      icon: SupportIcon,
    },
  ],
];
function NavigationBar(props) {
  const { isOpen, willClose } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  return (
    <SwipeableDrawer
      anchor={isMobile ? "bottom" : "right"}
      open={isOpen}
      onClose={willClose}
      //?
      variant={isMobile ? "temporary" : "permanent"}
      sx={{
        "& .MuiDrawer-paper": {
          borderLeft: "0",
          [theme.breakpoints.down("md")]: {
            borderTopLeftRadius: "1em",
            borderTopRightRadius: "1em",
            margin: "0 10px",
          },
          [theme.breakpoints.up("md")]: {
            width: "240px",
          },
        },
      }}
    >
      <div className="flex flex-col justify-between py-10 flex-grow border-0 border-l-2 border-solid border-lightgray">
        <div className="flex flex-col">
          {navs.map((navin) => (
            <>
              {navin.map((nav) => (
                <Link key={nav.name} href={nav.link}>
                  {/* ? */}
                  <a
                    className={`flex transition-all items-center justify-start m-3 font-normal text-base py-1 cursor-pointer text-black hover:text-primary no-underline 
              [&>*]:hover:text-primary [&>*>*]:hover:text-primary [&>*>*>*]:hover:text-primary stroke-primary [&>*]:hover:stroke-primary [&>*>*]:hover:stroke-primary [&>*>*>*]:hover:stroke-primary fill-primary [&>*]:hover:fill-primary [&>*>*]:hover:fill-primary [&>*>*>*]:hover:fill-primary 
              ${
                nav.path.test(router.asPath)
                  ? "text-primary [&>*]:text-primary [&>*>*]:text-primary [&>*>*>*]:text-primary stroke-primary [&>*]:stroke-primary [&>*>*]:stroke-primary [&>*>*>*]:stroke-primary fill-primary [&>*]:fill-primary [&>*>*]:fill-primary [&>*>*>*]:fill-primary "
                  : "text-black [&>*]:text-black [&>*>*]:text-black [&>*>*>*]:text-black stroke-black [&>*]:stroke-black [&>*>*]:stroke-black [&>*>*>*]:stroke-black  fill-black [&>*]:fill-black [&>*>*]:fill-black [&>*>*>*]:fill-black "
              } ${nav.className} `}
                  >
                    {nav.path.test(router.asPath)}
                    <nav.icon className="text-xs w-[1rem] h-[1rem]  [&>*]:stroke-[0.3px] stroke-[0.3px] mr-4 ml-2" />
                    {nav.name}
                  </a>
                </Link>
              ))}
              <Divider className="w-[60%] self-center first-of-type:hidden md:first-of-type:flex" />
            </>
          ))}
        </div>
        {/* exit */}
        <Link href="/auth/login">
          <a className="flex flex-row m-1 p-2 text-black no-underline mb-8 md:mb-12">
            <IoLogOutOutline className="m-1 text-danger" />
            {/* <IoLogOutOutline className="m-1 text-danger [&>*]:text-danger [&>*>*]:text-danger [&>*>*>*]:text-danger stroke-danger [&>*]:stroke-danger [&>*>*]:stroke-danger [&>*>*>*]:stroke-danger  " /> */}
            خروج از حساب کاربری
          </a>
        </Link>
      </div>
    </SwipeableDrawer>
  );
}

export default NavigationBar;
