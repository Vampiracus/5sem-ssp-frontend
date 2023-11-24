import React from 'react';
import { blockOrder, unblockOrder } from '../../../../../../../API/orders';

type Props = {
    user: ExistingManager,
    order: Order,
    updateOrders: () => void
}

const ResponsibleManagerControls: React.FC<Props> = ({ order, updateOrders, user }) => {
    const block: React.MouseEventHandler<HTMLButtonElement> = () => {
        blockOrder(order.id)
            .then(() => updateOrders());
    };

    const unblock: React.MouseEventHandler<HTMLButtonElement> = () => {
        unblockOrder(order.id)
            .then(() => updateOrders());
    };

    return (
        <p>
            Ответственный менеджер: {order.manager_login ? order.manager_login : 'нет'} <br/>
            {
                !order.manager_login 
                    ? <span className='span-link' onClick={block}>
                        Заблокировать
                    </span>
                    : order.manager_login === user.login
                        ? <span className='span-link' onClick={unblock}>
                            Разблокировать
                        </span>
                        : ''
            }
        </p>
    );
};

export default ResponsibleManagerControls;
