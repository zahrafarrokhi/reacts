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
    <div className="flex flex-col items-center justify-center  relative -top-[10px] h-full">
      <div className="flex align-items-center justify-content-center ">
        <ToggleButtonGroup
          variant="outlined"
          color="secondary"
          sx={{
            width: "240px",
            height: "40px",
            padding: "5px",
            display: "flex",
            borderWidth: "1px",
            borderStyle: "solid",
            bordderColor: "gray",
            // backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
            borderRadius: "10px",
            overflow: "hidden",
            // borderColor: theme.palette.secondary.main,
            [theme.breakpoints.up("md")]: {
              width: " 327px",
              height: "50px",
              padding: "5px",
            },
          }}
          onChange={(e) => setState(e.target.value)}
          value={state}
        >
          <ToggleButton
            sx={{
              flex: "1 0 45%",
              borderRadius: "10px",
              borderWidth: 0,
              fontSize: "20px",
              padding: "20px",
            }}
            //  onChange={() => ({})}
            value={"phonenumber"}
          >
            تلفن همراه
          </ToggleButton>
          <ToggleButton
            sx={{
              flex: "1 0 45%",
              borderRadius: "10px",
              borderWidth: 0,
              fontSize: "20px",
              padding: "20px",
              // borderTopWidth: "10px",
              // borderBottomWidth: "10px",
            }}
            //  onChange={() => ({})}
            value={"email"}
          >
            ایمیل
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="flex flex-row justify-around my-[80px]">
        <div className="flex flex-col items-center py-5  w-full ">
          <div className="items-right">
            <InputLabel
              htmlFor="loginInput"
              sx={{
                fontSize: "18px",
                // color: theme.palette.textBlack.main,
              }}
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
      <div className="flex flex-col mb-[20px] ">
        <Button
          variant="contained"
          className="w-[240px] md:w-[400px] h-[3.5em] rounded-[10px] p-3 text-lg "
          color="primary"
          onClick={submit}
        >
          مرحله‌ بعد
        </Button>
      </div>
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
