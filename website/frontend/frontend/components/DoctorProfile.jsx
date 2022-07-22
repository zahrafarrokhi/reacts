import React, { useState } from 'react';
import { Button, Divider } from '@mui/material';
import DynamicModal from './DynamicModal';
// import ClockIcon from '../icons/clock.svg';
// import MapIcon from '../icons/map.svg';
// import PhoneIcon from '../icons/phone.svg';
import { DOCTORSDEGREES } from '../lib/utils';
// import NavigationIcon from '../icons/navigation.svg';

function DoctorProfile(props) {
  const { doctor } = props;
  const [tab, setTab] = useState('visit');
  const [openModal, setOpenModal] = useState(false);

  console.log(doctor);

  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full h-full items-stretch p-6">
      <div className="flex justify-around md:hidden">
        <span
          onClick={() => setTab('visit')}
          className={tab === 'visit' ? 'text-primary pb-3 text-center w-full border-b-2 border-solid border-0 border-primary' : 'text-black border-b-0 w-full text-center'}
        >
          ویزیت

        </span>
        <span
          onClick={() => setTab('info')}
          className={tab === 'info' ? 'text-primary pb-3 text-center w-full border-b-2 border-solid border-0 border-primary' : 'text-black border-b-0 w-full text-center'}
        >
          اطلاعات مطب
        </span>
      </div>
      <Divider className="mb-3 md:hidden" />
      <div className="flex md:items-stretch md:w-full h-full md:auto">
        <div className={tab === 'visit' ? 'md:ml-3 flex-[65%]' : 'hidden md:flex'}>
          <div className="flex flex-row-reverse md:flex-row items-stretch mt-2 md:mt-0 md:p-3 border md:border-solid rounded-lg border-backgroundGray">
            <div className="w-[12em] h-[11em] ">
              <img
                className="max-w-full min-h-full rounded-md"
                src={doctor.image ?? 'https://fakeimg.pl/250x200/'}
                alt="img"
              />
            </div>
            <div className="flex flex-col mr-4 w-full">
              <div className="flex flex-col w-full">
                {/* <span className="text-accent900 text-xs">{doctor.department.faname}</span> */}
                <span className="my-2 font-bold">{`${doctor.first_name} ${doctor.last_name}`}</span>
                <span>
                  شماره نظام پزشکی :‌
                  {' '}
                  {doctor.medicalCode}
                </span>
                {/* <span className="mt-2">{DOCTORSDEGREES[doctor?.degree] ?? 'دکتر فوق تخصص غدد'}</span> */}
              </div>
              <div className="hidden md:flex justify-end w-full text-left mt-5">
                <Button
                  variant="contained"
                  className="py-2"
                  onClick={() => setOpenModal(true)}
                >
                  درخواست ویزیت آنلاین
                </Button>
              </div>
            </div>
          </div>
          <div className="text-justify mt-4">
            <h4 className="my-2">درباره دکتر</h4>
            <p>
              {doctor.description}
            </p>
          </div>
          {/* <div className="flex md:hidden justify-center w-full text-left" /> */}

        </div>
        <div className={tab === 'info' ? 'md:flex flex-[35%]' : 'hidden border-backgroundGray rounded-lg pb-10 md:flex flex-col mr-3 border border-solid flex-[35%]'}>
          <div className="bg-primary h-[13em] rounded-md">map</div>
          <div className="p-3">
            <div className="flex items-center pt-2">
              {/* <PhoneIcon className="w-6" /> */}
              <span className="mr-3 flex">
                شماره مطب :
                {' '}
                <span>
                  {/* {doctor.offices.postal_code ?? '12345'} */}
                </span>
              </span>
            </div>
            <div className="flex items-center">
              {/* <MapIcon className="w-6" /> */}
              <span className="mr-3 my-4">{doctor.offices?.address ?? 'تهران تهران'}</span>
            </div>
            <div className="flex items-center">
              {/* <ClockIcon className="w-6" /> */}
              <span className="mr-3">{doctor.offices?.open_hours ?? '۱۲ ساعته بازه'}</span>
            </div>
            <div className="flex items-end">
              {/* <NavigationIcon className="w-6" /> */}
              <span className="mr-3 mt-4">مسیریابی</span>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        className="md:hidden py-2 absolute w-[90%] bottom-7"
        onClick={() => setOpenModal(true)}
      >
        درخواست ویزیت آنلاین
      </Button>
    </div>
  );
}
export default DoctorProfile;