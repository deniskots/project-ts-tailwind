import React, {FC} from 'react';
import {FaRegHeart} from "react-icons/fa";
import {useAuth} from "../../hooks/use-auth";
import {useNavigate} from "react-router-dom";
import {routes} from "../../utils/routes";
import {useGetDislikeArticleMutation, useGetFavoriteArticleMutation} from "../../api/ProjectApi";
import { Button } from '../Button/Button';


interface LikeButtonProps {
    count: number,
    slug: string,
    isFavorite?: boolean
}

export const LikeButton: FC<LikeButtonProps> = ({count, slug, isFavorite= false}) => {
    const {isLogged} = useAuth()
    const navigate = useNavigate()

    const [favoriteMut, favoriteMutState] = useGetFavoriteArticleMutation();
    const [dislikeMutation, dislikeMutationState] = useGetDislikeArticleMutation();

    const favoriteClick = async () => {
        if (!isLogged) {
            navigate(routes.signIn.path)
            return
        }
        if(isFavorite) {
            await dislikeMutation({slug})
        } else {
            await favoriteMut({slug})
        }

    }
    return (
        <>
            <Button size='SMALL' btnColor='DARK' onClick={favoriteClick}
                    disabled={favoriteMutState.isLoading || dislikeMutationState.isLoading}>
                <FaRegHeart/>
                <span className='ml-1'>{count}</span>
            </Button>
        </>

    );
};


