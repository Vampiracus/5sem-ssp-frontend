import React from 'react';
import './../../../../../components/NewItemForm/NewItemForm.scss';
import Input from '../../../../../components/Input/Input';
import {
    validateLatinDigits,
    validateName,
    validatePassword
} from '../../../../../utils/validation/validation';
import Button from '../../../../../components/Button/Button';
import { postManager } from '../../../../../API/managers';

type Props = {
    setCreatedNewItems: (a: number) => void
    createdNewItems: number
}

const AddManagerForm: React.FC<Props> = ({ setCreatedNewItems, createdNewItems }) => {
    const [managerName, setManagerName] = React.useState('');
    const [managerLogin, setManagerLogin] = React.useState('');
    const [isManagerLoginIncorrect, setIsManagerLoginIncorrect] = React.useState(false);
    const [managerPassword, setManagerPassword] = React.useState('');
    
    const postItem: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        setManagerName('');
        setManagerLogin('');
        setManagerPassword('');
        postManager(managerLogin, managerPassword, managerName)
            .then(res => {
                if (res === 'OK') {
                    setCreatedNewItems(createdNewItems + 1);
                } else {
                    setIsManagerLoginIncorrect(true);
                }
            }).catch(() => {});
    };

    return (
        <form className='new-item-form'>
            <Input
                prefix='new-manager'
                name='login'
                value={managerLogin}
                setValue={setManagerLogin}
                validationFunction={validateLatinDigits}
                placeholder='Логин'
                isIncorrect={isManagerLoginIncorrect}
                setIsIncorrect={setIsManagerLoginIncorrect}
                autoFocus
            /> 
            <Input
                prefix='new-manager'
                name='password'
                value={managerPassword}
                setValue={setManagerPassword}
                validationFunction={validatePassword}
                placeholder='Пароль'
            />
            <Input
                prefix='new-manager'
                name='name'
                value={managerName}
                setValue={setManagerName}
                validationFunction={validateName}
                placeholder='Имя'
            /> 
            <Button
                onClick={postItem}>Добавить менеджера!</Button>
        </form>
    );
};

export default AddManagerForm;
