import React, {ComponentProps, FC, PropsWithChildren} from 'react';
import {BsPlus} from "react-icons/bs";
import clsx from "clsx";


interface ButtonProps {
    type?: ComponentProps<'button'>['type']
    size?: keyof typeof ButtonSizeEnum
}
enum ButtonSizeEnum {
    BASE = 'BASE',
    LARGE = 'LARGE'
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                                               children,
                                                               size= ButtonSizeEnum.BASE,
                                                               ...ButtonProps
}) => {
    const btnClasses = clsx(
        ' border border-theme-green text-theme-green hover:bg-theme-grey hover:text-black flex items-center',{
            'py-1 px-4 rounded': size === ButtonSizeEnum.BASE,
            'py-2 px-6 rounded text-xl bg-yellow-400 border-none': size === ButtonSizeEnum.LARGE,
        }
    )
    return (
        <button
            className={btnClasses}
            {...ButtonProps}
        >
            {children}
        </button>
    );
};