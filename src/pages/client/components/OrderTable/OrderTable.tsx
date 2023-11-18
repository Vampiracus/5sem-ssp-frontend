import React from 'react';
import './OrderTable.scss';
import OrderItem from './OrderItem/OrderItem';

type Props = {
    orders: Order[],
    setSelectedOrder: (o: Order) => void
    setIsOrderSelected: (o: boolean) => void
    createdOrders: number
    setCreatedOrders: (n: number) => void
}

const OrderTable: React.FC<Props> = ({
    orders, setSelectedOrder,
    setIsOrderSelected, createdOrders, setCreatedOrders,
}) => {
    return (
        <div className='order-table'>
            <OrderItem order={{
                id: '№',
                total: 'Сумма заказа',
                contract: 'Номер контракта',
                contract_date: 'Дата контракта',
                status: 'Статус заказа',
            } as unknown as Order} isFirst/>
            {orders.map((order, index) => (
                <OrderItem 
                    order={order}
                    isFirst={false}
                    isLast={index === orders.length - 1}
                    key={order.id}
                    setSelectedOrder={setSelectedOrder}
                    setIsOrderSelected={setIsOrderSelected}
                    setCreatedOrders={setCreatedOrders}
                    createdOrders={createdOrders}
                />
            ))}
        </div>
    );
};

export default OrderTable;
