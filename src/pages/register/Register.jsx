import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottieData from "../../assets/lottie/registerLotte.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../../components/SocialLogin";

const Register = () => {


const {createUser} = useContext(AuthContext);


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);



    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  };







  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-5 mt-5">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
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
              <button className="btn btn-primary">Register</button>
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;