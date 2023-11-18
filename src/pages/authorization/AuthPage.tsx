import { useState, useEffect } from 'react';
import { Navigate } from 'react-router';

import './AuthPage.scss';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import { validationStub } from '../../utils/validation/validation';
import { loginClientURL, loginManagerURL } from '../../API/endpoints';
import { login as doLogin, getCurrentUser } from '../../API/user';

type Props = {
    isForClient: boolean
    user: User | null | true
    setUser: (user: User) => void
}

const AuthPage: React.FC<Props> = ({ isForClient, user, setUser }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [incorrectTimeout, setIncorrectTimeout] = useState<number | null>(null);
    

    const signin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let url: string;
        if (isForClient) url = loginClientURL;
        else url = loginManagerURL;
        doLogin(url, login, password)
            .then(() => {
                getCurrentUser()
                    .then(res => {
                        if (res) setUser(res);
                        else {
                            setIncorrectTimeout(setTimeout(() => {
                                setIncorrectTimeout(null);
                            }, 2000));
                        }
                    });
            });
    };

    useEffect(() => {
        return () => {
            if (incorrectTimeout !== null) clearTimeout(incorrectTimeout);
        };
    });

    if (user && user !== true) {
        return (
            <Navigate to={'/' + user.userType}/>
        );
    }

    return (
        <Container>
            <form className='authorization'>
                <h3>Авторизация</h3>
                <Input 
                    prefix='authorization' 
                    name='login'
                    validationFunction={validationStub}
                    autoFocus
                    value={login}
                    setValue={setLogin}
                    isIncorrect={incorrectTimeout ? true : false}
                />
                <Input 
                    prefix='authorization' 
                    name='password'
                    validationFunction={validationStub}
                    value={password}
                    setValue={setPassword}
                    type='password'
                    isIncorrect={incorrectTimeout ? true : false}
                />
                <Button onClick={signin}>Войти!</Button>
            </form>
        </Container>
    );
};

export default AuthPage;
