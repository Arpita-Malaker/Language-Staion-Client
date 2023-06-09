import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageUser = () => {

    const {data: users=[],refetch} = useQuery(['users'], async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

// make admin
 const handleAdmin = user =>{

   fetch(`http://localhost:5000/users/admin/${user._id}`,{
    method:'PATCH'
   })
   .then(res=>res.json())
   .then(data =>{
    if(data.modifiedCount){
      refetch();
      Swal.fire(`${user.name} is an Admin now`)
    }
   })

 }

 // make instructor
 const handleInstructor=user=>{

  fetch(`http://localhost:5000/users/instructor/${user._id}`,{
    method:'PATCH'
   })
   .then(res=>res.json())
   .then(data =>{
    if(data.modifiedCount){
      refetch();
      Swal.fire(`${user.name} is an instructor now`)
    }
   })

 }

    return (
        <div>
            <h1 className="text-center font-bold text-2xl text-blue-800 pb-8">Total Users: {users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>#</th>
        <th>Name</th>
        <th>email</th>
        <th>role</th>
        <th>action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

        {users.map((user,index)=>
         <tr key={user._id}>
        <th>{index+1}</th>
         <td>
           <div className="flex items-center space-x-3">
             <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                 {/*image  */}
                 <img src={user.img} alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             <div>
               <div className="font-bold">{user.name}</div>
               
             </div>
           </div>
         </td>
         <td>
           {user.email}
           
         </td>

         <td>{user.role === 'admin'?'admin':user.role==='instructor'?'instructor':  <div className="flex gap-2">
         <button onClick={()=>handleAdmin(user)} className="btn btn-warning">Admin</button>
         <button onClick={()=>handleInstructor(user)}  className="btn btn-info">Instrutor</button></div>}</td>

       
         <th>
           <button className="btn btn-ghost btn-xs">Delete</button>
         </th>
       </tr>
            
            )}
      {/* row 1 */}
     
      {/* row 2 */}
  
      {/* row 3 */}
   
      {/* row 4 */}
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default ManageUser;