import React, { useState, useEffect } from 'react';
import Layout from '../../components/navigation/MainLayout';
//mui
import { TextField, InputAdornment } from '@mui/material';
//
import { AiOutlineSearch } from 'react-icons/ai';
// import Circle from '../../icons/Circle.svg';
import DepartmentTabBar from '../../components/doctors/DepartmentTabBar'
import DoctorItem from '../../components/doctors/DoctorItem';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from '../../lib/axios';
// import { loadDoctors } from '../../lib/slices/doctors';
// import { useRouter } from 'next/router';


const doctors = [
  {
  id: 1,
  fname:"a"
  },
  {
    id: 2,
    fname:"b"
  },
  {
    id: 3,
    fname:"c"
  },
  {
    id: 4,
    fname:"d"
    },
]
const Doctors = () => {
  const [departments, setdepartments] = useState(
    [
      {
        id: 1,
        department: 'endocrine',
        name: ' پزشکان غدد ',
        link: '/department/endocrine',
        icon: '/icons/DoctorsBlue.svg',
      },
      {
        id: 2,
        department: 'heart',
        department: 'heart',
        name: ' پزشکان قلب ',
        link: '/department/heart',
        icon: 'icons/DoctorsBlue.svg',
      },
      {
        id: 3,
        department: 'eye',
        name: ' پزشکان چشم ',
        link: '/department/eye',
        icon: '/icons/VisitsIconBlue.svg',
      },
      {
        id: 4,
        department: 'nutrition',
        name: ' پزشکان تغذیه ',
        link: '/department/nutrition',
        icon: '/icons/DoctorsBlue.svg',
      },
    ],
  );
   
  const [search, setSearch] = useState('');
  //redux
  // const [error, setError] = useState(false);
  // const doctors = useSelector((state) => state.doctorReducer.doctors);
  // const dispatch = useDispatch();

  // const getDoctors = async () => {
  //   try {
  //     await dispatch(loadDoctors()).unwrap();
  //   } catch (error) {
  //     setError(true);
  //   }
  // };

  // useEffect(() => {
  //   getDoctors();
  // }, []);
  return ( 
    <div className="flex flex-col px-2">
      <DepartmentTabBar departments={departments} />
      <div className="my-5 mx-4">
        <TextField
          placeholder="جستجو..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          //? InputAdornment => div 
          InputProps={{
            startAdornment: <InputAdornment><AiOutlineSearch className="w-6 mr-2 h-7 rotate-90" /></InputAdornment>,
          }}
        />
      </div>
      <div className="flex flex-wrap justify-start px-2 py-2 ">
        {/* {
          doctors?.map((doctor) =>
          (doctor.fname)
          )
        } */}

        {/* DoctorItem */}
        {
          doctors?.map((doctor) => <DoctorItem key={doctor.id} doctor={doctor} />)
        }
      </div>
   </div>
   );
}
 
export default Doctors;
Doctors.getLayout = (page) => <Layout>{page}</Layout>;