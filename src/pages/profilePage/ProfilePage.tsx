import React, {FC} from 'react';
import {MainPart} from '../../components/main-part/mainPart';
import {ProfileBanner} from "../../components/profile/ProfileBanner";
import {useGetProfileFeedQuery} from "../../api/repository";

interface ProfilePageProps {
}


export const ProfilePage: FC<ProfilePageProps> = () => {
    const{data, error, isLoading} = useGetProfileFeedQuery('')
    return (
        <>
            <ProfileBanner/>
            <MainPart/>
        </>
    );
};

