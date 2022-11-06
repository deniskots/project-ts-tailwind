import React, {FC} from 'react';
import {Container} from "../container/container.comp";
import {PostList} from "../post/post-list";
import {useGetGlobalFeedQuery} from "../../api/repository";

interface MainPartProps{}

export const MainPart: FC<MainPartProps> = () => {
    const {data, error, isLoading} = useGetGlobalFeedQuery('')

    if(isLoading) {
        return (
            <Container>
                Идет загрузка...
            </Container>
        )
    }
    if(error) {
        return (
            <Container>
                произошла ошибка при загрузки
            </Container>
        )
    }
    return (
        <Container>
            <div className='flex'>
                <PostList list={data?.articles || []}/>
                <div className='w-1/4'> Tags</div>
            </div>

        </Container>
    );
};


