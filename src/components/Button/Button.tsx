import React from 'react';

import './button.scss';

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string,
    type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<React.PropsWithChildren<Props>>
= ({ children, onClick, className, ...props }) => {
    return (
        <button className={'button ' + (className || '')} onClick={onClick} {...props}>
            { children }
        </button>
    );
};

export default Button;
