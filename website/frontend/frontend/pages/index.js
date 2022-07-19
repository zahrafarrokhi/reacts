import Head from "next/head";
import MainLayout from "../components/navigation/MainLayout";

export default function Home() {
  return (
    <div className="flex flex-col items-center  h-full justify-center">
      <h1>Layout</h1>
    </div>
  );
}

//getLayout
Home.getLayout = (page) => <MainLayout backlink> {page}</MainLayout>;
