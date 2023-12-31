import React, { useEffect } from 'react';
import PopupContent from '../../../../components/PopupContent/PopupContent';
import './OrderForm.scss';
import NewItemForm from './components/NewItemForm/NewItemForm';
import { deleteOrderItem, getOrderItems } from '../../../../API/orders';
import TableItem from '../../../../components/TableItem/TableItem';

type Props = {
    order: Order | null
    active: boolean
    setActive: (a: boolean) => void
    updateOrders: () => void
}

const OrderForm: React.FC<Props> = ({ order, active, setActive, updateOrders }) => {
    const canchange = order?.status === 'Создано' || order?.status === 'Требуются изменения';
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
                        key={item.id}
                        item={item}
                        isFirst={false}
                        isLast={index === items.length - 1}
                        setCreatedItems={setCreatedNewItems}
                        createdItems={createdNewItems}
                        deleteFunction={canchange ? deleteOrderItem : undefined}
                    />
                ))}
                {
                    canchange
                        ? <NewItemForm
                            order_id={order ? order.id : 0}
                            setCreatedNewItems={setCreatedNewItems}
                            createdNewItems={createdNewItems}
                            updateOrders={updateOrders}/>
                        : (<></>)
                }
            </div>
        </PopupContent>
    );
};

export default OrderForm;
