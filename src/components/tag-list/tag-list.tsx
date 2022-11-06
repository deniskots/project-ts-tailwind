import React, {FC} from 'react';

interface TagListProps {
}

export const TagList: FC<TagListProps> = () => {
    return (
        <div>
            <ul className='flex'>
                <li className='text-theme-grey text-sm font-light border-b-2
        border-theme-grey px-1'>#!</li>
                <li className='text-theme-grey text-sm font-light border-b-2
        border-theme-grey  px-1 ml-2'>#@</li>
                <li className='text-theme-grey text-sm font-light border-b-2
        border-theme-grey px-1 ml-2'>#$</li>
            </ul>
        </div>
    );
};


