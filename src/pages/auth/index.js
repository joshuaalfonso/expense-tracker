
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import { useEffect } from "react";


const Auth = () => {

    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo();

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true
        };
        localStorage.setItem('auth', JSON.stringify(authInfo));
        navigate('/expense-tracker');
    }

    useEffect(() => {
        if (isAuth) {
            navigate('expense-tracker')
        }
    })


    return (
        <div className="h-full px-4 disply flex flex-col items-center justify-center">
            <h1 className="text-white">Expense tracker by skadoosh!</h1>
            <img 
                src="login-illustration.png" 
                alt="login"
                width={'100%'}
            />
            <button
                className="w-full text-white rounded p-2 flex border-solid border-2 border-white/10"
                onClick={signInWithGoogle}
            > 
                <box-icon type='logo' name='google' color="white"></box-icon>
                <span className="flex-1">Sign in with google </span>
            </button>
        </div>
    )
}

export default Auth;