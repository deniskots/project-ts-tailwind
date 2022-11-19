import React, {FC} from 'react';
import {TagList} from '../tag-list/tag-list';
import {useGetPopularTagsQuery} from "../../api/ProjectApi";
import {Container} from "../container/container.comp";

interface PopularTagsProps {
}

export const PopularTags: FC<PopularTagsProps> = () => {
    const {data, isLoading, isFetching, error} = useGetPopularTagsQuery('')
    if (isLoading || isFetching) {
        return (
            <div>
                Идет загрузка...
            </div>
        )
    }
    if (error) {
        return (
            <div>
                произошла ошибка при загрузки
            </div>
        )
    }
    return (
        <div className='bg-theme-tagBg rounded px-3 py-3'>
            <h4 className='mb-2'>популярные теги</h4>
            <TagList list={data?.tags || []} tagStyle={"DARK"} itemsAs={'a'}/>
        </div>
    );
};

