import { signOut } from "firebase/auth"
import { auth } from "../config/firebase-config"
import { useNavigate } from "react-router-dom";





const Header = () => {

    const navigate = useNavigate();

    const signUserOut = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            navigate('/');
        } catch(err) {
            console.error(err)
        }
    };

    return (
        <header className="p-4 flex justify-between items-center">
            <i className='bx bx-moon bx-tada-hover text-white text-xl cursor-pointer'></i>
            <h1 className="text-base text-white uppercase">Expenses</h1>
            <i className='bx bx-log-out text-white text-xl cursor-pointer' onClick={signUserOut}></i>
        </header>
    )
}


export default Header