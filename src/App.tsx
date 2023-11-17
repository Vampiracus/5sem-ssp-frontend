import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/authorization/AuthPage';
import ClientPage from './pages/client/ClientPage';
import WelcomePage from './pages/authorization/WelcomePage';
import { getCurrentUser } from './API/user';

function App() {
    const [user, setUser] = useState<User | null>(null);
    

    useEffect(() => {
        getCurrentUser().then(res => {
            setUser(res);
        });
    }, []);

    return (
        <Routes>
            <Route path='/login/client'
                element={<AuthPage user={user} setUser={setUser} isForClient/>} />
            <Route path='/login/manager'
                element={<AuthPage user={user} setUser={setUser} isForClient={false}/>} />
            <Route path='/login' element={<WelcomePage />} />
            <Route path='/client' element={<ClientPage user={user}/>} />
            <Route path='*' element={<div />} />
        </Routes>
    );
}

export default App;
