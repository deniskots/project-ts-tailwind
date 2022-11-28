import React, {FC} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Container} from "../../components/container/container.comp";
import {AuthInput} from "../../components/authInput/AuthInput";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from "../../components/Button/Button";
import {useLazySignUpQuery} from "../../api/AuthApi";
import { toast } from 'react-toastify';
import {useAppDispatch} from "../../store/store";
import {setUser} from "../../slices/SignUpSlice";

export interface SignUpPageProps {
}

interface SignUpFormValues {
    username: string;
    email: string;
    password: string;

}

let validSchema = yup.object({
    username: yup.string().required().min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
});

export const SignUpPage: FC<SignUpPageProps> = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const {register, handleSubmit, formState} = useForm<SignUpFormValues>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(validSchema),
    });

    const [triggerSignUp] = useLazySignUpQuery()

    const onSubmitH =  async (values: SignUpFormValues) => {
        try{
           const {data} = await triggerSignUp(values, false)
            if(!data) {
                throw new Error('No data in query')
            }
            dispatch(setUser(data.user))
            navigate('/')
        }catch (e) {
            toast.error('Что-то пошло не так...')
        }
    }

    return (
        <Container>
            <div className='mt-8'>
                <h1 className='text-4xl font-bold text-center mb-4'>Регистрация</h1>
                <p className='text-center mb-8'><Link to='/sign-in'>Уже есть аккаунт...</Link></p>
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

                    <AuthInput placeholder='Ваше имя' type='text'{...register('username')}/>
                    <AuthInput placeholder='Ваша почта' type='email' {...register('email')}/>
                    <AuthInput placeholder='Ваш пароль' type='password' {...register('password')}/>
                    <div className='flex justify-center '>
                        <Button type="submit" size='LARGE'>
                            Создать
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

