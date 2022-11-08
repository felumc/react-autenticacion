import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = () => {    
    return (
        <>
            
            <Outlet />
        </>
    );
};
export default Layout;