"use client";

import { useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";

import SectionContainer from "@/components/global/SectionContainer";
import NavbarHamburger from "./NavbarHamburger";
import LinksComponent from "./LinksComponent";
import LogoComponent from "./LogoComponent";

import navbarConfig from "./config";

import { NavbarComponentProps } from "@/types/componentProps";

import styles from "./style.module.scss";

const { Logo, links, drawerWidth } = navbarConfig;

function HideOnScroll(props: NavbarComponentProps) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function Header(props: NavbarComponentProps) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <div onClick={handleDrawerToggle} className={styles.drawerContainer}>
            <LogoComponent inDrawer Logo={Logo} />
            <LinksComponent links={links} />
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={styles.headerContainer}>
            <HideOnScroll {...props}>
                <AppBar component="nav" className={styles.appBar}>
                    <SectionContainer>
                        <Toolbar className={styles.toolbar}>
                            <LogoComponent Logo={Logo} />
                            <NavbarHamburger
                                mobileOpen={mobileOpen}
                                handleDrawerToggle={handleDrawerToggle}
                            />
                            <LinksComponent notInDrawer links={links} />
                        </Toolbar>
                    </SectionContainer>
                </AppBar>
            </HideOnScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </div>
    );
}

export default Header;
