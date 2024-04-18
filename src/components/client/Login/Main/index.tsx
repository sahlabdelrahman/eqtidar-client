import LogoComponent from "../../global/Header/LogoComponent";
import LoginForm from "../LoginForm";

import styles from "./style.module.scss";

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <LogoComponent externalPage />
                <LoginForm />
            </div>
        </main>
    );
}
