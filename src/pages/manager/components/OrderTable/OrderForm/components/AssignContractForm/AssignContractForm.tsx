import React from 'react';
import Input from '../../../../../../../components/Input/Input';
import Button from '../../../../../../../components/Button/Button';
import { validateDate } from '../../../../../../../utils/validation/validation';
import {
    sendOrderContract as sendOrderContractAPI,
    rejectOrder as rejectOrderAPI
} from '../../../../../../../API/orders';
import './AssignContractForm.scss';

type Props = {
    user: Manager
    order: Order
    updateOrders: () => void
}

const AssignContractForm: React.FC<Props> = ({ order, updateOrders, user }) => {
    const [contract, setContract] = React.useState('');
    const [contract_date, setContract_date] = React.useState('');
    const [isProductIdIncorrect, setIsProductIdIncorrect] = React.useState(false);

    if (order.status !== 'Ожидается создание контракта' || order.manager_login !== user.login)
        return <></>;
    
    const sendOrderContract: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        sendOrderContractAPI(order.id, contract, contract_date)
            .then(res => {
                if (res === 'OK') {
                    updateOrders();
                }
            });
    };
    
    const rejectOrder: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        rejectOrderAPI(order.id)
            .finally(() => updateOrders());
    };

    return (
        <>
            <div>
                <span>Добавить контракт к заказу:</span>
                <form className='add-contract-form'>
                    <Input
                        prefix='add-contract-item'
                        name='name'
                        value={contract}
                        setValue={setContract}
                        validationFunction={n => {
                            if (n.length > 20) return 'Максимальная длина — 20';
                            return true;
                        }}
                        placeholder='№ контракта'
                        isIncorrect={isProductIdIncorrect}
                        setIsIncorrect={setIsProductIdIncorrect}
                    /> 
                    <Input
                        prefix='add-contract-item'
                        name='date'
                        value={contract_date}
                        setValue={setContract_date}
                        validationFunction={validateDate}
                        placeholder='Дата контракта'
                    /> 
                    <Button
                        className='manager-order-form__send-button'
                        onClick={sendOrderContract}>Добавить контракт</Button>
                </form>
                <span className='span-link' onClick={rejectOrder}>
                    Отправить заказ обратно клиенту</span>
            </div>
            <br/>
        </>
    );
};

export default AssignContractForm;
