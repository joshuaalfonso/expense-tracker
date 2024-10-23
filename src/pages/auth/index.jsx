
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
        <div className="">
            <p>Sign in to google to continue</p>
            <button onClick={signInWithGoogle}> Sign in with google </button>
        </div>
    )
}

export default Auth;