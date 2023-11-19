import React from 'react';
import { Navigate } from 'react-router-dom';
import Container from '../../components/Container/Container';
import ManagerNav from './components/ManagerNav/ManagerNav';

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
            <Container>
            </Container>
        </div>
    );
};

export default ManagerPage;
