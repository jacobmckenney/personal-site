import Head from "next/head";
import { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jacob McKenney</title>
                <meta name="description" content="Jacob McKenney's personal website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{ overflow: "hidden" }}>
                <Sidebar />
                <ProgressBar />
                <div className={styles.main}>
                    <p style={{ height: "1000px" }}>Jacob McKenney</p>
                    <p style={{ height: "1000px" }}>Education</p>
                </div>
            </main>
        </>
    );
};

export default Home;
