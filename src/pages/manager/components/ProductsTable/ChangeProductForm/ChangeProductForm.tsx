import React from 'react';
import './../../../../../components/NewItemForm/NewItemForm.scss';
import { putProduct } from '../../../../../API/products';
import Input from '../../../../../components/Input/Input';
import { validateName, validatePositiveNumber } from '../../../../../utils/validation/validation';
import Button from '../../../../../components/Button/Button';
import Notification from '../../../../../components/Notification/Notification';

type Props = {
    setCreatedNewItems: (a: number) => void
    createdNewItems: number
}

const ChangeProductForm: React.FC<Props> = ({ setCreatedNewItems, createdNewItems }) => {
    const [productId, setProductId] = React.useState('');
    const [productName, setProductName] = React.useState('');
    const [productCost, setProductCost] = React.useState('');
    const [notText, setNotText] = React.useState('');
    
    
    const putItem: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        setProductId('');
        setProductCost('');
        setProductName('');
        putProduct(productId, productName, Number(productCost))
            .then(res => {
                if (res === 'OK') {
                    setCreatedNewItems(createdNewItems + 1);
                } else {
                    setNotText(res);
                }
            }).catch(() => {});
    };

    return (
        <form className='new-item-form'>
            <Notification text={notText} setText={setNotText}/>
            <Input
                prefix='new-product-item'
                name='id'
                value={productId}
                setValue={setProductId}
                validationFunction={validatePositiveNumber}
                placeholder='ID товара'
                autoFocus
            /> 
            <Input
                prefix='new-product-item'
                name='name'
                value={productName}
                setValue={setProductName}
                validationFunction={validateName}
                placeholder='Новое название'
            /> 
            <Input
                prefix='new-product-item'
                name='cost'
                value={productCost}
                setValue={setProductCost}
                validationFunction={validatePositiveNumber}
                placeholder='Новая цена'
            /> 
            <Button
                onClick={putItem}>Изменить существующий товар!</Button>
        </form>
    );
};

export default ChangeProductForm;
