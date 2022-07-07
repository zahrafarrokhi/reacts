import React, { useState } from "react";
import LoginLayout from "../../components/LoginLayout";
import { useTheme } from "@mui/material/styles";

import {
  ButtonGroup,
  TextField,
  Button,
  InputLabel,
  FormHelperText,
  Box,
} from "@mui/material";

const Login = (props) => {
    // state
    const [state, setState] = useState("email");
    const [value, setValue] = useState();
  const theme = useTheme();

  const submit = async () => {};

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="flex align-items-center justify-content-center p-4">
        <ButtonGroup
           variant="outlined"
           sx={{
             width: '100%',
             display: 'flex',
             justifyContent: 'space-between',
             alignItems: 'center',
             padding: '.4em 1.5em .37em 1.5em',
             [theme.breakpoints.up('md')]: {
               padding: '0em',
               border: 0.5,
               borderRadius: 2,
               borderColor: theme.palette.secondary.main,
             },
           }}
      
        
        >
          
          <Button>تلفن همراه</Button>
          <Button> ایمیل</Button>
        </ButtonGroup>
      </div>

      <div className="flex flex-col items-center  justify-center w-full  my-4 sm:my-0">

      <InputLabel
          htmlFor="loginInput"
          sx={{
            color: theme.palette.textBlack.main,
            width: 1,
            textAlign: 'right',
            marginBottom: 1 / 2,
            paddingRight: 0.4,
          }}
        >
          {/* {loginState === PHONE ? 'تلفن همراه' : 'ایمیل'} */}
          kkk
        </InputLabel>

        <TextField
          dir="ltr"
          required
          id="loginInput"
          autoFocus
          className="w-full sm:w-auto"
          // error={err}
          variant="outlined"
         />
      </div>

      {/* btn */}
      <div className="flex flex-col mb-12">
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
