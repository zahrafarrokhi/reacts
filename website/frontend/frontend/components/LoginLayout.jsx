//imrc
import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

//sfc
const LoginLayout = (props) => {
  const { children, backlink } = props;
  
  return (
    // flex flex-col w(center) => items-center
    // flex flex-col h(center) => justify-center dosent work then => h-full justify-center
    //min-h-screen	=> min-height: 100vh;
    //overflow-y-auto overflow-x-hidden
    //bg-background
    <div className="flex flex-col items-center  h-full justify-center min-h-screen  overflow-y-auto overflow-x-hidden bg-background  ">
      {/* // flex flex-col  w-[80%] h-[33rem] or h-auto desktop=> relative, mobile=> absoulte*/}

      <div className="flex flex-col w-[80%] h-[33rem]  bg-white drop-shadow-lg rounded-[16px] border-[#f4f5f8] absolute top-[15%] left-[5%] right-[5%] md:relative md:top-[0] md:left-0 md:right-0">
        {/* absolute mobile =>  top-[10px] left-[10px], desktop => md:top-[20px] md:left-[20px] */}
        <ArrowBackRoundedIcon
          className={backlink ? "text-[18px] md:text-[20px] fill-darkgray  absolute  top-[10px] left-[10px] md:top-[20px] md:left-[20px]" : "hidden"}
          onClick={() =>{}}
        />
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
