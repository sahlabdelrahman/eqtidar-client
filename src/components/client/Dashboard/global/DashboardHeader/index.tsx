"use client";

import { FC, MouseEvent, useState } from "react";
import Link from "next/link";
import {
    Avatar,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
} from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { DashboardHeaderComponentProps } from "@/types/dashboard/componentProps";

import styles from "./style.module.scss";

import dashboardHeaderConfig from "./config";

const { name, avatar, tooltipTitle, menuLinksAndActions } =
    dashboardHeaderConfig;

function DashboardHeader({
    handleSideMenu,
    openSideMenu,
}: DashboardHeaderComponentProps) {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <header
            className={`${styles.dashboardHeader} ${
                openSideMenu ? styles.openSideMenu : ""
            }`}
        >
            <button className={styles.controlSideMenu} onClick={handleSideMenu}>
                <KeyboardArrowRightIcon />
            </button>
            <div className={styles.pageTitle}>
                <h3 className={styles.title}>لوحة التحكم</h3>
            </div>
            <div className={styles.controls}>
                {/* <Box>
                    <Tooltip title={tooltipTitle}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={name} src={avatar?.src} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        disablePortal
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {menuLinksAndActions?.links?.map(
                            ({ id, text, path }) => (
                                <MenuItem
                                    key={id}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Link
                                        href={path}
                                        aria-label={text}
                                        title={text}
                                    >
                                        {text}
                                    </Link>
                                </MenuItem>
                            )
                        )}
                        <Divider />
                        {menuLinksAndActions?.actions?.map(
                            ({ id, text, Icon }) => (
                                <MenuItem
                                    key={id}
                                    onClick={handleCloseUserMenu}
                                >
                                    {text}
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                </MenuItem>
                            )
                        )}
                    </Menu>
                </Box> */}
            </div>
        </header>
    );
}

export default DashboardHeader;
