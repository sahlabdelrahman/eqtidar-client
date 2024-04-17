import WhatsAppLogo from "@/components/Icons/WhatsAppLogo";
import LinkedInLogo from "@/components/Icons/LinkedInLogo";
import TwitterLogo from "@/components/Icons/TwitterLogo";
import InstagramLogo from "@/components/Icons/InstagramLogo";
import SnapChatLogo from "@/components/Icons/SnapChatLogo";
import MailLogo from "@/components/Icons/MailLogo";

import { FooterConfigProps } from "@/types/componentProps";

const footerConfig: FooterConfigProps = {
    slogan: "أوقاف مستدامة لمستقبل مشرق",
    copyright: ` جميع الحقوق محفوظة ©️ لاقتدار ${new Date()?.getFullYear()}`,
    developed: {
        text: "تم التطوير بواسطة ",
        name: "سهل عبد الرحمن",
        path: "https://wa.me/201001116328",
    },
    socialMediaLinks: [
        {
            id: 0,
            path: "https://wa.me/966599095059",
            Icon: WhatsAppLogo,
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
