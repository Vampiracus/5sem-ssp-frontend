import { postOrder } from '../../../../API/orders';
import Button from '../../../../components/Button/Button';
import './ClientHeader.scss';

type Props = {
    login: string
    orders: number
    setCreatedOrders: (n: number) => void
}

const ClientHeader: React.FC<Props> = ({ login, setCreatedOrders, orders }) => {

    return (
        <div className='client-header'>
            <h3>Мои заказы</h3>
            <Button
                className='client-header__add-new-button'
                onClick={() => {
                    postOrder(login)
                        .then(() => setCreatedOrders(orders + 1));
                }}
            >Добавить новый заказ</Button>
        </div>
    );
};

export default ClientHeader;
