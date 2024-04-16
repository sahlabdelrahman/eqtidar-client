import styles from "./style.module.scss";

import bannerConfig from "./config";

const { data } = bannerConfig;

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                {data?.map(({ id, title, text }) => (
                    <aside key={id} className={styles.content}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.text}>{text}</p>
                    </aside>
                ))}
            </div>
        </section>
    );
}

export default Banner;
