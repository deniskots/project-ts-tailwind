import React, {FC, PropsWithChildren} from 'react';

interface ContainerProps {}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto'>
            {children}
        </div>
    );
};
