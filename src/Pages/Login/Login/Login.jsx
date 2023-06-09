
import Lottie from "lottie-react";
import a2 from '../../../../public/login.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SocialLogin from "../../Sheared/SocialLogin/SocialLogin";


const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname||'/';

   const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(from,{replace:true})
    })

   }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content mx-20 flex-col lg:flex-row-reverse">
        <div className="text-center ml-20 lg:text-left">
        <Lottie animationData={a2} loop={true} />
          </div>
         
          <div  className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login"/>
              </div>
              <div className="mt-5 text-sm"><p>Are You New?<span className="mx-3"><Link to='/registration' className="text-blue-500 ">Register Here</Link></span></p></div>
              <SocialLogin></SocialLogin>
            </form>
          </div>

        
        
        </div>
      </div>
    );
};

export default Login;