"use client";

import { useEffect, useCallback } from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";

import SectionTitle from "../global/SectionTitle";
import EmptySection from "../global/EmptySection";
import TextComp from "../global/TextComp";
import ControlsOverlay from "../global/ControlsOverlay";

import { getData } from "@/services/index.service";
import { getProperFileUrl } from "@/utils/helpers";
import { APIUrlsConstants } from "@/utils/API/constants";

import { MemberProps, MembersProps } from "./main";

import ourTeamConfig from "./config";

import styles from "./style.module.scss";

const { ourBoard, ourTeam } = ourTeamConfig;

export default function OurTeam({
    boardMembers,
    teamMembers,
    inDashboard = false,
    handleEdit,
    handleDelete,
}: {
    boardMembers: MembersProps;
    teamMembers: MembersProps;
    inDashboard?: boolean;
    handleEdit?: (member: MemberProps) => void;
    handleDelete?: (id: string) => Promise<void>;
}) {
    useEffect(() => {
        Aos.init({ once: true });
    }, []);

    const renderMemberCards = (membersItems: MemberProps[]) => {
        return membersItems.map((member) =>
            inDashboard ? (
                <div
                    key={member?._id}
                    className={styles.card}
                    data-aos="fade-left"
                    data-aos-duration="500"
                    aria-label={member?.name}
                    title={member?.name}
                    rel="noreferrer"
                >
                    <ControlsOverlay
                        handleEdit={() => {
                            if (handleEdit) handleEdit(member);
                        }}
                        handleDelete={() => {
                            if (handleDelete) handleDelete(member?._id);
                        }}
                    />
                    <div className={styles.imageContainer}>
                        <Image
                            alt={member?.image?.alt}
                            src={getProperFileUrl({
                                filePath: member?.image?.url,
                            })}
                            className={styles.image}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={getProperFileUrl({
                                filePath: member?.image?.blurUrl,
                            })}
                            width={member?.image?.width}
                            height={member?.image?.height}
                        />
                    </div>
                    <p className={styles.name}>{member?.name}</p>
                    <p className={styles.role}>{member?.role}</p>
                </div>
            ) : (
                <Link
                    key={member?._id}
                    className={styles.card}
                    data-aos="fade-left"
                    data-aos-duration="500"
                    href={`/our-team/${member?._id}`}
                    aria-label={member?.name}
                    title={member?._id}
                    rel="noreferrer"
                >
                    <div className={styles.imageContainer}>
                        <Image
                            alt={member?.image?.alt}
                            src={getProperFileUrl({
                                filePath: member?.image?.url,
                            })}
                            className={styles.image}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={getProperFileUrl({
                                filePath: member?.image?.blurUrl,
                            })}
                            width={member?.image?.width}
                            height={member?.image?.height}
                        />
                    </div>
                    <p className={styles.name}>{member?.name}</p>
                    <p className={styles.role}>{member?.role}</p>
                </Link>
            )
        );
    };

    // Define fetchItems functions using useCallback
    const fetchBoardMembers = useCallback(async (page: number) => {
        const response = await getData({
            url: `${APIUrlsConstants.member}?page=${page}&size=50&position=board_member`,
        });
        return {
            items: response.items,
            hasNextPage: response.hasNextPage,
        };
    }, []);

    const fetchTeamMembers = useCallback(async (page: number) => {
        const response = await getData({
            url: `${APIUrlsConstants.member}?page=${page}&size=50&position=team_member`,
        });
        return {
            items: response.items,
            hasNextPage: response.hasNextPage,
        };
    }, []);

    const {
        items: boardMembersItems,
        isLoading: boardMembersLoading,
        hasMore: boardMembersHasMore,
        bottomBoundaryRef: boardMembersBottomBoundaryRef,
    } = useInfiniteScroll({
        initialItems: boardMembers?.items || [],
        fetchItems: fetchBoardMembers,
        initialPage: 1,
    });

    const {
        items: teamMembersItems,
        isLoading: teamMembersLoading,
        hasMore: teamMembersHasMore,
        bottomBoundaryRef: teamMembersBottomBoundaryRef,
    } = useInfiniteScroll({
        initialItems: teamMembers?.items || [],
        fetchItems: fetchTeamMembers,
        initialPage: 1,
    });

    return (
        <main
            className={`${styles.main} ${
                inDashboard ? styles.inDashboard : styles.notInDashboard
            }`}
        >
            <div className={styles.container}>
                <section className={styles.section}>
                    <SectionTitle title={ourBoard?.title} />
                    {boardMembersItems.length > 0 ? (
                        <div className={styles.members}>
                            {renderMemberCards(boardMembersItems)}
                            <div ref={boardMembersBottomBoundaryRef}></div>
                        </div>
                    ) : (
                        <EmptySection />
                    )}
                    {boardMembersLoading && (
                        <TextComp text="جاري التحميل ..." />
                    )}
                    {boardMembersItems.length > 30 && !boardMembersHasMore && (
                        <TextComp text="لا مزيد من العناصر لتحميلها." />
                    )}
                </section>
                <section className={styles.section}>
                    <SectionTitle title={ourTeam?.title} />
                    {teamMembersItems.length > 0 ? (
                        <div className={styles.members}>
                            {renderMemberCards(teamMembersItems)}
                            <div ref={teamMembersBottomBoundaryRef}></div>
                        </div>
                    ) : (
                        <EmptySection />
                    )}
                    {teamMembersLoading && <TextComp text="جاري التحميل ..." />}
                    {teamMembersItems.length > 30 && !teamMembersHasMore && (
                        <TextComp text="لا مزيد من العناصر لتحميلها." />
                    )}
                </section>
            </div>
        </main>
    );
}
