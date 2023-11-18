import React from 'react';
import { Navigate } from 'react-router';

import './ClientPage.scss';
import { getClientOrders } from '../../API/orders';
import Container from '../../components/Container/Container';
import OrderTable from './components/OrderTable/OrderTable';
import ClientHeader from './components/ClientHeader/ClientHeader';
import OrderForm from './components/OrderTable/orderForm/OrderForm';

type Props = {
    user: User | null | true
}

const ClientPage: React.FC<Props> = ({ user }) => {
    const [orders, setOrders] = React.useState<Order[]>([]);
    const [selectedOrder, setSelectedOrder] = React.useState<null | Order>(null);
    const [isOrderSelected, setIsOrderSelected] = React.useState<boolean>(true);
    
    

    React.useEffect(() => {
        getClientOrders().then(res => setOrders(res));
    }, []);

    if (!user) {
        return <Navigate to='/'/>;
    }

    return (
        <Container outerClass='client-page__outer' class='client-page'>
            <ClientHeader/>
            <OrderTable orders={orders} />
            <OrderForm
                order={selectedOrder}
                active={isOrderSelected}
                setActive={setIsOrderSelected}
            />
        </Container>
    );
};

export default ClientPage;
