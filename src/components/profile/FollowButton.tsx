import React, {FC} from 'react';
import {BsPlus} from "react-icons/bs";


interface FollowButtonProps {

}

export const FollowButton: FC<FollowButtonProps> = () => {
    return (
        <button className='py-1 px-4 rounded border border-theme-tagBg text-white hover:bg-theme-grey hover:text-black flex items-center'>
            <span><BsPlus/></span>&nbsp;
            Подписаться
        </button>
    );
};