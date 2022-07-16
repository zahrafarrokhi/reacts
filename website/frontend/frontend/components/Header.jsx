import React, { useState, useRef } from "react";
import { CgMenuGridR } from "react-icons/cg";
import NotificationComponent from "./NotificationComponent";
import PatientSelection from "./PatientSelection";
import MainIcon from "../icons/main-icon-big.svg";

const Header = (props) => {
  const { openNavBar } = props;
  return (
    //style
    //justify-between md:justify-start
    <nav
<<<<<<< HEAD
      className={`flex flex-row-reverse items-center justify-between md:justify-start h-[65px] p-1 md:pl-20 md:h-[70px] border-0 border-b border-solid border-lightgray`}    >
      {/* PatientSelection => mobile and desktop*/}
      <PatientSelection className={``} />
      {/* mobile */}
=======
    className={`flex flex-row-reverse items-center justify-between md:justify-start h-[65px] p-1 md:pl-20 md:h-[70px] border-0 border-b border-solid border-lightgray`}    >
      <PatientSelection className={``} />
>>>>>>> d10a94c9be6a7b4c6dc1b7d2161f7b62b910066b
      <div className={`flex md:hidden  `}>
        <MainIcon
          alt="کینیک غدد"
          className="w-[7rem] m-1 md:justify-self-center md:self-center "
        />
      </div>
      <div
        className={`flex flex-row items-center justify-center mr-0 md:mr-[1em]`}
      >
        <div>
<<<<<<< HEAD
          {/* mobile */}
=======
>>>>>>> d10a94c9be6a7b4c6dc1b7d2161f7b62b910066b
          {" "}
          <CgMenuGridR
            className={`flex md:hidden w-[1.5rem] h-[1.5rem] m-1`}
            onClick={openNavBar}
          />
        </div>

        <div>
<<<<<<< HEAD
          {/* NotificationComponent => mobile and desktop*/}
=======
>>>>>>> d10a94c9be6a7b4c6dc1b7d2161f7b62b910066b
          {" "}
          <NotificationComponent />
        </div>
      </div>
    </nav>
  );
};
export default Header;
