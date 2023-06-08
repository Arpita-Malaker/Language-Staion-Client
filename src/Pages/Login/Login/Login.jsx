
import Lottie from "lottie-react";
import a2 from '../../../../public/login.json'
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content mx-20 flex-col lg:flex-row-reverse">
        <div className="text-center ml-20 lg:text-left">
        <Lottie animationData={a2} loop={true} />
          </div>
         
          <form className="card w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login"/>
              </div>
              <div className="mt-5 text-sm"><p>Are You New?<span className="mx-3"><Link to='/registration' className="text-blue-500 ">Register Here</Link></span></p></div>
            </div>
          </form>

        
        
        </div>
      </div>
    );
};

export default Login;