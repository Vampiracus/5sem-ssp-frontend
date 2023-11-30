import React from 'react';
import './OrderTable.scss';
import Container from '../../../../components/Container/Container';
import TableItem from '../../../../components/TableItem/TableItem';
import { getAllOrders } from '../../../../API/orders';
import OrderForm from './OrderForm/OrderForm';



const OrderTable: React.FC<{ user: ExistingManager }> = ({ user }) => {
    const [orders, setOrders] = React.useState<Order[]>([]);
    const [selectedOrder, setSelectedOrder] = React.useState<null | Order>(null);
    const [isOrderSelected, setIsOrderSelected] = React.useState<boolean>(false);
    const [ordesUpdated, setOrdersUpdated] = React.useState<number>(0);
    const updateOrders = () => setOrdersUpdated(ordesUpdated + 1);
    
    const [noCotract, setNoCotract] = React.useState(false);
    
    
    React.useEffect(() => {
        getAllOrders(noCotract)
            .then(res => {
                setSelectedOrder(null);
                setOrders(res);
            });
    }, [ordesUpdated, noCotract]);

    return (
        <Container outerClass='order-table__outer' class='order-table'>
            <h3>Заказы</h3>
            <TableItem item={{
                id: 'ID заказа',
                total: 'Сумма',
                contract: 'Контракт №',
                contract_date: 'Дата контракта',
                status: 'Статус',
                client_login: 'Логин клиента',
                manager_login: 'Ответственный менеджер',
            }} isFirst/>
            {
                orders.map((order, index) => {
                    const item = { ...order };
                    if (item.contract === null) item.contract = 'NO';
                    item.contract_date
                    = item.contract_date ? (new Date(item.contract_date)).toLocaleDateString() : '';
                    return (
                        <TableItem 
                            key={item.id}
                            item={item as Record<string, string | number>}
                            isFirst={false}
                            isLast={index === orders.length - 1}
                            setSelectedItem={setSelectedOrder}
                            setIsItemSelected={setIsOrderSelected}
                        />
                    );
                })
            }
            <OrderForm
                active={isOrderSelected}
                setActive={setIsOrderSelected}
                order={selectedOrder}
                updateOrders={updateOrders}
                user={user}/>
            <div>
                <input
                    id='no-cotract-input'
                    type='checkbox'
                    //@ts-expect-error checked is in input[type='checkbox']
                    onClick={e => setNoCotract(e.target.checked)}/>
                <label htmlFor='no-cotract-input'><span>без контрактов</span></label>
            </div>
        </Container >
    );
};

export default OrderTable;
