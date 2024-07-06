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

import { MainProps } from "@/components/client/Home/Main/main";

import styles from "./style.module.scss";

export default function Main({ info }: MainProps) {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <main className={styles.main}>
            <Banner />
            {/* <MessageAndVision data={info?.bannerText} /> */}
            <OurGoals />
            <Services />
            <Achievements data={info?.achievements} />
            {/* <Projects /> */}
            <Clients />
            <OurTeam />
            <Partners />
            {/* <FAQ /> */}
            {/* <ContactUs /> */}
        </main>
    );
}
