import React from 'react';
import Input from '../../../../../../components/Input/Input';
import { validatePositiveNumber } from '../../../../../../utils/validation/validation';
import Button from '../../../../../../components/Button/Button';
import './NewItemForm.scss';
import { postOrderItem } from '../../../../../../API/orders';

type Props = {
    order_id: number,
    setCreatedNewItems: (a: number) => void
    createdNewItems: number
}

const NewItemForm: React.FC<Props> = ({ order_id, setCreatedNewItems, createdNewItems }) => {
    const [productId, setProductId] = React.useState('');
    const [productNumber, setProductNumber] = React.useState('');
    const [isProductIdIncorrect, setIsProductIdIncorrect] = React.useState(false);
    
    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        postOrderItem(order_id, Number(productId), Number(productNumber))
            .then(res => {
                if (res !== 'OK') {
                    setIsProductIdIncorrect(true);
                } else {
                    setIsProductIdIncorrect(false);
                    setCreatedNewItems(createdNewItems + 1);
                }
            }).catch(() => {});
    };

    return (
        <form className='new-item-form'>
            <Input
                prefix='new-item'
                name='product_id'
                value={productId}
                setValue={setProductId}
                validationFunction={validatePositiveNumber}
                className='1'
                isIncorrect={isProductIdIncorrect}
            /> 
            <Input
                prefix='new-item'
                name='product_count'
                value={productNumber}
                setValue={setProductNumber}
                validationFunction={validatePositiveNumber}
                className='1'
            /> 
            <Button
                className='order-form__new-item-button'
                onClick={clickHandler}>Добавить новый товар!</Button>
        </form>
    );
};

export default NewItemForm;
