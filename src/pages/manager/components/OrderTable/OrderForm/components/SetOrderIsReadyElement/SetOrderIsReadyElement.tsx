import React from 'react';
import { setOrderIsReady } from '../../../../../../../API/orders';

type Props = {
    order: Order,
    updateOrders: () => void
}

const SetOrderIsReadyElement: React.FC<Props> = ({ order, updateOrders }) => {

    if (order.status !== 'processing') return <></>;

    const setReady: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        setOrderIsReady(order.id)
            .then(() => {
                updateOrders();
            });
    };

    return (
        <p>
            <span className='span-link' onClick={setReady}>
                Уведомить клиента о том, что заказ готов к выдаче
            </span>
        </p>
    );
};

export default SetOrderIsReadyElement;
