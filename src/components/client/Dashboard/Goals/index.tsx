"use client";

import { useEffect, useState } from "react";
import useAPI from "@/hooks/useAPI";
import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import GoalsCards from "@/components/client/Home/OurGoals/Cards";
import Divider from "@/components/client/global/Divider";
import SectionTitle from "@/components/client/global/SectionTitle";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";
import goalsConfig from "./config";
import { GoalProps } from "../../Home/OurGoals/ourGoals";

import styles from "./style.module.scss";
import { toast } from "react-toastify";

const { formData, submitHandler } = goalsConfig;

export default function Main() {
    const [goals, setGoals] = useState<GoalProps[]>([]);
    const [currentGoal, setCurrentGoal] = useState<GoalProps | null>(null);
    const [mode, setMode] = useState<"add" | "edit">("add");

    const { response, loading, apiRequest } = useAPI({
        url: APIUrlsConstants.goal,
    });

    useEffect(() => {
        setGoals(response?.data);
    }, [response]);

    const handleEdit = (goal: any) => {
        setCurrentGoal(goal);
        setMode("edit");
    };

    const fetchAndSetGoals = async () => {
        const response: any = await apiRequest({
            url: APIUrlsConstants.goal,
        });
        setGoals(response?.data);
    };

    const handleDelete = async (id: string) => {
        await APIConfig.delete(`${APIUrlsConstants.goal}/${id}`).then(
            async (response) => {
                toast.success(response?.data?.message, {
                    rtl: false,
                });
                await fetchAndSetGoals();
            }
        );
    };

    const handleFormSubmit = async (data: any) => {
        const response = await submitHandler({ ...data });
        if (response?.success) {
            await fetchAndSetGoals();
            setCurrentGoal(null);
            setMode("add");
            return response;
        } else {
            return null;
        }
    };
    return (
        <div className={styles.goals}>
            <DynamicForm
                formData={formData}
                submitHandler={handleFormSubmit}
                defaultValues={currentGoal || { text: "" }}
                id={currentGoal?._id}
            />
            <Divider />
            <SectionTitle title="الأهداف" enableAOS={false} />
            <GoalsCards
                inDashboard={true}
                data={goals}
                loading={loading}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
}
