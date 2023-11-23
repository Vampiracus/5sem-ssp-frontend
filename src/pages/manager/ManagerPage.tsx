import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ManagerNav from './components/ManagerNav/ManagerNav';
import ProductsTable from './components/ProductsTable/ProductsTable';
import './ManagerPage.scss';
import ClientsTable from './components/ClientsTable/ClientsTable';
import ManagersTable from './components/ManagersTable/ManagersTable';
import OrderTable from './components/OrderTable/OrderTable';

type Props = {
    user: User | null | true
    setUser: (u: null) => void
}

const ManagerPage: React.FC<Props> = ({ user, setUser }) => {

    if (!user) {
        return <Navigate to='/'/>;
    }

    return (
        <div className='manager-page'>
            <ManagerNav setUser={setUser}/>
            <Routes>
                <Route path='products' element={<ProductsTable />}/>
                <Route path='clients' element={<ClientsTable />}/>
                <Route path='managers' element={<ManagersTable />}/>
                <Route path='orders' element={<OrderTable />}/>
            </Routes>
        </div>
    );
};

export default ManagerPage;
