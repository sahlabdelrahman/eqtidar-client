import { LoginFormConfigProps } from "../types";

const LoginFormConfig: LoginFormConfigProps = {
    title: "مرحبا بعودتك",
    description:
        " يرجى تسجيل الدخول للوصول إلى لوحة التحكم الخاصة بك للتحكم في محتوى موقعك",
    fields: [
        {
            id: "email",
            name: "email",
            type: "email",
            label: "البريد الالكتروني",
            placeholder: "البريد الالكتروني",
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال البريد الالكتروني",
                },
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "البريد الالكتروني غير صالح",
                },
            },
        },
        {
            id: "password",
            name: "password",
            type: "password",
            label: "كلمة المرور",
            placeholder: "كلمة المرور",
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال كلمة المرور",
                },
                minLength: {
                    value: 6,
                    message: "يجب أن تكون كلمة المرور أكثر من ٦ حروف",
                },
                maxLength: {
                    value: 60,
                    message: "يجب أن تكون كلمة المرور أقل من 60 حرفًا",
                },
            },
        },
    ],
    buttonText: "تسجيل الدخول",
    successMessage: "مرحبا بك تم تسجيل الدخول بنجاح.",
    redirectSuccessPath: "/dashboard",
};

export default LoginFormConfig;
