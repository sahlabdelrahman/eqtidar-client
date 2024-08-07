import Image from "next/image";

import bannerConfig from "./config";

import styles from "./style.module.scss";

const { image } = bannerConfig;

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <Image
                    alt={image?.alt}
                    src={image?.url}
                    data-aos="fade-up"
                    data-aos-duration="500"
                />
            </div>
        </section>
    );
}

export default Banner;
