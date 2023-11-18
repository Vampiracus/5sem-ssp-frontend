import React from 'react';
import './OrderItemsElement.scss';
import { deleteOrderItem } from '../../../../../../API/orders';

type Props = {
    item: OrderItem,
    isLast?: boolean,
    isFirst: boolean
    setCreatedNewItems?: (a: number) => void
    createdNewItems?: number
}

const OrderItemsElement: React.FC<Props>
= ({ item, isLast, isFirst, setCreatedNewItems, createdNewItems }) => {
    if (!item) return <></>;
    
    const eraser: React.MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();
        deleteOrderItem(item.id === 'NULL' ? 0 : item.id)
            .then(() => {
                setCreatedNewItems!(createdNewItems! - 1);
            });
    };
    return (
        <div className={'order-item-element ' 
            + (isLast && 'order-item-element_last ' || '')
            + (isFirst && 'order-item-element_first ' || '')}>
            <div className='order-item-element__micro'>{item.id}</div>
            <div className='order-item-element__micro'>{item.product_id}</div>
            <div className='order-item-element__micro'>
                {item.product_count}
            </div>
            <div className='order-item-element__micro order-item-element__micro_right'>
                {
                    isFirst
                        ? 'Удалить' 
                        : <div 
                            className='order-item-element__micro__delete-button'
                            onClick={eraser}>X</div>
                }
            </div>
        </div>
    );
};

export default OrderItemsElement;
