import Head from "next/head";
import LoginLayout from "../components/LoginLayout";

export default function Home() {
  return <div>layout</div>;
}

//getLayout
Home.getLayout = (page) => <LoginLayout backlink> {page}</LoginLayout>;
