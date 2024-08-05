import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export interface ILayoutProps {
}

export function Layout() {
    const path = useLocation()
    return (
        <div className={path.pathname == "/" ? "bg-[#F8F4F0] flex flex-col relative" : "bg-white flex flex-col relative"}>
            <Header />
            <Outlet />
            <Footer />

        </div>
    );
}
