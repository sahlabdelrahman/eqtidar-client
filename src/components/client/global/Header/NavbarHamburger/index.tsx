import { FC } from "react";
import { NavbarHamburgerProps } from "@/types/componentProps";

import styles from "./style.module.scss";

const NavbarHamburger: FC<NavbarHamburgerProps> = ({
    mobileOpen,
    handleDrawerToggle,
}) => {
    return (
        <button
            className={`${styles.navbarHamburger} ${
                mobileOpen ? styles.mobileOpen : ""
            }`}
            onClick={handleDrawerToggle}
            aria-label="open drawer"
            title="Open drawer"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default NavbarHamburger;
