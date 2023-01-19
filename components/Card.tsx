import React, { ReactNode, FC } from "react";
import styles from "../styles/Home.module.css";

interface Props {
    children?: ReactNode;
}

const Card: FC<Props> = ({ children }) => {
    return (
        <div style={{ width: "min-content" }} className={styles.card}>
            {children}
        </div>
    );
};

export default Card;
