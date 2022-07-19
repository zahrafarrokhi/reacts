import { useRouter } from "next/router";
import Link from "next/link";
import Doctors from "../../icons/DoctorsBlue.svg";
import Laboratory from "../../icons/LaboratoryBlue.svg";
import VisitsIcon from "../../icons/VisitsIconBlue.svg";

//style
//md:hidden  justify-between fixed bottom-[30px] left-[5%] right-[5%] h-[60px]
//a => basis-[50%]
function MobileFooter() {
  const router = useRouter();
  return (
    <div className="flex md:hidden flex-row justify-between fixed bottom-[30px] rounded-full  left-[5%] right-[5%] h-[60px] bg-backgroundGray">
      <Link href="/doctors">
        <a
          className={`flex flex-col basis-[50%] font-normal text-base no-underline cursor-pointer text-black justify-center items-center  [&>*]:hover:text-primary [&>*>*]:hover:text-primary [&>*>*>*]:hover:text-primary stroke-primary [&>*]:hover:stroke-primary [&>*>*]:hover:stroke-primary [&>*>*>*]:hover:stroke-primary fill-primary [&>*]:hover:fill-primary [&>*>*]:hover:fill-primary [&>*>*>*]:hover:fill-primary 
              ${
                /^\/$/g.test(router.asPath)
                  ? "text-primary [&>*]:text-primary [&>*>*]:text-primary [&>*>*>*]:text-primary stroke-primary [&>*]:stroke-primary [&>*>*]:stroke-primary [&>*>*>*]:stroke-primary fill-primary [&>*]:fill-primary [&>*>*]:fill-primary [&>*>*>*]:fill-primary "
                  : "text-black [&>*]:text-black [&>*>*]:text-black [&>*>*>*]:text-black stroke-black [&>*]:stroke-black [&>*>*]:stroke-black [&>*>*>*]:stroke-black  fill-black [&>*]:fill-black [&>*>*]:fill-black [&>*>*>*]:fill-black "
              }`}
        >
          <Doctors className="w-[2rem] h-[2rem] text-[1rem] stroke-[0.1] " />
          پزشکان
        </a>
      </Link>
      <Link href="/visits">
        <a
          className={`flex flex-col basis-[50%] font-normal text-base no-underline cursor-pointer text-black justify-center items-center  [&>*]:hover:text-primary [&>*>*]:hover:text-primary [&>*>*>*]:hover:text-primary stroke-primary [&>*]:hover:stroke-primary [&>*>*]:hover:stroke-primary [&>*>*>*]:hover:stroke-primary fill-primary [&>*]:hover:fill-primary [&>*>*]:hover:fill-primary [&>*>*>*]:hover:fill-primary 
              ${
                /^\/visits$/g.test(router.asPath)
                  ? "text-primary [&>*]:text-primary [&>*>*]:text-primary [&>*>*>*]:text-primary stroke-primary [&>*]:stroke-primary [&>*>*]:stroke-primary [&>*>*>*]:stroke-primary fill-primary [&>*]:fill-primary [&>*>*]:fill-primary [&>*>*>*]:fill-primary "
                  : "text-black [&>*]:text-black [&>*>*]:text-black [&>*>*>*]:text-black stroke-black [&>*]:stroke-black [&>*>*]:stroke-black [&>*>*>*]:stroke-black  fill-black [&>*]:fill-black [&>*>*]:fill-black [&>*>*>*]:fill-black "
              }`}
        >
          <VisitsIcon className="w-[2rem] h-[2rem] text-[1rem] stroke-[0.1] " />
          ویزیت‌ها
        </a>
      </Link>
      <Link href="/laboratory">
        <a
          className={`flex flex-col basis-[50%] font-normal text-base no-underline cursor-pointer text-black justify-center items-center  [&>*]:hover:text-primary [&>*>*]:hover:text-primary [&>*>*>*]:hover:text-primary stroke-primary [&>*]:hover:stroke-primary [&>*>*]:hover:stroke-primary [&>*>*>*]:hover:stroke-primary fill-primary [&>*]:hover:fill-primary [&>*>*]:hover:fill-primary [&>*>*>*]:hover:fill-primary 
              ${
                /^\/laboratory$/g.test(router.asPath)
                  ? "text-primary [&>*]:text-primary [&>*>*]:text-primary [&>*>*>*]:text-primary stroke-primary [&>*]:stroke-primary [&>*>*]:stroke-primary [&>*>*>*]:stroke-primary fill-primary [&>*]:fill-primary [&>*>*]:fill-primary [&>*>*>*]:fill-primary "
                  : "text-black [&>*]:text-black [&>*>*]:text-black [&>*>*>*]:text-black stroke-black [&>*]:stroke-black [&>*>*]:stroke-black [&>*>*>*]:stroke-black  fill-black [&>*]:fill-black [&>*>*]:fill-black [&>*>*>*]:fill-black "
              }`}
        >
          <Laboratory className="w-[2rem] h-[2rem] text-[1rem] stroke-[0.1]" />
          داروخانه‌
        </a>
      </Link>
    </div>
  );
}

export default MobileFooter;
