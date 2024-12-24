import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
const {loginWithGoogle} = useContext(AuthContext);

const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(result => {
        console.log(result.user)
    })
    .catch(error => {
        console.log(error.massage)
    })

}

    return (
        <div className='flex justify-center'>
          <button onClick={handleGoogleLogin} className="btn w-full"><FcGoogle /> Google</button>
        </div>
    );
};

export default SocialLogin;
