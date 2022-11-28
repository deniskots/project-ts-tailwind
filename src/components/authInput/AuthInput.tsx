import React, {ComponentProps, forwardRef} from 'react';
import {ref} from "yup";

interface AuthInputProps{
    placeholder: ComponentProps<'input'>['placeholder'],
    name: ComponentProps<'input'>['name']
    type?: ComponentProps<'input'>['type']
    onChange: ComponentProps<'input'>['onChange']
    onBlur: ComponentProps<'input'>['onBlur']
}

export const AuthInput =  forwardRef<HTMLInputElement, AuthInputProps>(({...AuthInputProps}, ref) => {
    return (
        <input
            ref={ref}
            {...AuthInputProps}
            className='border py-2 px-6 rounded text-xl text-slate-600 w-full'
        />
    );
});
