import OurTeamComp from "@/components/client/OurTeam";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { MembersProps } from "@/components/client/OurTeam/main";

export const metadata = {
    title: {
        default: "فريقنا",
        template: `%s | فريقنا`,
    },
};

export default async function OurTeam() {
    const boardMembers: MembersProps = await getData({
        url: `${APIUrlsConstants.member}?page=0&size=30&position=board_member`,
    });
    const teamMembers: MembersProps = await getData({
        url: `${APIUrlsConstants.member}?page=0&size=30&position=team_member`,
    });
    return (
        <>
            <OurTeamComp
                boardMembers={boardMembers}
                teamMembers={teamMembers}
            />
        </>
    );
}
