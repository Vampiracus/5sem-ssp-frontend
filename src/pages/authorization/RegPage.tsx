import React from 'react';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import {
    validateLatinDigits,
    validateName,
    validateNameNoDots,
    validatePassword,
    validatePhone
} from '../../utils/validation/validation';
import Button from '../../components/Button/Button';
import './AuthPage.scss';
import { Navigate } from 'react-router-dom';
import Notification from '../../components/Notification/Notification';
import { postClient } from '../../API/clients';
import { Link } from 'react-router-dom';

const RegPage = () => {
    const [login, setLogin] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordAgain, setPasswordAgain] = React.useState('');
    const [redirected, setRedirected] = React.useState(false);
    const [error, setError] = React.useState('');

    const signup: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        if (password !== passwordAgain) return;
        postClient(login, password, name, address, phone)
            .then(res => {
                if (res !== 'OK') setError(res);
                else setRedirected(true);
            })
            .catch((err: string) => {
                setError(err);
            });
    };
    
    if (redirected) return <Navigate to='/login/client' />;

    return (
        <Container>
            <Notification text={error} setText={setError} />
            <form className='registration'>
                <h3>Регистрация</h3>
                <Input
                    prefix='registration' 
                    name='login'
                    validationFunction={validateLatinDigits}
                    autoFocus
                    value={login}
                    setValue={setLogin}
                    placeholder='Логин'
                    maxLength={20}
                />
                <Input
                    prefix='registration' 
                    name='name'
                    validationFunction={validateNameNoDots}
                    autoFocus
                    value={name}
                    setValue={setName}
                    placeholder='Имя'
                    maxLength={200}
                />
                <Input
                    prefix='registration' 
                    name='phone'
                    validationFunction={validatePhone}
                    autoFocus
                    value={phone}
                    setValue={setPhone}
                    placeholder='Номер телефона'
                    maxLength={13}
                />
                <Input
                    prefix='registration' 
                    name='address'
                    validationFunction={validateName}
                    autoFocus
                    value={address}
                    setValue={setAddress}
                    placeholder='Адрес'
                    maxLength={200}
                />
                <Input 
                    prefix='registration' 
                    name='password'
                    validationFunction={w => {
                        setPasswordAgain('');
                        return validatePassword(w);
                    }}
                    value={password}
                    setValue={setPassword}
                    type='password'
                    placeholder='Пароль'
                    maxLength={20}
                />
                <Input 
                    prefix='registration' 
                    name='password-again'
                    validationFunction={word => {
                        if (word !== password) return 'Пароли не совпадают';
                        return true;
                    }}
                    value={passwordAgain}
                    setValue={setPasswordAgain}
                    type='password'
                    placeholder='Пароль (ещё раз)'
                    maxLength={20}
                />
                <Button onClick={signup}>Зарегистрироваться!</Button>
                <Link to='/login/client' style={{ textAlign: 'center' }}>
                    <span className='span-link'> Авторизоваться </span>
                </Link>
            </form>
        </Container>
    );
};

export default RegPage;
