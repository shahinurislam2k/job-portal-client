import React, { useContext } from 'react';
import registerLottieData from "../../assets/lottie/loginLotte.json";
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../../components/SocialLogin';

const Login = () => {

const {loginUser} = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        loginUser(email, password)
        .then(result => {
            console.log('Login', result.user)
        })
        .catch(error => {
            console.log(error);
        })



    }    




    return (
        <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-5 mt-5">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;