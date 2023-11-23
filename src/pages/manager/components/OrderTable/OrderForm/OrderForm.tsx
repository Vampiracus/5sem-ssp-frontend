import React, { useEffect } from 'react';
import './OrderForm.scss';
import { getOrderItems } from '../../../../../API/orders';
import PopupContent from '../../../../../components/PopupContent/PopupContent';
import TableItem from '../../../../../components/TableItem/TableItem';
import AssignContractForm from './components/AssignContractForm/AssignContractForm';
import SetOrderIsSignedElement from './components/SetOrderIsSignedElement/SetOrderIsSignedElement';
import SetOrderIsReadyElement from './components/SetOrderIsReadyElement/SetOrderIsReadyElement';

type Props = {
    order: Order | null
    active: boolean
    setActive: (a: boolean) => void
    updateOrders: () => void
}

const OrderForm: React.FC<Props> = ({ order, active, setActive, updateOrders }) => {
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
                <SetOrderIsSignedElement order={order} updateOrders={updateOrders}/>
                <AssignContractForm order={order} updateOrders={updateOrders}/>
                <SetOrderIsReadyElement order={order} updateOrders={updateOrders}/>
                <TableItem item={{
                    id: 'ID',
                    product_count: 'Количество товара',
                    order_id: 'Номер заказа',
                    product_id: 'Номер товара',
                    product_name: 'Название товара',
                }} isFirst/>
                {items.map((item, index) => (
                    <TableItem 
                        key={index}
                        item={item}
                        isFirst={false}
                        isLast={index === items.length - 1}
                    />
                ))}
            </div>
        </PopupContent>
    );
};

export default OrderForm;
