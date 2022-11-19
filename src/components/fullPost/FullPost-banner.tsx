import React, {FC} from 'react';
import {Container} from "../container/container.comp";
import {PostMeta} from "../post/PostMeta";

interface FullPostBannerProps {

}

export const FullPostBanner: FC<FullPostBannerProps> = () => {
    return (
        <div className='bg-theme-postBanner pt-8 pb-4 mb-8 text-theme-white'>
            <Container>
                <h1 className='font-bold text-4xl mb-6'>
                    Repellat nihil in magnam quasi. Et dicta at est laborum doloribus sit.
                    Quia possimus necessitatibus magnam, est,
                    nulla, reiciendis exercitationem neque et tenetur quia deserunt asperiores
                    blanditiis doloribus ipsum beatae numquam.
                    Ullam rerum consequuntur occaecati error.
                    Possimus consequatur consectetur doloribus voluptate nihil,
                    tenetur sunt fugiat quae id, ducimus non.
                </h1>
               <PostMeta/>
            </Container>
        </div>
    );
};

