import Head from "next/head";
import LoginLayout from "../components/LoginLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <div className={styles.container}>kkk</div>;
}

//getLayout(L) = 
// Home.getLayout = (page) => <LoginLayout backlink> {page}</LoginLayout>;
Home.getLayout = (page) => (<LoginLayout backlink> {page}</LoginLayout>);
