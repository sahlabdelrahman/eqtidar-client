"use client";

import useAPI from "@/hooks/useAPI";

import Section from "@/components/client/global/Section";

import { APIUrlsConstants } from "@/utils/API/constants";

import partnersConfig from "./config";

import PartnerCards from "./Cards";

const { title, sectionId } = partnersConfig;

function Partners() {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.partner,
    });
    return (
        <Section title={title} sectionId={sectionId}>
            <PartnerCards data={response?.data} loading={loading} />
        </Section>
    );
}

export default Partners;
