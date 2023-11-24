import React from 'react';
import { setContractIsSigned } from '../../../../../../../API/orders';

type Props = {
    order: Order
    updateOrders: () => void
    user: ExistingManager
}

const SetOrderIsSignedElement: React.FC<Props> = ({ order, updateOrders, user }) => {

    if (order.status !== 'processing (no signature)' || user.login !== order.manager_login)
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
                Поставить отметку о том, что клиент подписал контракт
            </span>
        </p>
    );
};

export default SetOrderIsSignedElement;
