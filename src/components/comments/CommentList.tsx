import React, {FC} from 'react';
import {Link, useParams} from 'react-router-dom';
import {PostMeta} from "../post/PostMeta";
import {useGetPostCommentsQuery, useGetSinglePostQuery} from "../../api/ProjectApi";
import {Comment} from "./Comment";

interface CommentListProps {

}

export const CommentList: FC<CommentListProps> = () => {
    const {slug} = useParams()
    const {data, isLoading} = useGetPostCommentsQuery({slug: slug!})

    if (isLoading) {
        return <p> Загрузка...</p>
    }
    if (!data?.comments) {
        return (
            <div className='max-w-3xl mx-auto flex flex-col gap-2'>
                <p>
                    <Link to='/signIn'>Sign in</Link> or
                    <Link to='/signUp'>sign up</Link> to add comments on this article.
                </p>
                <p>Нет коментариев</p>
            </div>
        )
    }
    return (
        <div className='max-w-3xl mx-auto flex flex-col gap-2'>
            <p>
                <Link to='/signIn'>Sign in</Link> or
                <Link to='/signUp'>sign up</Link> to add comments on this article.
            </p>
            {data.comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        body={comment.body}
                        author={comment.author}
                        publishedAt={comment.createdAt}
                    />
                )
            )}
        </div>
    );
};

