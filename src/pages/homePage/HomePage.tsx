import React, {FC} from 'react';
import {Subtitle} from "../../components/subtitle/subtitle.comp";
import {MainPart} from "../../components/main-part/mainPart";
import {useGetGlobalFeedQuery} from "../../api/ProjectApi";
import {useSearchParams} from "react-router-dom";
import {usePageParam} from "../../hooks/use-page-params";
import {Container} from "../../components/container/container.comp";
import {PopularTags} from "../../components/popularTags/PopularTags";
import {useAuth} from "../../hooks/use-auth";

interface HomePageProps{}

export const HomePage:FC<HomePageProps> = () => {
    const {isLogged} = useAuth()
    const[searchParams] = useSearchParams()
    const {page} = usePageParam()
    const {data, error, isLoading, isFetching} = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get('tag')
    })
    return (
        <>
            {!isLogged && <Subtitle/>}
            <Container>
                <div className='flex py-4'>
                    <div className='w-3/4'>
                        <MainPart data={data} isLoading={isLoading} isFetching={isFetching} error={error}/>
                    </div>
                    <div className='w-1/4 pl-3'>
                        <PopularTags />
                    </div>
                </div>
            </Container>
        </>
    )}


