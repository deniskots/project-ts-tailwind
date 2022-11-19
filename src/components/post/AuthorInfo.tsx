import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {DateTime} from "luxon";
import {Author} from "../../api/dto/global-feed.in";

interface AuthorInfoProps {
    author: Author,
    createdAt: string
}

const AuthorInfo:FC<AuthorInfoProps> = ({author, createdAt}) => {
    return (
        <div className='flex'>
            <Link to={`/@${author.username}`}>
                <img src={author.image}
                     alt="ava"
                     className='inline-block w-10 h-10 rounded-full'/>
            </Link>
            <div className='mr-6 ml-2 inline-flex flex-col '>
                <Link to={`/@${author.username}`} className='font-medium text-theme-green'>
                    {author.username}
                </Link>
                <span className='text-theme-grey text-sm'>{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
            </div>
        </div>
    );
};

export default AuthorInfo;
