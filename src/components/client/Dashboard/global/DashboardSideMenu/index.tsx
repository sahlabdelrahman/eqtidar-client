"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { DashboardSideMenuComponentProps } from "@/types/dashboard/componentProps";

import dashboardSideMenuConfig from "./config";

import styles from "./style.module.scss";

const { links } = dashboardSideMenuConfig;

function DashboardSideMenu({ openSideMenu }: DashboardSideMenuComponentProps) {
    const pathname = usePathname();

    return (
        <aside
            className={`${styles.dashboardSideMenu} ${
                openSideMenu ? styles.openSideMenu : ""
            }`}
        >
            <div className={styles.logoContainer}>
                <Link href="/dashboard" className={styles.logoText}>
                    اقتدار
                </Link>
            </div>
            <nav className={styles.linksContainer}>
                <ul className={styles.list}>
                    {links?.map(({ id, path, key, text, Icon }) => (
                        <li key={id} className={styles.listItem}>
                            <Link
                                href={path}
                                className={`${styles.link} ${
                                    pathname === key ? styles.active : ""
                                }`}
                                aria-label={text}
                                title={text}
                            >
                                <Icon />
                                <span className={styles.text}>{text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default DashboardSideMenu;
