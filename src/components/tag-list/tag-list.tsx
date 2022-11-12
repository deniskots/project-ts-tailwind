import React, {FC} from 'react';
import clsx from "clsx";
import {Link} from "react-router-dom";

enum TagListStyle {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}

interface TagListProps {
    list: string[];
    tagStyle?: keyof typeof TagListStyle;
    itemsAs?: 'li' | 'a';
}

export const TagList: FC<TagListProps> = ({list, tagStyle = TagListStyle.LIGHT, itemsAs= 'li'}) => {
    const tagClasses = clsx('font-light text-sm border border mr-1 px-1 rounded mb-2',
        {'border-theme-grey text-theme-grey': tagStyle === TagListStyle.LIGHT,
        'bg-theme-tagItemBg text-white hover:no-underline': tagStyle ===TagListStyle.DARK})
    return (
        <div>
            <ul className='flex flex-wrap'>
                {list.map(tag => {
                    return itemsAs === 'li' ? (
                        <li key={tag} className={tagClasses}>{tag}</li>
                    ) : (
                        <Link to={`/?tag=${tag}`} key={tag} className={tagClasses}>{tag}</Link>
                    )
                }
                )}
            </ul>
        </div>
    );
};


