import React, {FC} from 'react';
import {MainPart} from '../../components/main-part/mainPart';
import {ProfileBanner} from "../../components/profile/ProfileBanner";
import {useGetProfileFeedQuery} from "../../api/ProjectApi";
import {usePageParam} from "../../hooks/use-page-params";
import {useLocation, useParams} from "react-router-dom";
import {useGetProfileQuery} from "../../api/ProfileApi";
import {ArticleToggle} from "../../components/articleToggle/ArticleToggle";
import {Container} from "../../components/container/container.comp";


interface ProfilePageProps {

}


export const ProfilePage: FC<ProfilePageProps> = () => {
    const {page} = usePageParam()
    const {profile} = useParams()
    const { pathname } = useLocation();
    const {data: profileInfo, isLoading: profileLoading} = useGetProfileQuery({
        username: profile!
    })
    const {data, error, isLoading, isFetching} = useGetProfileFeedQuery({
        page,
        author: profile!,
        isFavorite: pathname.includes(
            `/@${encodeURIComponent(profile!)}/favorites`
        ),
    });
    const articleToggleItems = [
        {
            text: 'Популярные публикации',
            link: `/@${encodeURIComponent(profile!)}/favorites`,
        },
    ];

    if(profileLoading) {
        return null
    }
    return (
        <>
            <ProfileBanner profile={profileInfo!.profile}/>
            <Container>
                <ArticleToggle
                    defaultText="Мои публикаци"
                    defaultLink={`/@${encodeURIComponent(profile!)}`}
                    items={articleToggleItems}
                />
                <MainPart data={data} isLoading={isLoading} isFetching={isFetching} error={error}/>
            </Container>

        </>
    );
};

