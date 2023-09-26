import { ReactElement } from "react";
import Layout from "../components/layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    return <>Under Construction</>;
};

Home.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default Home;
