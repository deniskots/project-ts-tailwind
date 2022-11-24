import React, {FC} from 'react';
import {Link, NavLink} from 'react-router-dom';
import clsx from "clsx";
import { Container } from '../container/container.comp';

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
    const navLinksClsx = ({isActive}: {isActive: boolean}) => clsx('text-theme-white hover:no-underline', {
        'text-theme-black': isActive
    })
    return (
        <header>
            <nav className='px-4 py-4 bg-amber-400'>
                <Container>
                    <div className='flex justify-between items-center'>
                        <Link to='/' className='font-josefin text-2xl mr-8 text-theme-red'>
                            Your Logo
                        </Link>
                        <ul className='font-josefin text-xl mr-8 flex justify-between list-none'>
                            <li>
                                <NavLink to='/' className={navLinksClsx} >
                                    Главная
                                </NavLink>
                            </li>
                            <li className='ml-4'>
                                <NavLink to='/sign-in' className={navLinksClsx}>
                                    Ввойти
                                </NavLink>
                            </li>
                            <li className='ml-4'>
                                <NavLink to='/sign-up' className={navLinksClsx}>
                                    Создать
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    );
};


