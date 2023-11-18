import React from 'react';
import Input from '../../../../../components/Input/Input';
import PopupContent from '../../../../../components/PopupContent/PopupContent';
import Button from '../../../../../components/Button/Button';

type Props = {
    order: Order | null
    active: boolean
    setActive: (a: boolean) => void
}

const OrderForm: React.FC<Props> = ({ order, active, setActive }) => {
    const itemStub: OrderItem = {
        id: 'NULL',
        product_count: 0,
        product_id: 0,
        order_id: 'NULL',
    };

    const [items, setItems] = React.useState<OrderItem[]>([itemStub]);
    

    return (
        <PopupContent active={active} setActive={setActive}>
            <form>
                <Button>Добавить новый товар!</Button>
            </form>
        </PopupContent>
    );
};

export default OrderForm;
