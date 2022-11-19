import React, {FC} from 'react';
import {MainPart} from '../../components/main-part/mainPart';
import {ProfileBanner} from "../../components/profile/ProfileBanner";
import {useGetProfileFeedQuery} from "../../api/ProjectApi";
import {usePageParam} from "../../hooks/use-page-params";
import {useParams} from "react-router-dom";
import {useGetProfileQuery} from "../../api/ProfileApi";


interface ProfilePageProps {

}


export const ProfilePage: FC<ProfilePageProps> = () => {
    const {page} = usePageParam()
    const {profile} = useParams()
    const {data: profileInfo, isLoading: profileLoading} = useGetProfileQuery({
        username: profile!
    })
    const {data, error, isLoading, isFetching} = useGetProfileFeedQuery({
        page,
        author: profile!,
    })

    if(profileLoading) {
        return null
    }
    return (
        <>
            <ProfileBanner profile={profileInfo!.profile}/>
            <MainPart data={data} isLoading={isLoading} isFetching={isFetching} error={error}/>
        </>
    );
};

