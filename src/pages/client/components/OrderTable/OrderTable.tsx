import React from 'react';
import './OrderTable.scss';
import TableItem from '../../../../components/TableItem/TableItem';
import { deleteOrder } from '../../../../API/orders';

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
            <TableItem item={{
                id: '№',
                total: 'Сумма заказа',
                contract: 'Номер контракта',
                contract_date: 'Дата контракта',
                status: 'Статус заказа',
            }} isFirst/>
            {
                orders.map((order, index) => {
                    const item = { ...order };
                    if (item.contract === null) item.contract = 'NO';
                    item.contract_date
                    = item.contract_date ? (new Date(item.contract_date)).toLocaleDateString() : '';
                    return (
                        <TableItem 
                            key={item.id}
                            item={item as Record<string, string | number>}
                            isFirst={false}
                            isLast={index === orders.length - 1}
                            setSelectedItem={setSelectedOrder}
                            setIsItemSelected={setIsOrderSelected}
                            createdItems={createdOrders}
                            setCreatedItems={setCreatedOrders}
                            // eslint-disable-next-line max-len
                            deleteFunction={order.status === 'created' || order.status === 'waiting for changes' ? deleteOrder : undefined}/>
                    );
                })}
        </div>
    );
};

export default OrderTable;
