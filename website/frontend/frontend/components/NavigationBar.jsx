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

//
const navs = [
  [
    {
      name: "پزشکان",
      link: "/doctors",
      path: /^\/$/g,
      icon: (props) => <Doctors {...props} className={`${props.className}`} />,
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
    },
    {
      name: "آزمایشگاه",
      link: "/laboratory",
      path: /^\/laboratory/g,
      icon: Laboratory,
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

const NavigationBar = (props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between w-full py-10 flex-grow border-0 border-l-2 border-solid border-lightgray">
      <div className="flex flex-col">
      {navs.map((navin) => (
            <>
         
          {navin.map((nav) => (
                <Link key={nav.name} href={nav.link}>
                   <a
                    className={`flex transition-all items-center justify-start m-3 font-normal text-base py-1 cursor-pointer text-black hover:text-primary no-underline 
              [&>*]:hover:text-primary [&>*>*]:hover:text-primary [&>*>*>*]:hover:text-primary stroke-primary [&>*]:hover:stroke-primary [&>*>*]:hover:stroke-primary [&>*>*>*]:hover:stroke-primary fill-primary [&>*]:hover:fill-primary [&>*>*]:hover:fill-primary [&>*>*>*]:hover:fill-primary 
              ${
                nav.path.test(router.asPath)
                  ? "text-primary [&>*]:text-primary [&>*>*]:text-primary [&>*>*>*]:text-primary stroke-primary [&>*]:stroke-primary [&>*>*]:stroke-primary [&>*>*>*]:stroke-primary fill-primary [&>*]:fill-primary [&>*>*]:fill-primary [&>*>*>*]:fill-primary "
                  : "text-black [&>*]:text-black [&>*>*]:text-black [&>*>*>*]:text-black stroke-black [&>*]:stroke-black [&>*>*]:stroke-black [&>*>*>*]:stroke-black  fill-black [&>*]:fill-black [&>*>*]:fill-black [&>*>*>*]:fill-black "
              } `}
                  >
                    {nav.path.test(router.asPath)}
                    <nav.icon className="text-xs w-[1rem] h-[1rem]  [&>*]:stroke-[0.3px] stroke-[0.3px] mr-4 ml-2" />
                    {nav.name}
                  </a>
                </Link>
              ))}
            <Divider className="w-[60%] self-center " />
            </>
          ))}
        
      </div>
      {/* exit */}
      <Link href="/auth/login">
        <a className="flex flex-row m-1 p-2 text-black no-underline mb-12">
        <IoLogOutOutline className="m-1 text-danger "/>
         {/* <IoLogOutOutline className="m-1 text-danger [&>*]:text-danger [&>*>*]:text-danger [&>*>*>*]:text-danger stroke-danger [&>*]:stroke-danger [&>*>*]:stroke-danger [&>*>*>*]:stroke-danger  " /> */}
          خروج از حساب کاربری
        </a>
      </Link>
    </div>
  );
  
};
export default NavigationBar;
