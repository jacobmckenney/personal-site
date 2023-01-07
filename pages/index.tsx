import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jacob McKenney</title>
                <meta name="description" content="Jacob McKenney's personal website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <p>some content</p>
            </main>
        </>
    );
};

export default Home;
