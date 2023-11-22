import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/authorization/AuthPage';
import ClientPage from './pages/client/ClientPage';
import WelcomePage from './pages/authorization/WelcomePage';
import { getCurrentUser } from './API/user';
import ManagerPage from './pages/manager/ManagerPage';

function App() {
    const [user, setUser] = useState<User | null | true>(true);
    

    useEffect(() => {
        getCurrentUser().then(res => {
            setUser(res);
        });
    }, []);

    return (
        <Routes>
            <Route path='/' element={<WelcomePage user={user}/>} />
            <Route path='/login/client'
                element={<AuthPage user={user} setUser={setUser} isForClient/>} />
            <Route path='/login/manager'
                element={<AuthPage user={user} setUser={setUser} isForClient={false}/>} />
            <Route path='/client' element={<ClientPage user={user} setUser={setUser}/>} />
            <Route path='/manager/*' element={<ManagerPage user={user} setUser={setUser}/>} />
            <Route path='*' element={<div />} />
        </Routes>
    );
}

export default App;
