import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const Instructor = () => {
    const {data: users =[]}=useQuery({

        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch('https://b7a12-summer-camp-server-side-arpita-malaker.vercel.app/users')
            return res.json();
        }
        
        })
    return (
        <div>
             <Helmet>
                <title>Language Station | All Instrauctor</title>
            </Helmet>
            
     <div className="mt-16">
     <h2 className="text-sky-600 text-3xl font-bold text-center">All Instructor Section</h2>
        
        <div className="grid md:grid-rows-2 grid-rows-6 grid-flow-col gap-4 ms-10 mt-20">
            {users.map(user => (user.role==='instructor')?

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
        
        </div>
    );
};

export default Instructor;