import React, {FC} from 'react';
import {BsPlus} from "react-icons/bs";
import {Button} from "../Button/Button";


interface FollowButtonProps {
    username: string;
}

export const FollowButton: FC<FollowButtonProps> = ({username}) => {
    return (
        <Button>
            <div>
                {/*<span><BsPlus/></span>&nbsp;*/}
                Подписаться на {username}
            </div>

        </Button>
    );
};