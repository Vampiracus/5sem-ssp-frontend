import React from 'react';
import { setContractIsSigned } from '../../../../../../../API/orders';

type Props = {
    order: Order,
    updateOrders: () => void
}

const SetOrderIsSignedElement: React.FC<Props> = ({ order, updateOrders }) => {

    if (order.status !== 'processing (no signature)') return <></>;

    const setSigned: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        setContractIsSigned(order.id)
            .then(() => {
                updateOrders();
            });
    };

    return (
        <p>
            <span className='span-link' onClick={setSigned}>
                Поставить отметку о том, что клиент подписал контракт
            </span>
        </p>
    );
};

export default SetOrderIsSignedElement;
