import React, {FC} from 'react';
import {Container} from "../container/container.comp";
import {FollowButton} from "./FollowButton";

interface ProfileBannerProps {

}

export const  ProfileBanner: FC<ProfileBannerProps> = () => {
    return (
        <div className='bg-theme-profileBanner pt-8 pb-4'>
            <Container>
                <div>
                    <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt="" className='w-20 h-20 mx-auto mb-4'/>
                    <h1 className='text-center font-bold text-2xl'>My name</h1>
                </div>
                <div className='flex justify-end'>
                    <FollowButton/>
                </div>
            </Container>
        </div>
    );
};


