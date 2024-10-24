
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
        <div className="h-screen px-4 disply flex flex-col items-center justify-center gap-4 bg-white">
           
            <img 
                src="login-illustration.png" 
                alt="login"
                width={'100%'}
            />

            <section className="text-center">
                <h1 className="uppercase text-4xl font-bold">
                    take <span className="text-[#FF745D]">control</span> of your <span className="text-[#87AEF1]">expenses</span>
                </h1>
            </section>

            <p className="text-center text-[#979797] px-10">
                Effortlessly budget, save, and spend wisely with our all-in-one app
            </p>

            <button
                className="bg-black p-3 rounded flex items-center justify-center gap-2"
                onClick={signInWithGoogle}
            > 
                <i className='bx bxl-google text-white text-xl'></i>
                <span className="flex-1 text-white text-lg">Sign in with google </span>
            </button>
        </div>
    )
}

export default Auth;