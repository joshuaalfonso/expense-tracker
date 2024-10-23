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
            <box-icon name="moon" size="sm" color="white" animation='tada-hover'></box-icon>
            <h1 className="text-base text-white uppercase">Expenses</h1>
            <box-icon name="log-out" size="sm" color="white" onClick={signUserOut}></box-icon>
        </header>
    )
}


export default Header