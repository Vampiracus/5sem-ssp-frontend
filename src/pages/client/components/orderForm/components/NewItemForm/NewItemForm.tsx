import React from 'react';
import Input from '../../../../../../components/Input/Input';
import { validatePositiveNumber } from '../../../../../../utils/validation/validation';
import Button from '../../../../../../components/Button/Button';
import './../../../../../../components/NewItemForm/NewItemForm.scss';
import { postOrderItem, sendOrder as sendOrderAPI } from '../../../../../../API/orders';
import Notification from '../../../../../../components/Notification/Notification';

type Props = {
    order_id: number,
    setCreatedNewItems: (a: number) => void
    createdNewItems: number
    updateOrders: () => void
}

// eslint-disable-next-line max-len
const NewItemForm: React.FC<Props> = ({ order_id, setCreatedNewItems, createdNewItems, updateOrders }) => {
    const [productId, setProductId] = React.useState('');
    const [productNumber, setProductNumber] = React.useState('');
    const [isProductIdIncorrect, setIsProductIdIncorrect] = React.useState(false);
    const [notText, setNotText] = React.useState('');
    

    const addNewItem: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        setProductId('');
        setProductNumber('');
        postOrderItem(order_id, Number(productId), Number(productNumber))
            .then(res => {
                if (res !== 'OK') {
                    setIsProductIdIncorrect(true);
                    setNotText(res);
                } else {
                    setIsProductIdIncorrect(false);
                    setCreatedNewItems(createdNewItems + 1);
                }
            }).catch(() => {});
    };

    const sendOrder: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        sendOrderAPI(order_id)
            .then(res => {
                if (res === 'OK') {
                    updateOrders();
                } else {
                    setNotText(res);
                }
            });
    };

    return (
        <form className='new-item-form'>
            <Notification text={notText} setText={setNotText} />
            <Input
                prefix='new-order-item'
                name='product_id'
                value={productId}
                setValue={setProductId}
                validationFunction={validatePositiveNumber}
                placeholder='ID товара'
                isIncorrect={isProductIdIncorrect}
                setIsIncorrect={setIsProductIdIncorrect}
            /> 
            <Input
                prefix='new-order-item'
                name='product_count'
                value={productNumber}
                setValue={setProductNumber}
                validationFunction={validatePositiveNumber}
                placeholder='Количество товара'
                maxLength={7}
                isIncorrect={isProductIdIncorrect}
                setIsIncorrect={setIsProductIdIncorrect}
            /> 
            <Button
                className='order-form__new-item-button'
                onClick={addNewItem}>Добавить новый товар</Button>
            <Button
                className='order-form__send-button'
                onClick={sendOrder}
                type='button'>Отправить заказ</Button>
        </form>
    );
};

export default NewItemForm;
