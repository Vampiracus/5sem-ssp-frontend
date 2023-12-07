import React from 'react';

type Props = {
    closeFunc: () => void
}

const CloseButton: React.FC<Props> = ({ closeFunc }) => {
    React.useEffect(() => {
        const closer = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeFunc();
            }
        };
        window.addEventListener('keydown', closer);
        return () => {
            window.removeEventListener('keydown', closer);
        };
    });

    return (
        <button className='popup-content__content__close-button' onClick={closeFunc}>
            X
        </button>
    );
};

export default CloseButton;
