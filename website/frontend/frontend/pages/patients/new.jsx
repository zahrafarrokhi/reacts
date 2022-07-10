import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, InputLabel, FormHelperText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginLayout from "../../components/LoginLayout";
import { useRouter } from "next/dist/client/router";
import { persianToEnglishDigits, preventLettersTyping } from "../../lib/utils";
import DatePicker from "../../components/DatePicker";
// import { useSelector, useDispatch } from "react-redux";

const NewPatient = () => {
  const router = useRouter();
  const theme = useTheme();
  const btnRef = useRef();
  //state
  // nationalId
  // const nationalId = useRef();
  const [nationalId, setnationalId] = useState();
  console.log("nationalId", nationalId);
  //valid
  const [nationalIdValid, setNationalIdValid] = useState(false);
  // birthdate
  const [birthdate, setBirthDate] = useState();
  //error
  const [error, setError] = useState(false);
  const [birthError, setBirthError] = useState("");
  const [idError, setNationalIdError] = useState("");

  //redux
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.patientReducer?.loading === 'loading');
  // const redErr = useSelector((state) => state.patientReducer?.error);

  //submit
  const submit = async (e) => {
    try {
      setError(false);
      // await dispatch(

      // ).unwrap();
      router.push("/patients/info");
    } catch (e) {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-row p-3 mt-10">
        <p className="text-center ">
          لطفا کد‌ملی و تاریخ تولد خود را وارد کنید.
        </p>
      </div>
      <div className="flex flex-col p-3 items-center">
        <InputLabel
          htmlFor="nationalId"
          sx={{
            color: theme.palette.textBlack.main,
            width: "100%",
            textAlign: "right",
            marginBottom: 1 / 2,
          }}
        >
          کد ملی
        </InputLabel>
        <TextField
          dir="ltr"
          autoComplete="none"
          required
          id="nationalId"
          // error={!nationalID || nationalID.length < 10} --> this doesn't work perfectly
          // error={idErr}
          variant="outlined"
          inputProps={{
            maxLength: 10,
            inputMode: "numeric",
          }}
          className="w-full"
          value={nationalId}
          onChange={(e) => {
            setnationalId(
              preventLettersTyping(persianToEnglishDigits(e.target.value))
            );
            // setNationalIdValid(e.target.value.length === 10);
          }}
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-5">
        <InputLabel
          htmlFor="birthDate"
          sx={{
            color: theme.palette.textBlack.main,
            width: "100%",
            textAlign: "right",
            marginBottom: 1 / 2,
          }}
        >
          تاریخ تولد
        </InputLabel>
        <DatePicker
          value={birthdate}
          onChange={setBirthDate}
          btnRef={btnRef}
          editable
        />
      </div>
      <div className="flex flex-row items-center justify-center  mt-40">
        <Button
          variant="contained"
          className="w-[240px] md:w-[400px] h-[3.2em] rounded-[10px] p-3 text-lg"
          color="primary"
          // disabled={!(birthdate?.length > 0 && nationalIdValid)}
          onClick={submit}
        >
          مرحله بعد
        </Button>
      </div>
    </div>
  );
};
export default NewPatient;

//Layout
NewPatient.getLayout = (page) => <LoginLayout>{page}</LoginLayout>;
