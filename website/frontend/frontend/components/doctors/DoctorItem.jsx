import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import DynamicModal from "./DynamicModal";
import DoctorProfile from "./DoctorProfile";

const DoctorItem = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { doctor } = props;
  return (
    <div
      onClick={() => setOpenModal(true)}
      className="flex relative cursor-pointer items-center flex-[1_1_100%] md:basis-[40%]  m-2 p-5 border border-solid border-backgroundGray rounded-lg"
    >
      <div className="img">
        <img className="w-[7em] h-full" src="Doctors.svg" alt={doctor.name} />
      </div>
      <div className="flex flex-col w-full mr-5">
        <div className="flex flex-col justify-start items-start">
          <span className="text-primary text-sm">فوق تخصص غدد</span>
          <h3 className="m-0 p-0 my-2">دکتر علی اکبر سلطانی</h3>
          <span className="mb-2">شماره نظام پزشکی : 87643701</span>
          <span className="mb-3">{doctor.mastering ?? "استاد دانشگاه"}</span>
        </div>
        <div className="hidden md:flex flex-wrap justify-end items-center">
          <Button
            className="rounded-lg py-2 w-[13em] my-1"
            variant="outlined"
            onClick={() => setOpenModal(true)}
          >
            مشاهده پروفایل
          </Button>
          <Button variant="contained" className="py-2 w-[12em] mr-3 my-1">
            درخواست ویزیت آنلاین
          </Button>
          <DynamicModal
            title="تراکنش ها"
            open={openModal}
            handleClose={() => setOpenModal(false)}
          >
            <DoctorProfile doctor={doctor} />
            ll
          </DynamicModal>
        </div>
      </div>
    </div>
  );
};

export default DoctorItem;
