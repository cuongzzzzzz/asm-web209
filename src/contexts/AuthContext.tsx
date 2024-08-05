import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from './CartContext';

export interface IAuthContextProps { }

export const AuthContext = React.createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactElement }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState<any>(null);
    const cartContext = React.useContext(CartContext);

    React.useEffect(() => {
        const userString = localStorage.getItem("user") || "{}";
        const storedUser = JSON.parse(userString);
        setUser(storedUser);
    }, []);

    React.useEffect(() => {
        console.log("userChange::", user)
        if (user?.user?.id) {
            console.log("userId:::", user?.user?.id)
            cartContext?.getCart(user.user.id);
        }
    }, [user, cartContext]);
    console.log("user:::",user)

    const login = async (data: any) => {
        try {
            const res = await axios.post("http://localhost:3000/login", data);
            localStorage.setItem("user", JSON.stringify(res.data));
            setUser(res.data);
            await cartContext?.getCart(res.data.user.id);
            await cartContext?.getCartQuantity();
            toast.success("Đăng nhập thành công");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Đăng nhập thất bại!");
        }
    };

    const logOut = async () => {
        try {
            localStorage.setItem("user", '{}');
            setUser(null);
            cartContext?.setCart({});
            cartContext?.setCartQuantity(0);
            toast.success("Đăng xuất thành công");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (data: any) => {
        try {
            await axios.post("http://localhost:3000/register", data);
            toast.success("Đăng ký thành công");
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error("Đăng ký thất bại!");
        }
    };

    const needLogin = () => {
        toast.warning("Bạn cần đăng nhập để thực hiện hành động này!");
    };

    return (
        <AuthContext.Provider value={{ user, needLogin, login, logOut, register }}>
            {children}
        </AuthContext.Provider>
    );
}