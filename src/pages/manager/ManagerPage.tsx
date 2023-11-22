import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ManagerNav from './components/ManagerNav/ManagerNav';
import ProductsTable from './components/ProductsTable/ProductsTable';
import './ManagerPage.scss';

type Props = {
    user: User | null | true
}

const ManagerPage: React.FC<Props> = ({ user }) => {

    if (!user) {
        return <Navigate to='/'/>;
    }

    return (
        <div className='manager-page'>
            <ManagerNav />
            <Routes>
                <Route path='products' element={<ProductsTable />}/>
            </Routes>
        </div>
    );
};

export default ManagerPage;
