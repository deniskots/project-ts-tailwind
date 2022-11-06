import React, {FC} from 'react';
import { Post } from './post.comp';
import {Container} from "../container/container.comp";
import {Article} from "../../api/dto/global-feed.in";
import ReactPaginate from "react-paginate";
import { PAGE_SIZE } from '../../consts';

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

