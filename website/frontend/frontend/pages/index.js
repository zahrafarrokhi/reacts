import Head from "next/head";
import LoginLayout from "../components/LoginLayout";

export default function Home() {
  return (
    <div className="flex flex-col items-center  h-full justify-center">
      <h1>Layout</h1>
    </div>
  );
}

//getLayout
Home.getLayout = (page) => <LoginLayout backlink> {page}</LoginLayout>;
