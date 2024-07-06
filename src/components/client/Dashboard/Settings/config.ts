import { DynamicFormComponentPropsForSettings } from "@/types/dashboard/componentProps";

import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const infoConfig: DynamicFormComponentPropsForSettings = {
    formData: {
        fields: [
            [
                {
                    id: "oldEmail",
                    name: "oldEmail",
                    type: "email",
                    label: "البريد الالكتروني القديم",
                    placeholder: "البريد الالكتروني القديم",
                    validation: {
                        required: {
                            value: true,
                            message: "يجب ادخال البريد الالكتروني القديم",
                        },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "البريد الالكتروني القديم غير صالح",
                        },
                    },
                },
                {
                    id: "email",
                    name: "email",
                    type: "email",
                    label: "البريد الالكتروني الجديد",
                    placeholder: "البريد الالكتروني الجديد",
                    validation: {
                        required: {
                            value: true,
                            message: "يجب ادخال البريد الالكتروني الجديد",
                        },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "البريد الالكتروني الجديد غير صالح",
                        },
                    },
                },
            ],
            [
                {
                    id: "oldPassword",
                    name: "oldPassword",
                    type: "password",
                    label: " كلمة المرور القديمة",
                    placeholder: " كلمة المرور القديمة",
                    validation: {
                        required: {
                            value: true,
                            message: "يجب ادخال  كلمة المرور القديمة",
                        },
                        minLength: {
                            value: 6,
                            message:
                                "يجب أن تكون  كلمة المرور القديمة أكثر من ٦ حروف",
                        },
                        maxLength: {
                            value: 60,
                            message:
                                "يجب أن تكون  كلمة المرور القديمة أقل من 60 حرفًا",
                        },
                    },
                },
                {
                    id: "password",
                    name: "password",
                    type: "password",
                    label: " كلمة المرور الجديدة",
                    placeholder: " كلمة المرور الجديدة",
                    validation: {
                        required: {
                            value: true,
                            message: "يجب ادخال  كلمة المرور الجديدة",
                        },
                        minLength: {
                            value: 6,
                            message:
                                "يجب أن تكون  كلمة المرور الجديدة أكثر من ٦ حروف",
                        },
                        maxLength: {
                            value: 60,
                            message:
                                "يجب أن تكون  كلمة المرور الجديدة أقل من 60 حرفًا",
                        },
                    },
                },
            ],
        ],
        submitText: "تحديث",
    },
    submitHandlerForEmail: async ({ data }) => {
        const response = await APIConfig.patch(APIUrlsConstants.changeEmail, {
            ...data,
        });
        return {
            status: response?.status,
            success: response?.data?.success,
            message: response?.data?.message,
            data: response?.data?.data,
        };
    },
    submitHandlerForPassword: async ({ data, userId }) => {
        const response = await APIConfig.patch(
            APIUrlsConstants.changePassword,
            {
                ...data,
                userId,
            }
        );
        return {
            status: response?.status,
            success: response?.data?.success,
            message: response?.data?.message,
            data: response?.data?.data,
        };
    },
};

export default infoConfig;
