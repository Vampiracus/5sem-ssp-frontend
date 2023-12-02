import React, { useEffect } from 'react';
import './Notification.scss';

type Props = {
    text: string
    setText: (s: string) => void
}

const Notification: React.FC<Props> = ({ text, setText }) => {
    const [timer, setTimer] = React.useState<undefined | number>(undefined);
    useEffect(() => {
        if (text !== '' && typeof text === 'string') {
            setTimer(setTimeout(() => {
                setText('');
            }, 3900));
        }

        return () => {
            if (timer)
                clearTimeout(timer);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, setText]);

    if (text === '' || typeof text !== 'string') return <></>;
    
    return (
        <div className='notification' onClick={() => setText('')}>
            <b>Уведомление:</b> {text}
        </div>
    );
};

export default Notification;
