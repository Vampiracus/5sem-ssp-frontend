import React from 'react';

import './button.scss';

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string,
}

const Button: React.FC<React.PropsWithChildren<Props>>
= ({ children, onClick, className }) => {
    return (
        <button className={'button ' + (className || '')} onClick={onClick}>
            { children }
        </button>
    );
};

export default Button;
