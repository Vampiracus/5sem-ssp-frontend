import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';
import './ManagerNav.scss';

const ManagerNav = () => {
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
        </nav>
    );
};

export default ManagerNav;
