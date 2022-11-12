import React, {FC, useState} from 'react';
import {Container} from "../container/container.comp";
import {PostList} from "../post/post-list";
import {useGetGlobalFeedQuery} from "../../api/repository";
import ReactPaginate from "react-paginate";
import {PAGE_SIZE} from "../../consts";
import {PopularTags} from "../popularTags/PopularTags";
import {useSearchParams} from "react-router-dom";

interface MainPartProps {
}

export const MainPart: FC<MainPartProps> = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(0)
    const handleChangePage = ({selected}: {selected: number}) => {
        setPage(selected)
    }
    const {data, error, isLoading, isFetching,} = useGetGlobalFeedQuery({page, tag: searchParams.get('tag')})

    if (isLoading || isFetching) {
        return (
            <Container>
                Идет загрузка...
            </Container>
        )
    }
    if (error) {
        return (
            <Container>
                произошла ошибка при загрузки
            </Container>
        )
    }
    return (
        <Container>
            <div className='flex'>
                <div className='w-3/4'>
                    <PostList list={data?.articles || []}/>
                    <div className='my-4'>
                        <ReactPaginate
                            pageCount={(data?.articlesCount || 0) / PAGE_SIZE}
                            pageRangeDisplayed={(data?.articlesCount || 0) / PAGE_SIZE}
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
                </div>
                <div className='w-1/4 pl-3'>
                    <PopularTags />
                </div>
            </div>

        </Container>
    );
};


