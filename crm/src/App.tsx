import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import { Button } from './components/Button';
import { useAuth } from './contexts/AuthContext';

function App()  {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
    
  }
  
  return <>
    {isLoggedIn && (
      <nav className="nav" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ul>
          <li className={location.pathname === '/' ? 'active' : undefined}>
            <Link to="/">Заявки</Link>
            </li>
          <li className={location.pathname === '/employees' ? 'active' : undefined}>
            <Link to="/employees">Сотрудники</Link>
            </li>
        </ul>

        <div>
          <Button onClick={logout}>Выход</Button>
        </div>
      </nav>
    )}

    <main>
      <Outlet />
    </main>

    <footer></footer>
  </>
}

export default App;
