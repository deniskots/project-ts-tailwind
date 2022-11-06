import React, {FC} from 'react';
import {Container} from "../container/container.comp";

interface SubtitleProps {}


export const Subtitle: FC<SubtitleProps> = () => {
    return (
            <div className='bg-red-300 shadow-lg shadow-red-300/50 text-white p-12 mb-6'>
                <Container>
                    <h1 className='text-8xl text-center font-josefin pb-2'>
                        Project A
                    </h1>
                </Container>

            </div>
    );
};

