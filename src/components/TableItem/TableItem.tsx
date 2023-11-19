import React from 'react';
import './TableItem.scss';

type Props = {
    item: Record<string, string | number>,
    isLast?: boolean,
    isFirst: boolean,

    setSelectedItem?: (o: any) => void
    setIsItemSelected?: (o: boolean) => void
    
    createdItems?: number
    setCreatedItems?: (n: number) => void

    deleteFunction?: (item: any) => Promise<unknown>
}

const TableItem: React.FC<Props> = ({
    item,
    isLast, 
    isFirst,
    setSelectedItem,
    setIsItemSelected,
    createdItems,
    setCreatedItems,
    deleteFunction,
}) => {
    if (!item) return <></>;

    const eraser: React.MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();
        if (deleteFunction && setCreatedItems && createdItems !== undefined) {
            deleteFunction(item)
                .then(() => {
                    setCreatedItems(createdItems - 1);
                });
        }
    };

    return (
        <div 
            className={'table-item ' 
                + (isLast && 'table-item_last ' || '')
                + (isFirst && 'table-item_first ' || '')}
            onClick={setSelectedItem ? () => {
                if (!setIsItemSelected) throw new Error('TableItem misused');
                setSelectedItem(item);
                setIsItemSelected(true);
            } : () => {}}>
            
            {Object.keys(item).map(key => (
                <div className='table-item__micro' key={key}>{item[key]}</div>
            ))}
            <div className='table-item__micro table-item__micro_right'>
                {
                    isFirst
                        ? 'Удалить'
                        : deleteFunction
                            ? <div 
                                className='table-item__micro__delete-button'
                                onClick={eraser}>X</div>
                            : ''
                }
            </div>
        </div>
    );
};

export default TableItem;
