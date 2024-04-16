import { ContactUsComponentProps } from "@/types/componentProps";

const ContactUsConfig: ContactUsComponentProps = {
    title: "تواصل معنا",
    sectionId: "contactUs",
    fields: [
        {
            id: "name",
            name: "customerName",
            type: "name",
            label: "الاسم",
            placeholder: "الاسم",
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال الاسم",
                },
                minLength: {
                    value: 2,
                    message: "يجب أن يكون الاسم أكثر من حرفين",
                },
                maxLength: {
                    value: 60,
                    message: "يجب أن يكون الاسم أقل من 60 حرفًا",
                },
            },
        },
        {
            id: "email",
            name: "customerEmail",
            type: "email",
            label: "الإيميل",
            placeholder: "الإيميل",
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال الإيميل",
                },
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "الإيميل غير صالح",
                },
            },
        },
        {
            id: "message",
            name: "message",
            type: "message",
            label: "الرسالة",
            placeholder: "الرسالة",
            multiline: true,
            validation: {
                required: {
                    value: true,
                    message: "يجب ادخال الرسالة",
                },
                minLength: {
                    value: 2,
                    message: "يجب أن تكون الرسالة أكثر من حرفين",
                },
                maxLength: {
                    value: 10000,
                    message: "يجب أن تكون الرسالة أقل من ١٠٠٠٠ حرفًا",
                },
            },
        },
    ],
    buttonText: "إرسال",
    successMessage: "نشكركم على الاتصال بنا! سوف نعود اليك قريبا.",
};

export default ContactUsConfig;
