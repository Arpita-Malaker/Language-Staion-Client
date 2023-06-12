import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";



const StudentClassesCart = () => {
    const{user}= useAuth();
    console.log(user.email)
    const {data: carts =[],refetch}=useQuery({

        queryKey:['carts'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/carts')
            return res.json();
        }
        
        })

        const handleDelete=(item)=>{

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((data)=>{
                if (data.isConfirmed) {
                    fetch(`http://localhost:5000/carts/${item._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })

        }
   
    return (
        <div className="ml-12">
            <h2 className="text-blue-600 text-center text-3xl font-bold mt-16">Student Cart</h2>

          <p className="text-blue-600 text-center text-2xl font-bold mt-5 mb-16">Cart length:  {carts.length}</p>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>index</th>
        <th>Class Name</th>
        <th>Instrauctor</th>
        <th>Instrauctor Email</th>
        <th>Price</th>
        <th>Payment</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
     {
        carts.map((cart,index)=>(cart.userEmail===user.email) ?<tr key={cart._id}>
        <th>{index+1}</th>
        <td>{cart.classNme}</td>
        <td>{cart.instructor}</td>
        <td>{cart.instructorEmai}</td>
        <td>${cart.price}</td>
        <td><button className="btn btn-info ">Payment</button></td>
        <td><button onClick={()=>{handleDelete(cart)}} className="btn btn-warning">Delete</button></td>
      </tr>:'')
     }
     
      {/* row 2 */}
      
      {/* row 3 */}
     
    </tbody>
  </table>
</div>

           
</div>
        
    );
};

export default StudentClassesCart;


// <th>{cart.classNme}</th>
// <th>{cart.instructor}</th>
// <th>{cart.instructorEmai}</th>
// <th>{cart.price}</th>