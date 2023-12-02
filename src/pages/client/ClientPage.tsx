import React from 'react';
import { Navigate } from 'react-router';

import './ClientPage.scss';
import { getClientOrders } from '../../API/orders';
import Container from '../../components/Container/Container';
import OrderTable from './components/OrderTable/OrderTable';
import ClientHeader from './components/ClientHeader/ClientHeader';
import OrderForm from './components/orderForm/OrderForm';
import Button from '../../components/Button/Button';
import { logout } from '../../API/user';

type Props = {
    user: User | null | true
    setUser: (u: User) => void
}

const ClientPage: React.FC<Props> = ({ user, setUser }) => {
    const [orders, setOrders] = React.useState<Order[]>([]);
    const [selectedOrder, setSelectedOrder] = React.useState<null | Order>(null);
    const [isOrderSelected, setIsOrderSelected] = React.useState<boolean>(false);
    const [createdOrders, setCreatedOrders] = React.useState(0);
    
    
    React.useEffect(() => {
        getClientOrders().then(res => setOrders(res));
        setSelectedOrder(null);
        setIsOrderSelected(false);
    }, [createdOrders]);

    if (!user || user !== true && user.userType !== 'client') {
        return <Navigate to='/'/>;
    }
    
    return (
        <Container outerClass='client-page__outer' class='client-page'>
            <ClientHeader
                login={user === true ? '' : user.login}
                setCreatedOrders={setCreatedOrders}
                orders={createdOrders}/>
            <OrderTable 
                orders={orders}
                setSelectedOrder={setSelectedOrder}
                setIsOrderSelected={setIsOrderSelected}
                setCreatedOrders={setCreatedOrders}
                createdOrders={createdOrders}/>
            <OrderForm
                order={selectedOrder}
                active={isOrderSelected}
                setActive={setIsOrderSelected}
                updateOrders={() => {
                    setCreatedOrders(createdOrders + 1);
                }}
            />
            <Button className='client-page__logout-button' onClick={() => {
                logout()
                    .then(() => setUser(null));
            }}>
                Выйти из аккаунта
            </Button>
        </Container>
    );
};

export default ClientPage;
