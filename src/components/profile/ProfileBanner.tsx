import React, {FC} from 'react';
import {Container} from "../container/container.comp";
import {FollowButton} from "./FollowButton";
import {Profile} from "../../api/dto/get-profile.in";

interface ProfileBannerProps {
profile: Profile;
}

export const  ProfileBanner: FC<ProfileBannerProps> = ({profile}) => {
    return (
        <div className='bg-theme-profileBanner pt-8 pb-4 mb-8'>
            <Container>
                <div>
                    <img src={profile.image} alt={`${profile.username}`} className='w-40 h-40 mx-auto mb-4 rounded-full'/>
                    <h1 className='text-center font-bold text-2xl'>{profile.username}</h1>
                </div>
                <div className='flex justify-end'>
                    <FollowButton username={profile.username}/>
                </div>
            </Container>
        </div>
    );
};


