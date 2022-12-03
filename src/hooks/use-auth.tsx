import {selectUser, setUser} from "../slices/AuthSlice";
import {useAppDispatch, useAppSelector} from "../store/store";
import {useLazySignInQuery, useLazySignUpQuery} from "../api/AuthApi";
import { SignInOut } from "../api/dto/sign-in.out";
import {SignUpOut} from "../api/dto/sign-up.out";


export const useAuth = () => {
    const dispatch = useAppDispatch()

    const user = useAppSelector(selectUser)
    const isLogged = Boolean(user)

    const [triggerSignUp] = useLazySignUpQuery()
    const [triggerSignIn] = useLazySignInQuery()

    const signIn = async(values: SignInOut['user']) => {
        const {data} = await triggerSignIn(values, false)
        if(!data) {
            throw new Error('No data in query')
        }
        dispatch(setUser(data.user))
    }

    const signUp = async (values: SignUpOut['user']) => {
        const {data} = await triggerSignUp(values, false)
        if(!data) {
            throw new Error('No data in query')
        }
        dispatch(setUser(data.user))
    }

    const logOut = () => {
        dispatch(setUser(null))
    }

    return {isLogged, signIn, signUp, logOut, user}
}