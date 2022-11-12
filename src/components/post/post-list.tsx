import React, {FC} from 'react';
import { Post } from './post.comp';
import {Article} from "../../api/dto/global-feed.in";


interface PostListProps{
    list: Article[];
}

export const PostList: FC<PostListProps> = ({list}) => {
    return (
        <div>
            {list.map((post) => (
                <Post key={post.slug} {...post}/>
            ))}



        </div>
    );
};

