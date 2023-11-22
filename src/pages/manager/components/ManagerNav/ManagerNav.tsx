import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';
import './ManagerNav.scss';
import { logout } from '../../../../API/user';

type Props = {
    setUser: (u: null) => void
}

const ManagerNav: React.FC<Props> = ({ setUser }) => {
    return (
        <nav>
            <Link to='/manager/products'>
                <Button>Товары</Button>
            </Link>
            <Link to='/manager/orders'>
                <Button>Заказы</Button>
            </Link>
            <Link to='/manager/clients'>
                <Button>Клиенты</Button>
            </Link>
            <Link to='/manager/shipments'>
                <Button>Отгрузки</Button>
            </Link>
            <Link to='/manager/managers'>
                <Button>Менеджеры</Button>
            </Link>
            <Button className='logout-button' onClick={() => {
                logout()
                    .then(() => setUser(null));
            }}>
                Выйти
            </Button>
        </nav>
    );
};

export default ManagerNav;
