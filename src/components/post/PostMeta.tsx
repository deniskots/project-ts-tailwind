import React, {FC} from 'react';
import AuthorInfo from "./AuthorInfo";
import {FollowButton} from "../profile/FollowButton";

interface PostMetaProps {

}

export const PostMeta:FC<PostMetaProps> = () => {
    return (
        <div>
            <div className='flex mb-4'>
                <AuthorInfo
                    author={{
                        username: 'Aloha Sem',
                        image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png?w=826&t=st=1668864116~exp=1668864716~hmac=62e839f982c3b3e6318bda633964e79220b59fec28e98c2b1a650cea46b3279c',
                        following: false
                    }}
                    createdAt={new Date().toISOString()}
                />
                <FollowButton username='Cosmos Wind'/>
            </div>
        </div>
    );
};
