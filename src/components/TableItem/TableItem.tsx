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
    const [wantDelete, setWantDelete] = React.useState(false);
    const [wantDeleteTimeout, setWantDeleteTimeout] = React.useState<null | number>(null);

    React.useEffect(() => () => {
        if (wantDeleteTimeout !== null) {
            clearTimeout(wantDeleteTimeout);
        }
    });

    if (!item) return <></>;

    const eraser: React.MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();
        if (!wantDelete) {
            setWantDelete(true);
            setWantDeleteTimeout(setTimeout(() => {
                setWantDelete(false);
                setWantDeleteTimeout(null);
            }, 2000));
            return;
        }
        setWantDelete(false);
        setWantDeleteTimeout(null);
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
                                title='Нажмите дважды, чтобы удалить'
                                // eslint-disable-next-line max-len
                                className={'table-item__micro__delete-button' + (wantDelete && ' table-item__micro__delete-button_want-delete' || '')}
                                onClick={eraser}>X</div>
                            : ''
                }
            </div>
        </div>
    );
};

export default TableItem;
