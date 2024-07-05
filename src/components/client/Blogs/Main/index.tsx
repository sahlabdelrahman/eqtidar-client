import BlogsComponent from "../BlogsComponent";

import { BlogProps } from "./main";

import styles from "./style.module.scss";

export default function Main({ data }: { data: BlogProps[] }) {
    return (
        <main className={styles.main}>
            <BlogsComponent data={data} />
        </main>
    );
}
