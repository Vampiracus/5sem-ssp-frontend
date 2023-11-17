import React from 'react';
import { getClientOrders } from '../../../../API/orders';

const ClientOrders = () => {
    React.useEffect(() => {
        getClientOrders().then(res => console.log(res));
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default ClientOrders;
