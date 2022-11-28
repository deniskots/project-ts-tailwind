
import {selectUser, setUser} from "../slices/AuthSlice";
import {useAppDispatch, useAppSelector} from "../store/store";
import {useLazySignInQuery} from "../api/AuthApi";
import { SignInOut } from "../api/dto/sign-in.out";


export const useAuth = () => {
    const dispatch = useAppDispatch()

    const user = useAppSelector(selectUser)
    const isLogged = Boolean(user)

    const [triggerSignIn] = useLazySignInQuery()

    const signIn = async(values: SignInOut['user']) => {
        const {data} = await triggerSignIn(values, false)
        if(!data) {
            throw new Error('No data in query')
        }
        dispatch(setUser(data.user))
    }

    return {isLogged, signIn}
}