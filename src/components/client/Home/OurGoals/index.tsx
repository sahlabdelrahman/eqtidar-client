import Section from "@/components/client/global/Section";

import ourGoalsConfig from "./config";

import GoalsCards from "./Cards";

const { title, sectionId } = ourGoalsConfig;

function OurGoals() {
    return (
        <Section title={title} sectionId={sectionId} dark>
            <GoalsCards />
        </Section>
    );
}

export default OurGoals;
