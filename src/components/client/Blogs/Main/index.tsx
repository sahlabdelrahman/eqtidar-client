import BlogsComponent from "../BlogsComponent";

import styles from "./style.module.scss";

export default function Main() {
    return (
        <main className={styles.main}>
            <BlogsComponent />
        </main>
    );
}
