import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NAV_PAGES } from "../constants";

const Header: React.FC = () => {
    return (
        <div className={styles.nav}>
            {Object.entries(NAV_PAGES).map(([pageName, pageInfo]) => (
                <Link href={pageInfo.url}>{pageName}</Link>
            ))}
        </div>
    );
};

export default Header;
