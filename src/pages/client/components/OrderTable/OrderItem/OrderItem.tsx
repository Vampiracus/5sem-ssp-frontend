import React from 'react';
import './OrderItem.scss';
import { deleteOrder } from '../../../../../API/orders';

type Props = {
    order: Order,
    isLast?: boolean,
    isFirst: boolean,
    setSelectedOrder?: (o: Order) => void
    setIsOrderSelected?: (o: boolean) => void
    
    createdOrders?: number
    setCreatedOrders?: (n: number) => void
}

const OrderItem: React.FC<Props> = ({
    order,
    isLast, isFirst, setSelectedOrder, setIsOrderSelected, createdOrders, setCreatedOrders,
}) => {
    if (!order) return <></>;

    const eraser: React.MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();
        deleteOrder(order.id)
            .then(() => {
                setCreatedOrders!(createdOrders! - 1);
            });
    };

    return (
        <div 
            className={'order-item ' 
                + (isLast && 'order-item_last ' || '')
                + (isFirst && 'order-item_first ' || '')}
            onClick={setSelectedOrder ? () => {
                if (!setIsOrderSelected) throw new Error('OrderItem misused');
                setSelectedOrder(order);
                setIsOrderSelected(true);
            } : () => {}}>
            <div className='order-item__micro'>{order.id}</div>
            <div className='order-item__micro'>{order.total}</div>
            <div className='order-item__micro'>{order.contract}</div>
            <div className='order-item__micro'>
                {!order.contract_date
                    ? 'NO'
                    : isNaN(new Date(order.contract_date) as unknown as number)
                        ? order.contract_date
                        : (new Date(order.contract_date)).toLocaleDateString()}
            </div>
            <div className='order-item__micro'>{order.status}</div>
            <div className='order-item__micro order-item__micro_right'>
                {
                    isFirst
                        ? 'Удалить' 
                        : order.status === 'created' || order.status === 'waiting for changes' 
                            ? <div 
                                className='order-item__micro__delete-button'
                                onClick={eraser}>X</div>
                            : ''
                }
            </div>
        </div>
    );
};

export default OrderItem;
