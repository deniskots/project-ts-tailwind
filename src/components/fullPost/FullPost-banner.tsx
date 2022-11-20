import React, {FC} from 'react';
import { Author } from '../../api/dto/singlePost.in';
import {Container} from "../container/container.comp";
import {PostMeta} from "../post/PostMeta";

interface FullPostBannerProps {
    title: string;
    author: Author;
    publishedAt: string
}

export const FullPostBanner: FC<FullPostBannerProps> = ({title, author, publishedAt}) => {
    return (
        <div className='bg-theme-postBanner pt-8 pb-4 mb-8 text-theme-white'>
            <Container>
                <h1 className='font-bold text-4xl mb-6'>
                    {title}
                </h1>
                <PostMeta author={author} publishedAt={publishedAt}/>
            </Container>
        </div>
    );
};

