import React from 'react';
import './ShipmentTable.scss';
import Container from '../../../../components/Container/Container';
import TableItem from '../../../../components/TableItem/TableItem';
import { getAllShipments } from '../../../../API/shipments';

const ShipmentTable = () => {
    const [shipments, setShipments] = React.useState<Shipment[]>([]);
    
    React.useEffect(() => {
        getAllShipments()
            .then(res => setShipments(res));
    }, []);

    return (
        <Container outerClass='shipment-table__outer' class='shipment-table'>
            <h3>Все отгрузки</h3>
            <TableItem item={{
                id: 'ID отгрузки',
                date: 'Дата отгрузки',
                shipped_count: 'Отгружено',
                manager_login: 'Оформлявший менеджер',
                order_item_id: 'ID строки заказа',
            }} isFirst/>
            {
                shipments.map((shipment, index) => {
                    return (
                        <TableItem 
                            key={shipment.id}
                            item={shipment as Record<string, string | number>}
                            isFirst={false}
                            isLast={index === shipments.length - 1}
                        />
                    );
                })
            }
        </Container >
    );
};

export default ShipmentTable;
