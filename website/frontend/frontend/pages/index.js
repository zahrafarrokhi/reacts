import Head from "next/head";
import MainLayout from "../components/navigation/MainLayout";
import DepartmentTabBar from '../components/DepartmentTabBar';
import React, {  useState } from 'react';

export default function Home() {
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
  return (
    <div className="flex flex-col items-center  h-full justify-center">
      <h1>Layout</h1>
      <DepartmentTabBar departments={departments} />
    </div>
  );
}

//getLayout
Home.getLayout = (page) => <MainLayout backlink> {page}</MainLayout>;
