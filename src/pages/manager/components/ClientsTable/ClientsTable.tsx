import React from 'react';
import './ClientsTable.scss';
import Container from '../../../../components/Container/Container';
import TableItem from '../../../../components/TableItem/TableItem';
import { getAllClients } from '../../../../API/clients';

const ClientsTable = () => {
    const [clients, setClients] = React.useState<ClientNoUserType[]>([]);
    
    React.useEffect(() => {
        getAllClients()
            .then(res => setClients(res));
    }, []);

    return (
        <Container outerClass='client-table__outer' class='client-table'>
            <TableItem item={{
                login: 'Логин',
                name: 'Имя',
                password: 'Пароль',
                adress: 'Адрес',
                phone: 'Телефон',
            }} isFirst/>
            {
                clients.map((client, index) => {
                    return (
                        <TableItem 
                            key={client.login}
                            item={client as Record<string, string | number>}
                            isFirst={false}
                            isLast={index === clients.length - 1}
                        />
                    );
                })
            }
        </Container >
    );
};

export default ClientsTable;
