import CallIcon from "@/components/Icons/CallIcon";
import LinkedInLogo from "@/components/Icons/LinkedInLogo";
import TwitterLogo from "@/components/Icons/TwitterLogo";
import InstagramLogo from "@/components/Icons/InstagramLogo";
import SnapChatLogo from "@/components/Icons/SnapChatLogo";
import MailLogo from "@/components/Icons/MailLogo";
import LocationIcon from "@/components/Icons/LocationIcon";

import { FooterConfigProps } from "@/types/componentProps";

const footerConfig: FooterConfigProps = {
    slogan: "أوقاف مستدامة لمستقبل مشرق",
    copyright: ` جميع الحقوق محفوظة ©️ لاقتدار ${new Date()?.getFullYear()}`,
    developed: {
        text: "تم التطوير بواسطة ",
        name: "سهل عبد الرحمن",
        path: "https://wa.me/201001116328",
    },
    idFile: {
        text: "تحميل الملف التعريفي ",
        path: "/",
    },

    whoAreWe:
        "شركة رسمية مسجلة بوزارة التجارة برقم (1010948722) ومن خلال كفاءاتنا المتخصصة وبيئة عملنا الفاعلة نمكن الواقفين من تأسيس أوقاف خالدة ونقدم حلولاً وقفية متكاملة ونساهم في تطوير عالم الأوقاف",
    contact: [
        {
            id: 0,
            text: "٩٦٦٠٥٣٥٢٩٢٨١١+",
            Icon: CallIcon,
        },
        {
            id: 1,
            text: "eqtidar.ksa@gmail.com",
            Icon: MailLogo,
        },
        {
            id: 2,
            text: "المملكة العربية السعودية - مدينة الرياض",
            Icon: LocationIcon,
        },
    ],
    socialMediaLinks: [
        {
            id: 0,
            path: "tel:+9660535292811",
            Icon: CallIcon,
        },
        {
            id: 1,
            path: "https://www.linkedin.com/in/eqtidarksa",
            Icon: LinkedInLogo,
        },
        {
            id: 2,
            path: "https://twitter.com/EqtidarKsa",
            Icon: TwitterLogo,
        },
        {
            id: 3,
            path: "https://www.instagram.com/eqtidarksa",
            Icon: InstagramLogo,
        },
        {
            id: 4,
            path: "https://www.snapchat.com/add/eqtidarksa",
            Icon: SnapChatLogo,
        },
        {
            id: 5,
            path: "mailto:eqtidar.ksa@gmail.com",
            Icon: MailLogo,
        },
    ],
};

export default footerConfig;
