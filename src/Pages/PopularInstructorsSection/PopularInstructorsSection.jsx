import { useQuery } from "@tanstack/react-query";
import { Zoom } from "react-awesome-reveal";


const PopularInstructorsSection = () => {
    const {data: users =[]}=useQuery({

        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        }
        
        })

        // console.log(users)
    
    return (
        <div className="mt-36">
        <Zoom><h2 className="text-sky-600 text-3xl font-bold text-center">Popular Instructor Section</h2></Zoom>
        
        <div className="grid md:grid-rows-2 grid-rows-6 grid-flow-col gap-4 ms-10 mt-16">
            {users.slice(0,9).map(user => (user.role==='instructor')?

              <div key={user._id} className=" ">
                  <div className="card w-96 bg-gray-200 shadow-xl p-2">
                    <figure><img className='h-48 w-56' src={user.img} alt="class" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {user.name}
                           
                        </h2>
                     
                        <div className=" text-purple-800">
                           
                            <p>Email:{user.email}</p>

                        </div>
                       
                       
                    </div>
                </div>
              </div>:''


            )}


        </div>
        
    </div>
    );
};

export default PopularInstructorsSection;