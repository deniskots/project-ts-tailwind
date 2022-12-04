import clsx from 'clsx';
import React, {FC} from 'react';
import {NavLink, useSearchParams} from "react-router-dom";

interface ArticleItem {
    text: string;
    link: string;
}

interface ArticleToggleProps {
    defaultText?: string;
    defaultLink?: string;
    items?: ArticleItem[];
}

export const ArticleToggle: FC<ArticleToggleProps> = ({
                                                          defaultText = 'Все публикации',
                                                          defaultLink = '/',
                                                          items = [],
                                                      }) => {
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');

    const globalClasses = ({ isActive }: { isActive: boolean }) => {
        return clsx('bg-white border-theme-green py-2 px-4 hover:no-underline', {
            'text-black/30 hover:text-black/60': tag || !isActive,
        });
    };
    return (
        <div className="h-8 font-russo mt-4">
            <ul className="flex">
                <li>
                    <NavLink to={defaultLink} className={globalClasses} end>
                        {defaultText}
                    </NavLink>
                    {items.map((item) => (
                        <NavLink
                            to={item.link}
                            className={globalClasses}
                            key={item.link}
                        >
                            {item.text}
                        </NavLink>
                    ))}
                    {tag && (
                        <span className="bg-white py-2 px-4 text-theme-red">
              # {tag}
            </span>
                    )}
                </li>
            </ul>
        </div>
    );
};

