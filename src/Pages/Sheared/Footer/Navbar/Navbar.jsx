import { Link } from "react-router-dom";


const Navbar = () => {

    const navs = <>
        <li className="text-lg"><Link to='/'>Home</Link></li>

        <li className="text-lg"><Link to='/instructor' >Instructors</Link></li>
        <li className="text-lg"><Link to='/classes'>Classes</Link></li>

    </>
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navs}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Language Station</a>
                </div>

                <div className="navbar-end  ">

                    <div className="hidden lg:flex"> <ul className="menu menu-horizontal px-1">
                        {navs}
                    </ul></div>

                    <Link to='/login'><button className="btn">Login</button></Link>

                  
                </div>
            </div>

        </div>
    );
};

export default Navbar;