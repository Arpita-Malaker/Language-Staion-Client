import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import a3 from '../../../../assets/animation/newScene.json';
import Lottie from "lottie-react";


const Navbar = () => {

    const {user,logOut}=useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{console.log(error)})

    }

    const navs = <>
        <li  className=" text-xl font-bold"><Link to='/'>Home</Link></li>

        <li className=" text-xl font-bold"><Link to='/instructor' >Instructors</Link></li>
        <li className=" text-xl font-bold"><Link to='/classes'>Classes</Link></li>

    </>
    return (
        <div>

            <div className="navbar max-w-screen-xl  opacity-80 bg-blue-800  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navs}
                            <ul className="flex" >
                        {
                          user?.uid ? <div className="">
                          
          
                          <img className='rounded w-10 h-10' src={user.photoURL} alt="" />
                          <p className="mt-2 mx-3">{user.displayName}</p>
                       
                          <Link to='dashboard'><button className="btn btn-ghost">DashBoard</button></Link>
                          <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
          
          
                      </div>
                     
                        :<>
                        <Link to='/login'><button className="btn">Login</button></Link>
                        </>
                    }
                        </ul>
                        </ul>
                      
                    </div>
                    <div className="flex">
                    <Lottie animationData={a3} loop={true} />
                    <a className="btn btn-ghost text-2xl font-bold ">Language <span className="text-amber-400">Station</span></a>
                    </div>
                </div>

                <div className="navbar-center"> <div className="hidden lg:flex"> <ul className="menu menu-horizontal px-1">
                        {navs}
                    </ul>
                    
                    
                    
                    </div>
                    </div>

                <div className="navbar-end  ">

                   
                    <div className="hidden lg:flex">
                    {
                          user?.uid ? <div className="flex">
                          
          
                          <img className='rounded w-10 h-10' src={user.photoURL} alt="" />
                          <p className="mt-2 mx-3 flex-row">{user.displayName}</p>
                       
                          <Link to='dashboard'><button className="btn btn-ghost">DashBoard</button></Link>
                          <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
          
          
                      </div>
                     
                        :<>
                        <Link to='/login'><button className="btn">Login</button></Link>
                        </>
                    }

                    </div>

                   
                  
                </div>
            </div>

        </div>
    );
};

export default Navbar;