// import Link from "next/link";

// const DepartmentTabBar = (props) => {
//   const { departments, containerClassName } = props;
//   return (
//     <div className="flex  flex-col w-full">
//       {/* ? overflow-x-auto md:overflow-x-visible*/}
//       <div className="flex overflow-x-auto md:overflow-x-visible border-0 border-b border-solid border-backgroundGray  ">
//         {departments?.map((department) => (
//           // ?
//           <Link href={`/${department.link}`} key={department.id}>
//             <a className=" h-[4.4rem] px-4 no-underline cursor-pointer flex flex-col justify-evenly items-center   mx-2 p-0 rounded-lg bg-backgroundGray text-textGray hover:text-primary border-2 hover:font-bold border-solid border-backgroundGray hover:border-primary hover:bg-backgroundPrimary md:hover:bg-white md:bg-white md:rounded-none md:bg-none md:mx-1 md:first:mr-0 md:last:ml-0 md:border-0 md:border-b md:hover:font-normal  md:hover:text-textDarkBlue md:border-b-backgroundGray md:text-textGray">
//               <div className="">{department.name}</div>
//               <img src={department.icon} className="w-4 h-4 md:hidden" />
//             </a>
//           </Link>
//         ))}
//       </div>
//       <hr className="hidden md:flex md:border-0 md:border-b-[1px] md:border-b-backgroundGray " />
//     </div>
//   );
// };

// export default DepartmentTabBar;

//npm install @mui/lab

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PhoneIcon from "@mui/icons-material/Phone";
//
import { useTheme } from "@mui/material/styles";

export default function DepartmentTabBar(props) {
  const { departments, containerClassName } = props;
  const [value, setValue] = React.useState("1");
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            [theme.breakpoints.down("md")]: {
              margin: "0.5em",
              padding: "1em",
            },
          }}
        >
          <TabList
            sx={{
              [theme.breakpoints.down("md")]: {
                "& .MuiTabs-flexContainer": {
                  display: "flex",
                  gap: "0.5em",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "transparent",
                  borderRadius: "4px",
                  border: `2px solid ${theme.palette.primary.main}`,
                  height: "calc(4em + 9px)",
                  width: "110px !important",
                  transform: "translateX(-2px)",
                  // bottom: "3px",

                  // margin: "auto 0",
                },
                "& .Mui-selected": {
                  // height: "4rem",
                  // backgroundColor: "red",
                  // paddingX: "auto",
                },
              },
            }}
            scrollButtons={false}
            variant="scrollable"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab
              sx={{
                [theme.breakpoints.down("md")]: {
                  backgroundColor: theme.palette.lightgray.main,
                  margin: "0 0",
                  width: "110px",
                  borderRadius: "4px",
                  // border: "1px solid #eeee",
                  height: "4em",
                  margin: "3px",
                  // padding: "4px",
                },
              }}
              icon={<PhoneIcon className="md:hidden h-4 m-4" />}
              iconPosition="bottom"
              label={"???????????? ?????? "}
              value="1"
            />
            <Tab
              sx={{
                [theme.breakpoints.down("md")]: {
                  backgroundColor: theme.palette.lightgray.main,
                  margin: "0 0",
                  width: "110px",
                  borderRadius: "4px",
                  // border: "1px solid #eeee",
                  height: "4em",
                  margin: "3px",
                  // padding: "4px",
                },
              }}
              icon={<PhoneIcon className="md:hidden h-4 m-4" />}
              iconPosition="bottom"
              label={"???????????? ??????"}
              value="2"
            />
            <Tab
              sx={{
                [theme.breakpoints.down("md")]: {
                  backgroundColor: theme.palette.lightgray.main,
                  margin: "0 0",
                  width: "110px",
                  borderRadius: "4px",
                  // border: "1px solid #eeee",
                  height: "4em",
                  margin: "3px",
                  // padding: "4px",
                },
              }}
              icon={<PhoneIcon className="md:hidden h-4 m-4" />}
              iconPosition="bottom"
              label={"???????????? ??????"}
              value="3"
            />
            <Tab
              sx={{
                [theme.breakpoints.down("md")]: {
                  backgroundColor: theme.palette.lightgray.main,
                  margin: "0 0",
                  width: "110px",
                  borderRadius: "4px",
                  // border: "1px solid #eeee",
                  height: "4em",
                  margin: "3px",
                  // padding: "4px",
                },
              }}
              icon={<PhoneIcon className="md:hidden h-4 m-4" />}
              iconPosition="bottom"
              label={" ???????????? ?????????? "}
              value="4"
            />
          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}
