import React, {ComponentProps, FC, PropsWithChildren} from 'react';
import {BsPlus} from "react-icons/bs";
import clsx from "clsx";


interface ButtonProps {
    type?: ComponentProps<'button'>['type']
    onClick?: ComponentProps<'button'>['onClick']
    disabled?: ComponentProps<'button'>['disabled']
    size?: keyof typeof ButtonSizeEnum
    btnColor?: keyof typeof ButtonColorEnum
}
enum ButtonSizeEnum {
    BASE = 'BASE',
    LARGE = 'LARGE',
    SMALL = 'SMALL'
}
enum ButtonColorEnum {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                                               children,
                                                               size= ButtonSizeEnum.BASE,
                                                               btnColor= 'LIGHT',
                                                               ...ButtonProps
}) => {
    const btnClasses = clsx(
        ' border flex items-center',{
            'border-theme-green text-theme-green hover:bg-theme-green hover:text-white': btnColor === ButtonColorEnum.LIGHT,
            'border-theme-green text-white bg-lime-600 hover:text-black hover:bg-stone-200': btnColor === ButtonColorEnum.DARK,
            'py-0 px-1 rounded text-sm': size === ButtonSizeEnum.SMALL,
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