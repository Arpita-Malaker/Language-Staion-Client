import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";



const EnrolledClasses = () => {

    const{user}= useAuth();
    console.log(user.email)

   
    // const {data: carts =[]}=useQuery({

    //     queryKey:['carts',user?.email],
    //     queryFn: async()=>{
    //         const res = await fetch(`http://localhost:5000/carts/${user?.email}`)
    //         return res.json();
    //     }
        
    //     })

        // console.log(carts)

        const {data: payments =[]}=useQuery({

            queryKey:['payments',user?.email],
            queryFn: async()=>{
                const res = await fetch(`http://localhost:5000/payments/${user?.email}`)
                return res.json();
            }
            
            })

        // console.log(payments);

        // fetch(`http://localhost:5000/classesInfo/admin/${._id}`, {
        //     method: 'PUT'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount) {
        //             refetch();
        //             Swal.fire(`${classid.className} is deny`)
        //         }
        //     })


    

     


    return (
        <div>
           
        <p> length: {payments.length}</p>

        <div className=" mt-10 ml-6 grid grid-flow-col gap-4">
            
        {
            payments.map(pay=><div key={pay._id}>
                
                <div  className="card w-96 bg-gray-200 shadow-xl p-2">
                        <figure><img className='h-48 w-96' src={pay.img} alt="class" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                {pay.itemName}
                                <div className="badge badge-secondary">${pay.price}</div>
                            </h2>
                            <div className="flex text-blue-800 font-bold text-xl">
                                <p>Available seats:{pay.seats}</p>
                                <p>Price:{pay.price}</p>

                            </div>
                            <div className=" text-purple-800">
                                <p>Instructor Name:{pay.instuctorName}</p>
                                <p>Email:{pay.instructorEmail}</p>

                            </div>
                            <div className="card-actions justify-center mt-5">


                                
                            </div>
                        </div>
                    </div>
                </div>

          

            )
        }
        
        </div>



        

       
           
            
        </div>
    );
};

export default EnrolledClasses;