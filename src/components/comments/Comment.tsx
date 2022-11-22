import React, {FC} from 'react';
import {PostMeta} from "../post/PostMeta";
import {Author} from "../../api/dto/global-feed.in";

interface CommentProps {
    body: string;
    author: Author;
    publishedAt: string;
}

export const Comment: FC<CommentProps> = ({body, author, publishedAt}) => {
    return (
        <div className='border border-theme-grey rounded'>
            <div className='p-4'>
                <p>
                    {body}
                </p>
            </div>
            <div className='flex pt-2 px-4 border-t border-theme-grey bg-slate-50'>
                <PostMeta
                    author={author}
                    publishedAt={publishedAt}
                    showActiveButtons={false}
                    authorDirection="ROW"
                />
            </div>
        </div>
    );
};

