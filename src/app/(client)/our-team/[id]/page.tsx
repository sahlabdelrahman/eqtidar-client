import TeamMemberComp from "@/components/client/OurTeam/TeamMember";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { MemberProps } from "@/components/client/OurTeam/main";

export const metadata = {
    title: {
        default: "فريقنا",
        template: `%s | فريقنا`,
    },
};

export default async function TeamMember({
    params: { id },
}: {
    params: { id: string };
}) {
    const member: MemberProps = await getData({
        url: `${APIUrlsConstants.member}/${id}`,
    });

    return (
        <>
            <TeamMemberComp member={member} />
        </>
    );
}
