import React from 'react';
import './ManagersTable.scss';
import Container from '../../../../components/Container/Container';
import TableItem from '../../../../components/TableItem/TableItem';
import AddManagerForm from './AddManagerForm/AddManagerForm';
import { getAllManagers } from '../../../../API/managers';

const ManagersTable = () => {
    const [managers, setManagers] = React.useState<ExistingManager[]>([]);
    const [createdManagers, setCreatedManagers] = React.useState(0);
    
    
    React.useEffect(() => {
        getAllManagers()
            .then(res => setManagers(res));
    }, [createdManagers]);

    return (
        <Container outerClass='manager-table__outer' class='manager-table'>
            <div className='manager-table__table'>
                <TableItem item={{
                    login: 'Логин',
                    name: 'Имя',
                    password: 'Пароль',
                }} isFirst/>
                {
                    managers.map((manager, index) => {
                        return (
                            <TableItem 
                                key={manager.login}
                                item={manager as Record<string, string | number>}
                                isFirst={false}
                                isLast={index === managers.length - 1}
                                createdItems={createdManagers}
                                setCreatedItems={setCreatedManagers}
                            />
                        );
                    })
                }
            </div>
            <AddManagerForm
                setCreatedNewItems={setCreatedManagers}
                createdNewItems={createdManagers}/>
        </Container >
    );
};

export default ManagersTable;
