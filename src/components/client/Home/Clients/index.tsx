"use client";

import useAPI from "@/hooks/useAPI";

import Section from "@/components/client/global/Section";
import ClientCards from "./Cards";

import { APIUrlsConstants } from "@/utils/API/constants";

import clientsConfig from "./config";

const { title, sectionId } = clientsConfig;

function Clients() {
    const { response, loading } = useAPI({
        url: APIUrlsConstants.client,
    });
    return (
        <Section title={title} sectionId={sectionId}>
            <ClientCards data={response?.data} loading={loading} />
        </Section>
    );
}

export default Clients;
