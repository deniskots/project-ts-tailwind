import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Container} from "../../components/container/container.comp";
import {AuthInput} from "../../components/authInput/AuthInput";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface SignUpPageProps {

}

interface SignUpFormValues {
    username: string;
    email: string;
    password: string;
}


let schema = yup.object().shape({
    username: yup.string().required().min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
});



export const SignUpPage: FC<SignUpPageProps> = () => {
    const {register} = useForm<SignUpFormValues>({
        defaultValues: {
            email: '',
            password: '',
            username: ''
        },
        resolver: yupResolver(schema),
    })
    return (
        <Container>
            <div>
                <h1 className='text-4xl font-bold text-center mb-4'>Регистрация</h1>
                <p className='text-center mb-8'><Link to='/sign-in'>Уже есть аккаунт...</Link></p>
                <form className='max-w-xl mx-auto flex flex-col gap-4'>
                    <AuthInput placeholder='Ваше имя' type='text'{...register('username')}/>
                    <AuthInput placeholder='Ваша почта' type='email' {...register('email')}/>
                    <AuthInput placeholder='Ваш пароль' type='password' {...register('password')}/>
                </form>
            </div>
        </Container>
    );
};

