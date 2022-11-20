import React, {FC} from 'react';
import {Container} from '../../components/container/container.comp';
import {FullPostBanner} from "../../components/fullPost/FullPost-banner";
import {TagList} from "../../components/tag-list/tag-list";
import {useGetSinglePostQuery} from "../../api/ProjectApi";
import {useParams} from "react-router-dom";
import {PostMeta} from "../../components/post/PostMeta";


interface FullPostPageProps {

}

export const FullPostPage: FC<FullPostPageProps> = () => {
    const {slug} = useParams()
    const {data} = useGetSinglePostQuery({slug: slug!})

    if (!data) {
        return (
            <Container>
                <h1> Публикации не загрузились</h1>
            </Container>
        )
    }
    return (
        <>
            <FullPostBanner
                title={data.article.title}
                author={data.article.author}
                publishedAt={data.article.createdAt}
            />
            <Container>
                <div className='border-b border-black/10 pb-8 mb-4'>
                    <p className='mb-8'>
                        {data.article.body}
                    </p>

                    <TagList list={data.article.tagList}/>
                </div>
                <div className='flex justify-center'>
                    <PostMeta
                        author={data.article.author}
                        publishedAt={data.article.createdAt}
                    />
                </div>
            </Container>
        </>
    );
};

