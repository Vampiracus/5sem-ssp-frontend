import { Link, Navigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './AuthPage.scss';
import Container from '../../components/Container/Container';

const WelcomePage: React.FC<{user: User | null | true}> = ({ user }) => {
    if (user && user !== true) return <Navigate to={user.userType}/>;

    return (
        <Container class='welcome-page'>
            <Link to='/login/client'>
                <Button className='welcome-page__button'>Клиент</Button>
            </Link>
            <Link to='/login/manager'>
                <Button className='welcome-page__button'>Менеджер</Button>
            </Link>
        </Container>
    );
};

export default WelcomePage;
