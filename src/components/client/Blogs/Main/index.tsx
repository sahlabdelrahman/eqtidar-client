import BlogsComponent from "../BlogsComponent";

import { BlogsProps } from "./main";

import styles from "./style.module.scss";

export default function Main({ data }: { data: BlogsProps }) {
    return (
        <main className={styles.main}>
            <BlogsComponent data={data} />
        </main>
    );
}
