import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";



const DashBoard = () => {
const [isAdmin] =useAdmin();
const [isInstructor] = useInstructor();
  
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col ">
       
      <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>

      <div className="drawer-side">

        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">



          {
            isAdmin ? <div>
               <li><Link to='adminhome'>Admin Home</Link></li>
              <li><Link to='manageClasses'>Manage Classes</Link></li>
              <li><Link to='manageUser'>Manage User</Link></li>
            </div> : 
            
            isInstructor ? <div>
               <li><Link to='instructorhome'>Instructor Home</Link></li>
              <li><Link to='instructorclasses' >My classes</Link></li>
              <li><Link to='addclasses'>Add Classes</Link></li>

            </div>
              : 
              
              <div>
                 <li><Link to='studenthome'>Student Home</Link></li>
                <li><Link >class</Link></li>
                <li><Link >payment</Link></li>
              </div>


          }


          <div className="divider"></div>

          <li><Link to='/'>Home</Link></li>
          <li><Link to='/classes'>Classes</Link></li>
          <li><Link to='/instructor'>Instructor</Link></li>
        </ul>



      </div>
    </div>
  );
};

export default DashBoard;