import React from 'react';
import Input from '../../../../../../../components/Input/Input';
import Button from '../../../../../../../components/Button/Button';
import {
    validateDate,
    validatePositiveNumber
} from '../../../../../../../utils/validation/validation';
import './AddShippmentForm.scss';
import { postShipment } from '../../../../../../../API/shipments';

type Props = {
    user: Manager
    order: Order
    updateOrders: () => void
}

const AddShippmentForm: React.FC<Props> = ({ order, updateOrders, user }) => {
    const [shipped, setShipped] = React.useState('');
    const [date, setDate] = React.useState('');
    const [orderItemID, setOrderItemID] = React.useState('');

    if (order.status !== 'Готов' || order.manager_login !== user.login)
        return <></>;

    const sendOrderContract: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        postShipment(date,  orderItemID, shipped, user.login)
            .then(res => {
                if (res === 'OK') {
                    updateOrders();
                }
            })
            .catch(err => alert(err));
    };

    return (
        <>
            <div>
                <span>Добавить отгрузку по заказу:</span>
                <form className='add-shipment-form'>
                    <Input
                        prefix='add-shipment-item'
                        name='date'
                        value={date}
                        setValue={setDate}
                        validationFunction={validateDate}
                        placeholder='Дата отгрузки'
                    /> 
                    <Input
                        prefix='add-shipment-item'
                        name='order-item-id'
                        value={orderItemID}
                        setValue={setOrderItemID}
                        validationFunction={validatePositiveNumber}
                        placeholder='ID строки заказа'
                    /> 
                    <Input
                        prefix='add-shipment-item'
                        name='shipped'
                        value={shipped}
                        setValue={setShipped}
                        validationFunction={validatePositiveNumber}
                        placeholder='Отгружено (шт)'
                    /> 
                    <Button
                        className='manager-order-form__send-button'
                        onClick={sendOrderContract}>Добавить отгрузку</Button>
                </form>
            </div>
        </>
    );
};

export default AddShippmentForm;
