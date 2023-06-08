
import Lottie from "lottie-react";
import a3 from '../../../public/login_iso.json'
import { Link } from "react-router-dom";
const Registration = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content mx-20 flex-col lg:flex-row-reverse">
        <div className="text-center ml-20 lg:text-left">
        <Lottie animationData={a3} loop={true} />
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
                  <span className="label-text"> Place photoUrl</span>
                </label>
                <input type="text" placeholder="photoUrl" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="mt-5 text-sm"><p>Are You already resgistered?<span className="mx-3"><Link to='/login' className="text-blue-500 ">Login Here</Link></span></p></div>
            </div>
          </form>

        
        
        </div>
      </div>
    );
};

export default Registration;