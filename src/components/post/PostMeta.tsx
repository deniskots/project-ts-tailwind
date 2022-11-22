import React, {ComponentProps, FC} from 'react';
import {AuthorInfo} from "./AuthorInfo";
import {FollowButton} from "../profile/FollowButton";
import {Author} from '../../api/dto/singlePost.in';

interface PostMetaProps {
    author: Author;
    publishedAt: string;
    showActiveButtons?: boolean;
    authorDirection?: ComponentProps<typeof AuthorInfo>['direction']
}

export const PostMeta: FC<PostMetaProps> = ({author, publishedAt, showActiveButtons= true, authorDirection}) => {
    return (
        <div>
            <div className='flex mb-4'>
                <AuthorInfo
                    author={author}
                    publishedAt={publishedAt}
                    direction={authorDirection}
                />
                {showActiveButtons && (
                        <div>
                            <FollowButton username={author.username}/>
                        </div>
                    )
                }


            </div>
        </div>
    );
};
