import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {LikeButton} from "../like-button/likeButton";
import {TagList} from "../tag-list/tag-list";
import {Article} from "../../api/dto/global-feed.in";
import {DateTime} from "luxon";
import {AuthorInfo} from "./AuthorInfo";

interface PostProps extends Article{

}

export const Post: FC<PostProps> = ({author, createdAt, favoritesCount,title, description, tagList, slug}) => {
    return (
        <article>
            <div className='border-t border-black/10 py-4'>
                <div className='mb-4 flex justify-between'>
                    <AuthorInfo author={author} publishedAt={createdAt}/>
                    <LikeButton count={favoritesCount}/>
                </div>
                <Link to={`/article/${encodeURIComponent(slug)}`} className='hover:no-underline'>
                    <h1 className='font-bold text-xl'>
                        {title}
                    </h1>
                    <p className='text-theme-grey font-light'>
                        {description}
                    </p>
                    <div className='flex justify-between py-2'>
                        <span className='text-theme-black text-sm font-light'>открыть больше...</span>
                        <TagList list={tagList}/>
                    </div>
                </Link>
            </div>
        </article>
    );
};


