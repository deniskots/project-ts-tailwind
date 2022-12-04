import React, {FC} from 'react';
import {Link, NavLink} from 'react-router-dom';
import clsx from "clsx";
import {Container} from '../container/container.comp';
import {useAuth} from "../../hooks/use-auth";
import {IoCreateOutline} from "react-icons/io5";
import {FiLogOut, FiSettings} from "react-icons/fi";

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
    const {isLogged, logOut, user} = useAuth()
    const navLinksClsx = ({isActive}: { isActive: boolean }) => clsx('text-theme-white hover:no-underline', {
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
                        <ul className='font-russo text-xl mr-8 flex justify-between list-none'>
                            <li>
                                <NavLink to='/' className={navLinksClsx}>
                                    Главная
                                </NavLink>
                            </li>
                            {isLogged ? (
                                <>
                                    <li className='ml-4'>
                                        <NavLink to='/editor' className={navLinksClsx}>
                                            <IoCreateOutline/>
                                        </NavLink>
                                    </li>
                                    <li className='ml-4'>
                                        <NavLink to='/settings' className={navLinksClsx}>
                                            <FiSettings/>
                                        </NavLink>
                                    </li>
                                    <li className='ml-4'>
                                        <NavLink to = {`/@${user?.username}`} className={navLinksClsx}>
                                            <div className='flex '>
                                                <img className='w-6 h-6 rounded mr-1' src={user?.image} alt="avatar"/>
                                                {user?.username}
                                            </div>

                                        </NavLink>
                                    </li>
                                    <li className='ml-4'>
                                        <NavLink to='/'
                                                 className='text-theme-white hover:no-underline hover:text-theme-black'
                                                 onClick={logOut}>
                                            <FiLogOut/>
                                        </NavLink>
                                    </li>
                                </>
                                ) : (
                                <>
                                <li className='ml-4 font-russo'>
                                <NavLink to='/sign-in' className={navLinksClsx}>
                                Ввойти
                                </NavLink>
                                </li>
                                <li className='ml-4 font-russo'>
                                <NavLink to='/sign-up' className={navLinksClsx}>
                                Создать
                                </NavLink>
                                </li>
                                </>

                                )}
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    );
};


