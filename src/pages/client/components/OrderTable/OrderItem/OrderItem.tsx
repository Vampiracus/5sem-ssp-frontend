import React from 'react';
import './OrderItem.scss';

type Props = {
    order: Order,
    isLast?: boolean,
    isFirst: boolean
}

const OrderItem: React.FC<Props> = ({ order, isLast, isFirst }) => {
    if (!order) return <></>;
    return (
        <div className={'order-item ' 
            + (isLast && 'order-item_last ' || '')
            + (isFirst && 'order-item_first ' || '')}>
            <div className='order-item__micro'>{order.id}</div>
            <div className='order-item__micro'>{order.total}</div>
            <div className='order-item__micro'>{order.contract}</div>
            <div className='order-item__micro'>
                {order.contract_date ? (new Date(order.contract_date)).toLocaleDateString() : 'NO'}
            </div>
            <div className='order-item__micro order-item__micro_right'>{order.status}</div>
        </div>
    );
};

export default OrderItem;
