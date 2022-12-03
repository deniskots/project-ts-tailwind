import React, {FC} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Container} from "../../components/container/container.comp";
import {AuthInput} from "../../components/authInput/AuthInput";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from "../../components/Button/Button";
import { toast } from 'react-toastify';
import {useAuth} from "../../hooks/use-auth";

export interface SignInPageProps {
}

export interface SignInFormValues {
    email: string;
    password: string;

}

let validSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
});

export const SignInPage: FC<SignInPageProps> = () => {
    const navigate = useNavigate()
    const {signIn} = useAuth()

    const {register, handleSubmit, formState} = useForm<SignInFormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(validSchema),
    });


    const onSubmitH =  async (values: SignInFormValues) => {
        try{
            await signIn(values)
            navigate('/')
        }catch (e) {
            toast.error('Что-то пошло не так...')
        }
    }

    return (
        <Container>
            <div className='mt-8'>
                <h1 className='text-4xl font-bold text-center mb-4'>Авторизация</h1>
                <p className='text-center mb-8'><Link to='/sign-up'>Нет аккаунта...</Link></p>
                <form
                    className='max-w-xl mx-auto flex flex-col gap-4 mb-6'
                    onSubmit={handleSubmit(onSubmitH)}
                >
                    <div>
                        {(Object.keys(formState.errors) as (keyof typeof formState.errors)[])
                            .map((el) => (
                                    <p
                                        key={`error-${el}`}
                                        className='text-red-800 font-bold'
                                    >
                                        {formState.errors[el]!.message}
                                    </p>
                                )
                            )}
                    </div>

                    <AuthInput placeholder='Ваша почта' type='email' {...register('email')}/>
                    <AuthInput placeholder='Ваш пароль' type='password' {...register('password')}/>
                    <div className='flex justify-center '>
                        <Button type="submit" size='LARGE'>
                            Ввойти
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    );
};
