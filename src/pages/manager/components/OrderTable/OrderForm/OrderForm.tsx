import React, { useEffect } from 'react';
import './OrderForm.scss';
import { getOrderItems } from '../../../../../API/orders';
import PopupContent from '../../../../../components/PopupContent/PopupContent';
import TableItem from '../../../../../components/TableItem/TableItem';
import AssignContractForm from './components/AssignContractForm/AssignContractForm';
import SetOrderIsSignedElement from './components/SetOrderIsSignedElement/SetOrderIsSignedElement';
import SetOrderIsReadyElement from './components/SetOrderIsReadyElement/SetOrderIsReadyElement';
// eslint-disable-next-line max-len
import ResponsibleManagerControls from './components/ResponsibleManagerEls/ResponsibleManagerControls';

type Props = {
    order: Order | null
    active: boolean
    setActive: (a: boolean) => void
    updateOrders: () => void
    user: ExistingManager
}

const OrderForm: React.FC<Props> = ({ order, active, setActive, updateOrders, user }) => {
    const [items, setItems] = React.useState<OrderItem[]>([]);

    useEffect(() => {
        if (!order) return;
        getOrderItems(order.id)
            .then(res => {
                setItems(res);
            });
    }, [order]);

    if (!order) return <></>;

    return (
        <PopupContent active={active} setActive={setActive}>
            <div className='manager-order-form'>
                <p>
                    Статуз заказа: <code>{order?.status}</code>
                </p>
                <SetOrderIsSignedElement order={order} updateOrders={updateOrders} user={user}/>
                <AssignContractForm order={order} updateOrders={updateOrders} user={user}/>
                <SetOrderIsReadyElement order={order} updateOrders={updateOrders} user={user}/>
                <p>Содержание заказа:</p>
                <TableItem item={{
                    id: 'ID строки заказа',
                    product_count: 'Количество товара',
                    order_id: 'Номер заказа',
                    product_id: 'Номер товара',
                    product_name: 'Название товара',
                    shipped: 'Доставлено',
                }} isFirst/>
                {items.map((item, index) => (
                    <TableItem 
                        key={index}
                        item={item}
                        isFirst={false}
                        isLast={index === items.length - 1}
                    />
                ))}
                <ResponsibleManagerControls order={order} updateOrders={updateOrders} user={user}/>
            </div>
        </PopupContent>
    );
};

export default OrderForm;
