import React, {FC} from 'react';
import {BsPlus} from "react-icons/bs";


interface FollowButtonProps {
    username: string;
}

export const FollowButton: FC<FollowButtonProps> = ({username}) => {
    return (
        <button
            className='py-1 px-4 rounded border border-theme-green text-theme-green hover:bg-theme-grey hover:text-black flex items-center'>
            {/*<span><BsPlus/></span>&nbsp;*/}
            Подписаться на {username}
        </button>
    );
};