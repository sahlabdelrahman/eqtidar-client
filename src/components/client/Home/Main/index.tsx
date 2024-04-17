import Banner from "../Banner";
import OurGoals from "../OurGoals";
import Services from "../Services";
import Achievements from "../Achievements";
import Projects from "../Projects";
import Clients from "../Clients";
import FAQ from "../FAQ";
import ContactUs from "../ContactUs";

import styles from "./style.module.scss";

export default function Main() {
    return (
        <main className={styles.main}>
            <Banner />
            <OurGoals />
            <Services />
            <Achievements />
            <Projects />
            <Clients />
            <FAQ />
            <ContactUs />
        </main>
    );
}
