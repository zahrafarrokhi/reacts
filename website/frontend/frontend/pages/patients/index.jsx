import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import LoginLayout from "../../components/LoginLayout";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { HiPlus } from "react-icons/hi";

//Captol => Patients and return
const Patients = () => {
  const [selectedPatient, setSelectedPatient] = useState();
  const theme = useTheme();
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center grow mt-5">
      <div className="flex flex-row p-1">
        <p className="flex flex-row text-[14px]  md:text-lg text-black text-center p-3">
          خوش‌آمدید، در صورت داشتن پروفایل روی نام خود کلیک کرده، سپس دکمه‌ی
          ورود را بزنید.
          <br />
          <br />
          در غیر این صورت با کلیک روی دکمه‌ی «+ بیمار جدید» پروفایل جدید بسازید.
        </p>
      </div>
      <div className="flex flex-col mt-5">
        {/* {[1, 2, 3].map((id) => (
          <Button> {id}</Button>))} */}
        {[1, 2, 3].map((id) => (
          <Button
            variant="outlined"
            className="m-3 w-[240px] md:w-[366px] h-[3em]  rounded-lg border-size-[2px] text-sm md:text-xl text-semibold"
            sx={{
              // color: theme.palette.textBlack.main,
              borderWidth: "2px",
              borderColor:
                id === selectedPatient
                  ? theme.palette.primary.main
                  : theme.palette.border.main,
              orderWidth: id === selectedPatient ? "2px" : "1px",
            }}
            onClick={() => setSelectedPatient(id)}
          >
            {id}
          </Button>
        ))}
        {/* + */}
        <Button
          variant="outlined"
          className="m-3 w-[240px] md:w-[366px] h-[3em]  rounded-lg border-size-[2px] text-sm md:text-xl text-semibold"
          startIcon={<HiPlus className="mx-3 font-bold " />}
          onClick={() => {
            router.push("/patients/new");
          }}
          sx={{
            borderWidth: "2px",
            borderColor: theme.palette.border.main,
          }}
        >
          بیمار جدید
        </Button>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 mt-6">
        <Button
          variant="contained"
          className="w-[240px] md:w-[400px] h-[3.2em] rounded-[10px] p-3 text-lg"
          color="primary"
          // onClick={() => handleSubmit()}
        >
          مرحله بعد
        </Button>
      </div>
    </div>
  );
};
export default Patients;

//Layout
Patients.getLayout = (page) => <LoginLayout>{page}</LoginLayout>;
