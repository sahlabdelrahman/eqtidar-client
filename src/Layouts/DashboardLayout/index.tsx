"use client";

// Solve lag problem in main section and background appearance

import { ReactNode, useState } from "react";

import DashboardHeader from "@/components/client/Dashboard/global/DashboardHeader";
import DashboardSideMenu from "@/components/client/Dashboard/global/DashboardSideMenu";
import Breadcrumb from "@/components/client/Dashboard/global/Breadcrumb";

import styles from "./style.module.scss";

function DashboardLayout({ children }: { children: ReactNode }) {
    const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

    const handleSideMenu = () => {
        setOpenSideMenu(!openSideMenu);
    };

    return (
        <div
            className={`${styles.dashboardLayout} ${
                openSideMenu ? styles.openSideMenu : ""
            }`}
        >
            <DashboardSideMenu openSideMenu={openSideMenu} />
            <DashboardHeader
                handleSideMenu={handleSideMenu}
                openSideMenu={openSideMenu}
            />
            <main className={styles.main}>
                {/* <Breadcrumb /> */}
                <section className={styles.content}>{children}</section>
            </main>
        </div>
    );
}

export default DashboardLayout;
