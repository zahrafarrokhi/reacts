import React, { useState, useEffect, useRef } from 'react';
import LoginLayout from "../../components/LoginLayout";
import { useTheme } from "@mui/material/styles";
import { persianToEnglishDigits, preventLettersTyping } from "../../lib/utils";

import {
  TextField,
  Button,
  InputLabel,
  FormHelperText,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { useMemo } from "react";
//redux
import { useDispatch, useSelector } from 'react-redux';
import { Router } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { requestEmailOTP, requestMobileOTP } from '../../lib/slices/auth';


const Login = (props) => {
  // ToggleButtonGroup,ToggleButton,InputLabel
  const [state, setState] = useState("email");
  // TextField
  const [value, setValue] = useState();
  const theme = useTheme();
  //error

  const validationError = useMemo(() => {
    if (!value)return false
    if (state === "phonenumber") {
      return !/^09\d{9}$/g.test(value);
    } else {
      return !/^\w+@\w+.\w+$/g.test(value);
    }
  }, [value, state]);
  
  const helperText = useMemo(() => {
    if (validationError) {
      return state === "phonenumber"
        ? "تلفن خود را وارد کنید"
        : "ایمیل خود را وارد کنید";
    }
  }, [value, state, validationError]);

  const submit = async () => {};
  const handleSubmitWithEnter = (e) => {
    if (e.key === "Enter") submit();
  };
  return (
    <div className="flex flex-col items-center justify-around py-12 mt-3 h-full">
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

      <div className="flex flex-row justify-around m-[20px] ">
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
              error={validationError}
              helperText={helperText}
              variant="outlined"
              value={value}
              // onChange={(e) => setValue(e.target.value)}
              onChange={(e) =>
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
              placeholder={
                state === "phonenumber" ? "09*********" : "email@example.com"
              }
              onKeyDown={(e) => handleSubmitWithEnter(e)}
              sx={{
                width: "100%",
                "& > .MuiFormHelperText-root": {
                  textAlign: "right",
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* btn */}
      {/* <div className="w-full sm:w-auto ">
        <Button
          variant="contained"
          className="w-full sm:w-auto py-3 px-18 sm:px-20"
          onClick={() => handleSubmit()}
        >
          مرحله بعد
        </Button>
      </div> */}
      <div className="flex flex-col py-12  ">
        <Button
          variant="contained"
          className="w-[240px] md:w-[400px] h-[3.2em] rounded-[10px] text-lg "
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
