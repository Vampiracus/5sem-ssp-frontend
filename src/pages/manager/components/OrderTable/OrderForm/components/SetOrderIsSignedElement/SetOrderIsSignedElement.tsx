import React from 'react';
import { setContractIsSigned } from '../../../../../../../API/orders';

type Props = {
    order: Order
    updateOrders: () => void
    user: Manager
    hasShipments?: true
}

const SetOrderIsSignedElement: React.FC<Props> = ({ order, updateOrders, user, hasShipments }) => {

    if (!((order.status === 'Ожидается подпись контракта' && !hasShipments)
        || order.status === 'Готов' && hasShipments)
        || user.login !== order.manager_login)
        return <></>;

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
                {
                    !hasShipments
                    ? 'Поставить отметку о том, что клиент подписал контракт'
                    : 'Поставить отметку, что заказ в обработке'
                }
            </span>
        </p>
    );
};

export default SetOrderIsSignedElement;
