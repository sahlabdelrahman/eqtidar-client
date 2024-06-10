"use client";

import { useEffect } from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";

import SectionTitle from "../global/SectionTitle";
import EmptySection from "../global/EmptySection";
import TextComp from "../global/TextComp";

import { getData } from "@/services/index.service";
import { getProperImageUrl } from "@/utils/helpers";
import { APIUrlsConstants } from "@/utils/API/constants";

import { MemberProps, MembersProps } from "./main";

import ourTeamConfig from "./config";

import styles from "./style.module.scss";

const { ourBoard, ourTeam } = ourTeamConfig;

export default function OurTeam({
    boardMembers,
    teamMembers,
}: {
    boardMembers: MembersProps;
    teamMembers: MembersProps;
}) {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    const renderMemberCards = (membersItems: MemberProps[]) => {
        return membersItems.map(
            ({
                _id: id,
                name,
                role,
                image: { alt, url, blurUrl, width, height },
            }) => (
                <Link
                    key={id}
                    className={styles.card}
                    data-aos="fade-left"
                    data-aos-duration="500"
                    href={`/our-team/${id}`}
                    aria-label={name}
                    title={name}
                    rel="noreferrer"
                >
                    <div className={styles.imageContainer}>
                        <Image
                            alt={alt}
                            src={getProperImageUrl({
                                filePath: url,
                            })}
                            className={styles.image}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={getProperImageUrl({
                                filePath: blurUrl,
                            })}
                            width={width}
                            height={height}
                        />
                    </div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.role}>{role}</p>
                </Link>
            )
        );
    };

    const {
        items: boardMembersItems,
        isLoading: boardMembersLoading,
        hasMore: boardMembersHasMore,
        bottomBoundaryRef: boardMembersBottomBoundaryRef,
    } = useInfiniteScroll({
        initialItems: boardMembers?.items,
        fetchItems: async (page) => {
            const response = await getData({
                url: `${APIUrlsConstants.member}?page=${page}&size=30&position=board_member`,
            });
            return {
                items: response.items,
                hasNextPage: response.hasNextPage,
            };
        },
        initialPage: 1,
    });

    const {
        items: teamMembersItems,
        isLoading: teamMembersLoading,
        hasMore: teamMembersHasMore,
        bottomBoundaryRef: teamMembersBottomBoundaryRef,
    } = useInfiniteScroll({
        initialItems: teamMembers?.items,
        fetchItems: async (page) => {
            const response = await getData({
                url: `${APIUrlsConstants.member}?page=${page}&size=30&position=team_member`,
            });
            return {
                items: response.items,
                hasNextPage: response.hasNextPage,
            };
        },
        initialPage: 1,
    });

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.section}>
                    <SectionTitle title={ourBoard?.title} />
                    {boardMembersItems?.length > 0 ? (
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
                    {boardMembersItems?.length > 30 && !boardMembersHasMore && (
                        <TextComp text="لا مزيد من العناصر لتحميلها." />
                    )}
                </section>
                <section className={styles.section}>
                    <SectionTitle title={ourTeam?.title} />
                    {teamMembersItems?.length > 0 ? (
                        <div className={styles.members}>
                            {renderMemberCards(teamMembersItems)}
                            <div ref={teamMembersBottomBoundaryRef}></div>
                        </div>
                    ) : (
                        <EmptySection />
                    )}
                    {teamMembersLoading && <TextComp text="جاري التحميل ..." />}
                    {teamMembersItems?.length > 30 && !teamMembersHasMore && (
                        <TextComp text="لا مزيد من العناصر لتحميلها." />
                    )}
                </section>
            </div>
        </main>
    );
}
