"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useAPI from "@/hooks/useAPI";
import DynamicForm from "@/components/client/Dashboard/global/DynamicForm";
import Divider from "@/components/client/global/Divider";
import BlogsComponent from "../../Blogs/BlogsComponent";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";
import blogsConfig from "./config";
import { BlogProps } from "@/components/client/Blogs/Main/main";

import styles from "./style.module.scss";

const { formData, submitHandler } = blogsConfig;

export default function Main() {
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [currentBlog, setCurrentBlog] = useState<BlogProps | null>(null);
    const [mode, setMode] = useState<"add" | "edit">("add");

    const { response, loading, apiRequest } = useAPI({
        url: APIUrlsConstants.blog,
    });

    useEffect(() => {
        setBlogs(response?.data);
    }, [response]);

    const handleEdit = (blog: any) => {
        setCurrentBlog(blog);
        setMode("edit");
    };

    const fetchAndSetBlogs = async () => {
        const response: any = await apiRequest({
            url: APIUrlsConstants.blog,
        });
        setBlogs(response?.data);
    };

    const handleDelete = async (id: string) => {
        await APIConfig.delete(`${APIUrlsConstants.blog}/${id}`).then(
            async (response) => {
                toast.success(response?.data?.message, {
                    rtl: false,
                });
                await fetchAndSetBlogs();
            }
        );
    };

    const handleFormSubmit = async (data: any) => {
        const response = await submitHandler({
            ...data,
        });
        if (response?.success) {
            await fetchAndSetBlogs();
            setCurrentBlog(null);
            setMode("add");
            return response;
        } else {
            return null;
        }
    };
    return (
        <div className={styles.blogs}>
            <DynamicForm
                formData={formData}
                submitHandler={handleFormSubmit}
                defaultValues={currentBlog || { title: "", description: "" }}
                id={currentBlog?._id}
                mode={mode}
                blogsPage
            />
            <Divider />
            <BlogsComponent
                data={blogs}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                inDashboard
            />
        </div>
    );
}
