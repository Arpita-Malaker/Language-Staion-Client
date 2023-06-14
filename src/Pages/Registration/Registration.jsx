
import Lottie from "lottie-react";
import a3 from '../../../public/login_iso.json'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Sheared/SocialLogin/SocialLogin";
const Registration = () => {

  const {createUser,updateUserProfile} = useContext(AuthContext);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname||'/';
  const onSubmit = data => { 
    
    // console.log(data);
    createUser(data.email,data.password)
    .then(result=>{

      const loggedUser = result.user;
      console.log(loggedUser);
      navigate('/');

      updateUserProfile(data.name, data.photoURL)
      .then(()=>{
        const saveUser = {name: data.name, email: data.email, img: data.photoURL}
        fetch('https://b7a12-summer-camp-server-side-arpita-malaker.vercel.app/users',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(saveUser)

        })
        .then(res=>res.json())
        .then(()=>{
          if(data.insertedId){
            // console.log('user profile update')
            reset();
            navigate('/');
          }
        })
      
      })
   .catch(error =>console.log(error))

    })
   }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content mx-20 flex-col lg:flex-row-reverse">
        <div className="text-center ml-20 lg:text-left">
          <Lottie animationData={a3} loop={true} />
        </div>

        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="photoURL"  {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                            {errors.photoURL && <span>This field is required</span>}
                        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", { required: true , minLength: 6 , pattern:/(?=.*[A-Z])(?=.*\W)/




})} name="password" placeholder="password" className="input input-bordered" />
              {errors.password ?.type === 'required' && <span className="text-red-500"> This field is required </span>}

              {errors.password?.type === "minLength" && <span className="text-red-500">Minimum Length Six</span>}

              {errors.password?.type === "pattern" && <span className="text-red-500">Minimum one uppercase one special chracter</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="confirm_password"  {...register("confirm_password", {
                required: true,
                validate: (val) => {
                  if (watch('password') != val) {
                    return "Your passwords do no match";
                  }
                },
              })} name="confirm_password" placeholder="confirm_password" className="input input-bordered" />
                     {errors.confirm_password && <span className="text-red-500">  password does not match </span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="mt-5 text-sm"><p>Are You already resgistered?<span className="mx-3"><Link to='/login' className="text-blue-500 ">Login Here</Link></span></p></div>
         
            
            <SocialLogin></SocialLogin>
         
          </form>
        </div>



      </div>
    </div>
  );
};

export default Registration;