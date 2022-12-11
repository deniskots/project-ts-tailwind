import React, {FC, useState} from 'react';
import {Container} from "../container/container.comp";
import {PostList} from "../post/post-list";
import {FeedData} from "../../api/ProjectApi";
import ReactPaginate from "react-paginate";
import {PAGE_SIZE} from "../../consts";

import {usePageParam} from "../../hooks/use-page-params";


interface MainPartProps {
    isLoading: boolean;
    isFetching: boolean;
    error: any;
    data?: FeedData;
}

export const MainPart: FC<MainPartProps> = ({data, isLoading, isFetching, error}) => {
    const {page, setPage} = usePageParam()
    const handleChangePage = ({selected}: { selected: number }) => {
        setPage(selected)
    }

    if (isLoading || isFetching) {
        return (
            <p>
                Идет загрузка...
            </p>
        )
    }
    if (error) {
        return (
            <p>
                произошла ошибка при загрузки
            </p>
        )
    }
    return (
        <Container>
            <PostList list={data?.articles || []}/>
            <div className='my-4'>
                <ReactPaginate
                    pageCount={Math.ceil((data?.articlesCount || 0) / PAGE_SIZE)}
                    pageRangeDisplayed={Math.ceil((data?.articlesCount || 0) / PAGE_SIZE)}
                    previousLabel={null}
                    nextLabel={null}
                    containerClassName='flex'
                    pageLinkClassName='px-3 py-1 text-theme-red bg-white
                hover:text-white hover:bg-theme-red'
                    activeLinkClassName='text-white bg-theme-black'
                    forcePage={page}
                    onPageChange={handleChangePage}
                />
            </div>
        </Container>
    );
};


