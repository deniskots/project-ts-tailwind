import React, {FC} from 'react';
import {FaRegHeart} from "react-icons/fa";


interface LikeButtonProps {
    count: number
}

export const LikeButton: FC<LikeButtonProps> = ({count}) => {
    return (
        <button className='text-theme-red text-sm flex px-1 items-center
        border-theme-red cursor-pointer rounded-sm hover:text-white hover:bg-theme-red'>
            <FaRegHeart/>
            <span className='ml-1'>{count}</span>
        </button>
    );
};


