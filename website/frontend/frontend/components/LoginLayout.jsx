//imrc
import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useRouter } from "next/dist/client/router";

//sfc
const LoginLayout = (props) => {
  const { children, backlink } = props;
  const router = useRouter();
  return (
    // flex flex-col w(center) => items-center
    // flex flex-col h(center) => justify-center dosent work then => h-full justify-center
    //min-h-screen	=> min-height: 100vh;
    //overflow-y-auto overflow-x-hidden
    //bg-background

    
    <div className="flex flex-col items-center  h-full justify-center min-h-screen  overflow-y-auto overflow-x-hidden bg-background  w-full fixed">
      {/* // flex flex-col  w-[80%] h-[33rem] or h-auto desktop=> relative, mobile=> absoulte*/}
      
      <div className="flex flex-col  h-auto md:max-w-[65%] md:w-full bg-white drop-shadow-lg 
       md:rounded-b-[16px] rounded-[16px] border-[#f4f5f8] absolute top-[17%] left-[5%]
      right-[5%] md:relative md:top-[0] md:left-0 md:right-0">
        {/* absolute mobile =>  top-[10px] left-[10px], desktop =>md:top-[20px] md:left-[20px] */}
        <ArrowBackRoundedIcon
          className={
            backlink
              ? "text-[18px] md:text-[20px] fill-darkgray  absolute  top-[10px] left-[10px] md:top-[20px] md:left-[20px]"
              : "hidden"
          }
          onClick={() => router.back()}
        />
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
