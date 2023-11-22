import React from 'react';
import './AddProductForm.scss';
import './../../../../../components/NewItemForm/NewItemForm.scss';
import { postProduct } from '../../../../../API/products';
import Input from '../../../../../components/Input/Input';
import { validateName, validatePositiveNumber } from '../../../../../utils/validation/validation';
import Button from '../../../../../components/Button/Button';

type Props = {
    setCreatedNewItems: (a: number) => void
    createdNewItems: number
}

const AddProductForm: React.FC<Props> = ({ setCreatedNewItems, createdNewItems }) => {
    const [productName, setProductName] = React.useState('');
    const [productCost, setProductCost] = React.useState('');
    
    const postItem: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        setProductName('');
        setProductCost('');
        postProduct(productName, Number(productCost))
            .then(res => {
                if (res === 'OK') {
                    setCreatedNewItems(createdNewItems + 1);
                }
            }).catch(() => {});
    };

    return (
        <form className='new-item-form'>
            <Input
                prefix='new-item'
                name='name'
                value={productName}
                setValue={setProductName}
                validationFunction={validateName}
                placeholder='Название товара'
                autoFocus
            /> 
            <Input
                prefix='new-item'
                name='cost'
                value={productCost}
                setValue={setProductCost}
                validationFunction={validatePositiveNumber}
                placeholder='Цена товара'
            /> 
            <Button
                onClick={postItem}>Добавить новый товар!</Button>
        </form>
    );
};

export default AddProductForm;
