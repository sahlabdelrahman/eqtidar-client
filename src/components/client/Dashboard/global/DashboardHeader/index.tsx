"use client";

import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { useAppSelector } from "@/store";
import Link from "next/link";
import {
    Avatar,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
} from "@mui/material";
import { toast } from "react-toastify";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { DashboardHeaderComponentProps } from "@/types/dashboard/componentProps";

import AuthService from "@/services/auth.service";
import { forceLogout } from "@/store/slices/authSlice";

import dashboardHeaderConfig from "./config";

import styles from "./style.module.scss";
import { getInitials } from "@/functions";

const {
    tooltipTitle,
    menuLinksAndActions,
    redirectSuccessPath,
    successMessage,
} = dashboardHeaderConfig;

function DashboardHeader({
    handleSideMenu,
    openSideMenu,
}: DashboardHeaderComponentProps) {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const user = useAppSelector((state) => state.auth.user);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        handleCloseUserMenu();
        AuthService.logout().then(() => {
            router.push(redirectSuccessPath);
            toast.success(successMessage);
            dispatch(forceLogout());
        });
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
                <div className={styles.box}>
                    <Tooltip title={tooltipTitle}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt={user?.fullName}
                                className={styles.avatar}
                            >
                                {getInitials({
                                    fullName: user?.fullName || "",
                                })}
                            </Avatar>
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
                        className={styles.menu}
                    >
                        {menuLinksAndActions?.links?.map(
                            ({ id, text, path }) => (
                                <MenuItem
                                    key={id}
                                    onClick={handleCloseUserMenu}
                                    className={styles.listItem}
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
                            ({ id, text, Icon, key }) => (
                                <MenuItem
                                    key={id}
                                    onClick={
                                        key === "logout"
                                            ? handleLogout
                                            : () => {}
                                    }
                                    className={styles.listItem}
                                >
                                    {text}

                                    <ListItemIcon
                                        className={styles.listItemIcon}
                                    >
                                        <Icon className={styles.icon} />
                                    </ListItemIcon>
                                </MenuItem>
                            )
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
