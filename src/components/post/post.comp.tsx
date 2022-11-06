import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {LikeButton} from "../like-button/likeButton";
import {TagList} from "../tag-list/tag-list";

interface PostProps {
}

export const Post: FC<PostProps> = () => {
    return (
        <article>
            <div className='border-t border-black/10 py-4'>
                <div className='mb-4 flex '>
                    <Link to='/name'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                             alt="ava"
                             className='inline-block w-10 h-10 rounded-full'/>
                    </Link>
                     <div className='mr-6 ml-2 inline-flex flex-col '>
                         <Link to='/@name' className='font-medium'>
                             Aloha Mike
                         </Link>
                         <span className='text-theme-grey text-sm'>20.20.2020</span>
                    </div>
                    <LikeButton/>
                </div>
                <Link to='/fullPost' className='hover:no-underline'>
                    <h1 className='font-bold text-xl'>title</h1>
                    <p className='text-theme-grey font-light'>
                        asdas fd f hg hgfhjfgj kghjkrtyu ertwe e t et wet
                    </p>
                    <div className='flex justify-between'>
                        <span className='text-theme-black text-sm font-light'>открыть больше...</span>
                        <TagList/>
                    </div>
                </Link>
            </div>
        </article>
    );
};


