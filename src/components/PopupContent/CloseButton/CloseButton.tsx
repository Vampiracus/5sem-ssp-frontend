import React from 'react';

const CloseButton: React.FC<{onClick: React.MouseEventHandler}> = ({ onClick }) => {
    return (
        <button className='popup-content__content__close-button' onClick={onClick}>
            X
        </button>
    );
};

export default CloseButton;
