"use client";

import { useEffect, useState, useCallback } from "react";
import useAPI from "@/hooks/useAPI";
import { toast } from "react-toastify";

import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import Divider from "@/components/client/global/Divider";
import OurTeamComp from "@/components/client/OurTeam";

import { APIUrlsConstants } from "@/utils/API/constants";
import APIConfig from "@/utils/API";
import ourTeamConfig from "./config";

const { formData, submitHandler } = ourTeamConfig;

import {
    initialMembersState,
    MemberProps,
    MembersProps,
} from "../../OurTeam/main";

import styles from "./style.module.scss";

export default function Main() {
    const [teamMembers, setTeamMembers] =
        useState<MembersProps>(initialMembersState);
    const [boardMembers, setBoardMembers] =
        useState<MembersProps>(initialMembersState);
    const [currentMember, setCurrentMember] = useState<MemberProps | null>(
        null
    );
    const [mode, setMode] = useState<"add" | "edit">("add");

    const { response, loading, apiRequest } = useAPI({
        url: `${APIUrlsConstants.member}?page=0&size=50&position=team_member`,
    });

    const {
        response: boardMembersResponse,
        loading: boardMembersLoading,
        apiRequest: apiRequestBoardMembers,
    } = useAPI({
        url: `${APIUrlsConstants.member}?page=0&size=50&position=board_member`,
    });

    useEffect(() => {
        setTeamMembers(response?.data || initialMembersState);
    }, [response]);

    useEffect(() => {
        setBoardMembers(boardMembersResponse?.data || initialMembersState);
    }, [boardMembersResponse]);

    const handleEdit = useCallback((boardMember: any) => {
        setCurrentMember(boardMember);
        setMode("edit");
    }, []);

    const fetchAndSetMembers = async () => {
        // TODO: bad behavior
        window.location.reload();

        // const response: any = await apiRequest({
        //     url: `${APIUrlsConstants.member}?page=0&size=50&position=team_member`,
        // });
        // const boardResponse: any = await apiRequestBoardMembers({
        //     url: `${APIUrlsConstants.member}?page=0&size=50&position=board_member`,
        // });
        // setTeamMembers(response?.data);
        // setBoardMembers(boardResponse?.data);
    };

    const handleDelete = async (id: string) => {
        await APIConfig.delete(`${APIUrlsConstants.member}/${id}`).then(
            async (response) => {
                toast.success(response?.data?.message, {
                    rtl: false,
                });
                await fetchAndSetMembers();
            }
        );
    };

    const handleFormSubmit = async (data: any) => {
        const response = await submitHandler({ ...data, image: data?.image });
        if (response?.success) {
            await fetchAndSetMembers();
            setCurrentMember(null);
            setMode("add");
            return response;
        } else {
            return null;
        }
    };

    return (
        <div className={styles.ourTeam}>
            <DynamicForm
                formData={formData}
                submitHandler={handleFormSubmit}
                defaultValues={
                    currentMember || { name: "", description: "", role: "" }
                }
                id={currentMember?._id}
                mode={mode}
            />
            <Divider />
            {!loading && !boardMembersLoading && (
                <OurTeamComp
                    boardMembers={boardMembers}
                    teamMembers={teamMembers}
                    inDashboard
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            )}
        </div>
    );
}
