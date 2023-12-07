import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/authorization/AuthPage';
import ClientPage from './pages/client/ClientPage';
import WelcomePage from './pages/authorization/WelcomePage';
import { getCurrentUser, logout } from './API/user';
import ManagerPage from './pages/manager/ManagerPage';
import RegPage from './pages/authorization/RegPage';
import ProductsPage from './pages/products/ProductsPage';
import Notification from './components/Notification/Notification';

function App() {
    const [user, setUser] = useState<User | null | true>(true);
    const [notText, setNotText] = useState('');
    
    useEffect(() => {
        getCurrentUser().then(res => {
            if (user !== res)
                setUser(res);
        });

        let timeout = 0;
        const sessionCounter = () => {
            if (timeout) clearTimeout(timeout);
            if (user === null || user === true) return;
            timeout = setTimeout(() => {
                logout();
                setUser(null);
                setNotText('Время сессии истекло, пожалуйста, авторизуйтесь заново');
            }, 1000 * 60 * 2);
        };

        window.addEventListener('mousedown', sessionCounter);
        window.addEventListener('keydown', sessionCounter);
        sessionCounter();

        return () => {
            window.removeEventListener('mousedown', sessionCounter);
            window.removeEventListener('keydown', sessionCounter);
        };
    }, [(user !== null) && (user !== true) && user.login ]);

    return (
        <>
            <Notification text={notText} setText={setNotText} />
            <Routes>
                <Route path='/' element={<WelcomePage user={user}/>} />
                <Route path='/signup' element={<RegPage user={user}/>} />
                <Route path='/login/client'
                    element={<AuthPage user={user} setUser={setUser} isForClient/>} />
                <Route path='/login/manager'
                    element={<AuthPage user={user} setUser={setUser} isForClient={false}/>} />
                <Route path='/client' element={<ClientPage user={user} setUser={setUser}/>} />
                <Route path='/manager/*' element={<ManagerPage user={user} setUser={setUser}/>} />
                <Route path='/products' element={<ProductsPage/>} />
                <Route path='*' element={<div />} />
            </Routes>
        </>
    );
}

export default App;
