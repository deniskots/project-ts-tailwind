import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {DateTime} from "luxon";
import {Author} from "../../api/dto/global-feed.in";
import clsx from "clsx";

export enum DirectionsEnum {
ROW = 'ROW',
COL = 'COL',
}

interface AuthorInfoProps {
    author: Author,
    publishedAt: string
    direction?: keyof typeof DirectionsEnum
}

export const AuthorInfo: FC<AuthorInfoProps> = ({
                                                    author,
                                                    publishedAt,
                                                    direction= DirectionsEnum.COL
}) => {
   const MetaClasses = clsx('mr-6 ml-2 inline-flex', {
       'flex-row items-center gap-2': direction === DirectionsEnum.ROW,
       'flex-col': direction === DirectionsEnum.COL
   })
    return (
        <div className='flex'>
            <Link to={`/@${author.username}`}>
                <img src={author.image}
                     alt="ava"
                     className='inline-block w-10 h-10 rounded-full'/>
            </Link>
            <div className={MetaClasses}>
                <Link
                    to={`/@${encodeURIComponent(author.username)}`}
                    className='font-medium text-theme-green'
                >
                    {author.username}
                </Link>
                <span className='text-theme-grey text-sm'>
                    {DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_FULL)}
                </span>
            </div>
        </div>
    );
};

