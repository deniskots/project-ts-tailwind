import React, {FC} from 'react';
import { Post } from './post.comp';
import {Container} from "../container/container.comp";
import {Article} from "../../api/dto/global-feed.in";

interface PostListProps{
    list: Article[]
}

export const PostList: FC<PostListProps> = ({list}) => {
    return (
        <div className='w-3/4'>
            {list.map((post) => (
                <Post key={post.slug}/>
            ))}


        </div>
    );
};

