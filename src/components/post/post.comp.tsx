import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {LikeButton} from "../like-button/likeButton";
import {TagList} from "../tag-list/tag-list";
import {Article} from "../../api/dto/global-feed.in";
import {DateTime} from "luxon";

interface PostProps extends Article{

}

export const Post: FC<PostProps> = ({author, createdAt, favoritesCount,title, description, tagList}) => {
    return (
        <article>
            <div className='border-t border-black/10 py-4'>
                <div className='mb-4 flex justify-between'>
                    <div className='flex'>
                        <Link to={`/@${author.username}`}>
                            <img src={author.image}
                                 alt="ava"
                                 className='inline-block w-10 h-10 rounded-full'/>
                        </Link>
                        <div className='mr-6 ml-2 inline-flex flex-col '>
                            <Link to={`/@${author.username}`} className='font-medium'>
                                {author.username}
                            </Link>
                            <span className='text-theme-grey text-sm'>{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
                        </div>
                    </div>
                    <LikeButton count={favoritesCount}/>
                </div>
                <Link to='/fullPost' className='hover:no-underline'>
                    <h1 className='font-bold text-xl'>
                        {title}
                    </h1>
                    <p className='text-theme-grey font-light'>
                        {description}
                    </p>
                    <div className='flex justify-between'>
                        <span className='text-theme-black text-sm font-light'>открыть больше...</span>
                        <TagList list={tagList}/>
                    </div>
                </Link>
            </div>
        </article>
    );
};


