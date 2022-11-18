import React, {FC} from 'react';
import {MainPart} from '../../components/main-part/mainPart';
import {ProfileBanner} from "../../components/profile/ProfileBanner";
import {useGetProfileFeedQuery} from "../../api/repository";
import {usePageParam} from "../../hooks/use-page-params";
import {useParams} from "react-router-dom";


interface ProfilePageProps {

}


export const ProfilePage: FC<ProfilePageProps> = () => {
    const {page} = usePageParam()
    const {profile} = useParams()
    const {data, error, isLoading, isFetching} = useGetProfileFeedQuery({
        page,
        author: profile!,
    })
    return (
        <>
            <ProfileBanner/>
            <MainPart data={data} isLoading={isLoading} isFetching={isFetching} error={error}/>
        </>
    );
};

