import React, { useState } from "react";
import LoginLayout from "../../components/LoginLayout";
import { useTheme } from "@mui/material/styles";
import { persianToEnglishDigits, preventLettersTyping } from "../../lib/utils";

import {
  TextField,
  Button,
  InputLabel,
  FormHelperText,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const Login = (props) => {
  // ToggleButtonGroup,ToggleButton,InputLabel
  const [state, setState] = useState("email");
  // TextField
  const [value, setValue] = useState();
  const theme = useTheme();

  const submit = async () => {};
  const handleSubmitWithEnter = (e) => {
    if (e.key === "Enter") submit();
  };
  return (
    <div className="flex flex-col items-center justify-around py-12 h-full">
      <div className="flex items-center justify-center">
        <ToggleButtonGroup
          variant="contained"
          // color="primary"
          color="secondary"
          className="transition-all duration-300		"
          // color={state === "phonenumber" ? "primary" : "danger"}
          sx={{
            width: "240px",
            // height: "auto",
            // padding: "5px",
            display: "flex",
            border: `1px solid ${theme.palette.secondary.main}`,
            // backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
            borderRadius: "10px",
            overflow: "hidden",
            // borderColor: theme.palette.secondary.main,
            [theme.breakpoints.up("md")]: {
              width: " 327px",
              // height: "50px",
              padding: "0px",
            },
            "& .Mui-selected": {
              backgroundColor: "rgba(133, 143, 173, 0.4) !important",
              color: "white !important",
            },
            "& > *:first-child": {
              // marginRight: "-1px",
            },
            "& > *:last-child": {
              // marginLeft: "-1px",
            },
          }}
          exclusive
          // onChange={(e) => setState(e.target.value)}
          onChange={(e, val) => val && setState(val)}
          value={state}
        >
          <ToggleButton
            // color="danger"
            className="transition-all duration-300		"
            sx={{
              flex: "1 0 45%",
              borderRadius: "10px !important",
              borderWidth: "0px !important",
              fontSize: "15px",
            }}
            //  onChange={() => ({})}
            value={"phonenumber"}
          >
            تلفن همراه
          </ToggleButton>
          <ToggleButton
            className="transition-all duration-300		"
            sx={{
              flex: "1 0 45%",
              borderRadius: "10px !important",
              borderWidth: "0px !important",
              fontSize: "15px",
            }}
            //  onChange={() => ({})}
            value={"email"}
          >
            ایمیل
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="flex flex-row justify-around ">
        <div className="flex flex-col items-center py-3  w-full ">
          <div className="items-right">
            <InputLabel
              htmlFor="loginInput"
              sx={
                {
                  // fontSize: "15",
                  // color: theme.palette.textBlack.main,
                }
              }
            >
              {state === "phonenumber" ? "تلفن همراه" : "ایمیل"}
            </InputLabel>
            <TextField
              dir="ltr"
              required
              id="loginInput"
              autoFocus
              className="w-full sm:w-auto"
              // error={err}
              variant="outlined"
              value={value}
              // onChange={(e) => setValue(e.target.value)}
              onChange={() =>
                setValue(
                  state === "phonenumber"
                    ? preventLettersTyping(
                        persianToEnglishDigits(e.target.value)
                      )
                    : e.target.value
                )
              }
              inputProps={{
                maxLength: state === "phonenumber" ? 11 : undefined,
                inputMode: state === "phonenumber" ? "numeric" : "email",
              }}
              inputMode={state === "phonenumber" ? "numeric" : "email"}
              placeholder={
                state === "phonenumber" ? "09*********" : "email@example.com"
              }
              onKeyDown={(e) => handleSubmitWithEnter(e)}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* btn */}
      <div className="w-full sm:w-auto">
        <Button
          variant="contained"
          className="w-full sm:w-auto py-3 px-18 sm:px-32"
          onClick={() => handleSubmit()}
        >
          مرحله بعد
        </Button>
      </div>
      {/* <div className="flex flex-col pb-12 ">
        <Button
          variant="contained"
          className="w-[240px] md:w-[400px] h-[3.5em] rounded-[10px] p-3 text-lg "
          color="primary"
          onClick={submit}
        >
          مرحله‌ بعد
        </Button>
      </div> */}
    </div>
  );
};

// layout without return
Login.getLayout = (page) => (
  <LoginLayout backlink={false}>{page}</LoginLayout>
  // or
  // <LoginLayout  >{page}</LoginLayout>
);

export default Login;
