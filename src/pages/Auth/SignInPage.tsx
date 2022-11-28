import React, {FC} from 'react';
import {Container} from "../../components/container/container.comp";

export interface SignInPageProps {

}

export const SignInPage: FC<SignInPageProps> = () => {
    return (
        <Container>
            <div className='mt-8'>
                <h1 className='text-4xl font-bold text-center mb-4'>Авторизация</h1>
            </div>
        </Container>
    );
};

