import { Link, Outlet } from "react-router-dom";


const DashBoard = () => {

  const isAdmin = true;

  const isInstructor = false;
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
         
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
       
        <div className="drawer-side">

          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

{/*            
            if(isAdmin){

              <> <li><Link to='manageUser'>Manage Classes</Link></li>
              <li><Link to='manageClasses'>Manage User</Link></li></>
            }
            else{
             <>
              <li><Link to='manageUser'>class</Link></li>
            <li><Link to='manageClasses'>payment</Link></li></>
            }
           */}

           {
            isAdmin?<div> <li><Link to='manageClasses'>Manage Classes</Link></li>
            <li><Link to='manageUser'>Manage User</Link></li></div>:isInstructor?<div>
            <li><Link to='manageUser'>class</Link></li>
            <li><Link to='manageClasses'>payment</Link></li>

            </div>:<div>
            
              <li><Link to='manageClasses'>class</Link></li>
            <li><Link to='manageUser'>payment</Link></li> 
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