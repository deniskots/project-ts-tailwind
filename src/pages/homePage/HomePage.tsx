import React, {FC, useState} from 'react';
import {Subtitle} from "../../components/subtitle/subtitle.comp";
import {MainPart} from "../../components/main-part/mainPart";
import {useGetGlobalFeedQuery} from "../../api/repository";
import {useSearchParams} from "react-router-dom";

interface HomePageProps{}

export const HomePage:FC<HomePageProps> = () => {
    const[searchParams] = useSearchParams()
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0
    const {data, error, isLoading, isFetching,} = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get('tag')
    })
    return (
        <>
            <Subtitle/>
            <MainPart data={data} isLoading={isLoading} isFetching={isFetching} error={error}/>
        </>
    )}
