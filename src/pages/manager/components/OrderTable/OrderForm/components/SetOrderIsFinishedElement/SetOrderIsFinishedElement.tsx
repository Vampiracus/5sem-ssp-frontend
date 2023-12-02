import React from 'react';
import { setOrderIsFinished } from '../../../../../../../API/orders';

type Props = {
    user: Manager
    order: Order
    updateOrders: () => void
    items: OrderItem[]
}

function actuallyReady(items: OrderItem[]) {
    return items.reduce<boolean>((prev, cur) => prev && (cur.product_count === cur.shipped), true);
}

const SetOrderIsFinishedElement: React.FC<Props> = ({ order, updateOrders, user, items }) => {

    const [uSure, setUSure] = React.useState<boolean>(false);
    
    if (order.status !== 'Готов' || user.login !== order.manager_login) return <></>;

    const setFinished: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!uSure && !actuallyReady(items)) {
            setUSure(true);
            return;
        }
        setOrderIsFinished(order.id)
            .then(() => {
                updateOrders();
            });
    };

    return (
        <p>
            {
                uSure
                ? <>
                    <span className='usure'>
                        Вы уверены? По некоторым позициям в заказе отгружен не весь товар
                    </span>
                    <br/>
                </>
                : ''
            }
            <span className='span-link' onClick={setFinished}>
                Отметить, что заказ выполнен
            </span>
        </p>
    );
};

export default SetOrderIsFinishedElement;
