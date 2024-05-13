"use client";

import { useEffect } from "react";

import AOS from "aos";

import Banner from "../Banner";
import MessageAndVision from "../MessageAndVision";
import OurGoals from "../OurGoals";
import Services from "../Services";
import Achievements from "../Achievements";
// import Projects from "../Projects";
import Clients from "../Clients";
import OurTeam from "../OurTeam";
import Partners from "../Partners";
// import FAQ from "../FAQ";
// import ContactUs from "../ContactUs";

import styles from "./style.module.scss";

export default function Main() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <main className={styles.main}>
            <Banner />
            <MessageAndVision />
            <OurGoals />
            <Services />
            <Achievements />
            {/* <Projects /> */}
            <Clients />
            <OurTeam />
            <Partners />
            {/* <FAQ /> */}
            {/* <ContactUs /> */}
        </main>
    );
}
