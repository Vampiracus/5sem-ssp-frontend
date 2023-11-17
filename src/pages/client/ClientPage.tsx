import React from 'react';
import { Navigate } from 'react-router';

import { getClientOrders } from '../../API/orders';

type Props = {
    user: User
}

const ClientPage: React.FC<Props> = ({ user }) => {
    if (!user) {
        return <Navigate to='/login'/>;
    }

    return (
        <div>
           12 
        </div>
    );
};

export default ClientPage;
