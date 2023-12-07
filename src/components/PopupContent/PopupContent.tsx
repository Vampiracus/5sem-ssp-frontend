import React from 'react';
import './PopupContent.scss';
import CloseButton from './CloseButton/CloseButton';

type Props = {
    active: boolean
    setActive: (e: boolean) => void
}

// eslint-disable-next-line max-len
const PopupContent: React.FC<React.PropsWithChildren<Props>> = ({ active, children, setActive }) => {
    const clickHandler = React.useCallback((e: React.MouseEvent | KeyboardEvent) => {
        //@ts-expect-error firstElementChild IS in e.target!
        if (e.target.firstElementChild?.classList.contains('popup-content__content'))
            setActive(false);
    }, [setActive]);

    return (
        <div 
            className={'popup-content ' + (active && 'popup-content_active' || '')}
            onClick={clickHandler}
        >
            <div className={'popup-content__content'}>
                <CloseButton closeFunc={setActive.bind({}, false)}/>
                {children}
            </div>
        </div>
    );
};

export default PopupContent;
