import React, {FC} from 'react';
import {Subtitle} from "../../components/subtitle/subtitle.comp";
import {MainPart} from "../../components/main-part/mainPart";
import {useGetGlobalFeedQuery} from "../../api/ProjectApi";
import {useMatch, useResolvedPath, useSearchParams} from "react-router-dom";
import {usePageParam} from "../../hooks/use-page-params";
import {Container} from "../../components/container/container.comp";
import {PopularTags} from "../../components/popularTags/PopularTags";
import {useAuth} from "../../hooks/use-auth";
import {ArticleToggle} from "../../components/articleToggle/ArticleToggle";
import {routes} from "../../utils/routes";

interface HomePageProps{}


export const HomePage:FC<HomePageProps> = () => {
    const {isLogged} = useAuth()
    const[searchParams] = useSearchParams()
    const {page} = usePageParam()

    const personalArticles = useMatch(routes.personalArticles.path)

    const {data, error, isLoading, isFetching, } = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get('tag'),
        isPersonalArticles: personalArticles !== null,
    });

    const articleItems = []
    if(isLogged) {
        articleItems.push({
            text: 'Ваши публикации',
            link: '/personal-articles'
        })
    }

    return (
        <>
            {!isLogged && <Subtitle/>}
            <Container>
                <ArticleToggle items={articleItems}/>
                <div className='flex py-4'>
                    <div className='w-3/4'>
                        <MainPart
                            data={data}
                            isLoading={isLoading}
                            isFetching={isFetching}
                            error={error}
                        />
                    </div>
                    <div className='w-1/4 pl-3'>
                        <PopularTags />
                    </div>
                </div>
            </Container>
        </>
    )}


