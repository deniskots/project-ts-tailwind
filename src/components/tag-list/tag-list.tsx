import React, {FC} from 'react';

interface TagListProps {
    list: string[];
}

export const TagList: FC<TagListProps> = ({list}) => {
    return (
        <div>
            <ul className='flex'>
                {list.map(tag => (
                    <li key={tag} className='text-theme-grey text-sm font-light border mr-1
        border-theme-grey px-1'>{tag}</li>
                ))}
            </ul>
        </div>
    );
};


