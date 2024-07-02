import useAPI from "@/hooks/useAPI";

import Section from "@/components/client/global/Section";
import GoalsCards from "./Cards";

import ourGoalsConfig from "./config";

import { APIUrlsConstants } from "@/utils/API/constants";

const { title, sectionId } = ourGoalsConfig;

function OurGoals() {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.goal,
    });
    return (
        <Section title={title} sectionId={sectionId} dark>
            <GoalsCards data={response?.data} loading={loading} />
        </Section>
    );
}

export default OurGoals;
