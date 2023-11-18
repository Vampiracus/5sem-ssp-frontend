import React, { useEffect } from 'react';
import PopupContent from '../../../../components/PopupContent/PopupContent';
import OrderItemsElement from './components/OrderItemsElement/OrderItemsElement';
import './OrderForm.scss';
import NewItemForm from './components/NewItemForm/NewItemForm';
import { getOrderItems } from '../../../../API/orders';

type Props = {
    order: Order | null
    active: boolean
    setActive: (a: boolean) => void
}

const OrderForm: React.FC<Props> = ({ order, active, setActive }) => {
    const [items, setItems] = React.useState<OrderItem[]>([]);
    const [createdNewItems, setCreatedNewItems] = React.useState(0);
    

    useEffect(() => {
        if (!order) return;
        getOrderItems(order.id)
            .then(res => {
                setItems(res);
            });
    }, [order, createdNewItems]);


    return (
        <PopupContent active={active} setActive={setActive}>
            <div className='order-form'>
                <OrderItemsElement item={{
                    product_id: 'Номер товара',
                    product_count: 'Количество товара',
                    id: 'ID',
                    order_id: 'NULL',
                } as unknown as OrderItem} isFirst/>
                {items.map((item, index) => (
                    <OrderItemsElement 
                        item={item}
                        isFirst={false}
                        isLast={index === items.length - 1}
                        key={index}
                        setCreatedNewItems={setCreatedNewItems}
                        createdNewItems={createdNewItems}
                    />
                ))}
                {
                    order?.status === 'created' || order?.status === 'waiting for changes'
                        ? <NewItemForm
                            order_id={order ? order.id : 0}
                            setCreatedNewItems={setCreatedNewItems}
                            createdNewItems={createdNewItems}/>
                        : (<></>)
                }
            </div>
        </PopupContent>
    );
};

export default OrderForm;
