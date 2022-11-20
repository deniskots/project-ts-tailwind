import React, {FC} from 'react';
import {AuthorInfo} from "./AuthorInfo";
import {FollowButton} from "../profile/FollowButton";
import {Author} from '../../api/dto/singlePost.in';

interface PostMetaProps {
    author: Author;
    publishedAt: string
}

export const PostMeta: FC<PostMetaProps> = ({author, publishedAt}) => {
    return (
        <div>
            <div className='flex mb-4'>
                <AuthorInfo
                    author={author}
                    publishedAt={publishedAt}
                />
                <FollowButton username={author.username}/>
            </div>
        </div>
    );
};
