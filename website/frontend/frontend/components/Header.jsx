import React, { useState, useRef } from "react";
import { CgMenuGridR } from "react-icons/cg";
import NotificationComponent from "./NotificationComponent";
import PatientSelection from "./PatientSelection";

const Header = (props) => {
  const { openNavBar } = props;
  return (
    <nav
      className={`flex flex-row-reverse items-center  h-[65px] p-1 md:pl-20 md:h-[70px] border-0 border-b border-solid border-lightgray`}
    >
      <PatientSelection />
      <div className="flex md:hidden ">
        {/* <MainIcon alt="کینیک غدد" className='md:justify-self-center md:self-center ' /> */}
      </div>
      <div className="d-flex flex-row mr-0 md:mr-[1em]">
        <NotificationComponent />
        <CgMenuGridR className="flex md:hidden " onClick={openNavBar} />
      </div>
    </nav>
  );
};
export default Header;
