import styles from "./style.module.scss";

import bannerConfig from "./config";
import Image from "next/image";

const { image } = bannerConfig;

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <Image alt={image?.alt} src={image?.url} />
            </div>
        </section>
    );
}

export default Banner;
