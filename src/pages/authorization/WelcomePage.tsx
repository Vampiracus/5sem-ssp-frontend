import { Link, Navigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './AuthPage.scss';
import Container from '../../components/Container/Container';

const WelcomePage: React.FC<{user: User | null | true}> = ({ user }) => {
    if (user && user !== true) return <Navigate to={user.userType}/>;

    return (
        <Container class='welcome-page'>
            <p>
                Добро пожаловать на сайт завода "Прогресс"!
            </p>
            <span>Чтобы совершить заказ, пожалуйста, представьтесь</span>
            <div className='welcome-page__to-auth-buttons'>
                <Link to='/login/client'>
                    <Button className='welcome-page__to-auth-buttons__button'>Клиент</Button>
                </Link>
                <Link to='/login/manager'>
                    <Button className='welcome-page__to-auth-buttons__button'>Менеджер</Button>
                </Link>
            </div>
            
            <Link to='/products' style={{ textAlign: 'center' }}>
                <span className='span-link'>Посмотреть ассортимент товаров</span>
            </Link>
        </Container>
    );
};

export default WelcomePage;
