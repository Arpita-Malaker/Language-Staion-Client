import { Helmet } from "react-helmet-async";
import useClasses from "../../Hooks/useClasses";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";


const Classes = () => {
    const [classesInfo] = useClasses();

   
    
    const [axiosSecure] =useAxiosSecure();
  
      const {user}= useAuth();
      const [isAdmin] =useAdmin();
      const [isInstructor] = useInstructor();
    
 
      const navigate = useNavigate();
  
    const handleSelect = (item) => {


        if (user && !isAdmin && !isInstructor) {
           
            const orderItem = { itemId: item._id, classNme: item.className, classImg: item.image, instructor: item.name, instructorEmai: item.email, seats: item.seats, price: item.price, userEmail: user.email }
            axiosSecure.post('/carts', orderItem)
                .then((data) => {
                  

                    if (data.insertedId) {
                        // reset();
                        console.log('click')
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class is selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })

        }

        else if (isAdmin || isInstructor) {

            Swal.fire({
                title: 'You are not a student',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })


        }

        else {
            navigate('/login');
        }

    }
    return (
        <div>
             <Helmet>
                <title>Language Station | All Classes</title>
            </Helmet>
           

            <div className="mt-16">
            <h2 className="text-sky-600 text-3xl font-bold text-center">All Classes Section</h2>
            
            <div className="grid md:grid-rows-2 grid-rows-6 grid-flow-col gap-4 ms-10 mt-16">
                {classesInfo.map(classItem => (classItem.status==='approved')?

                  <div key={classItem._id} className=" ">
                      <div className="card w-96 bg-gray-200 shadow-xl p-2">
                        <figure><img className='h-48 w-96' src={classItem.image} alt="class" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {classItem.className}
                                <div className="badge badge-secondary">{classItem.status}</div>
                            </h2>
                            <div className="flex text-blue-800 font-bold text-xl">
                                <p>Available seats:{classItem.seats}</p>
                                <p>Price:{classItem.price}</p>

                            </div>
                            <div className=" text-purple-800">
                                <p>Instructor Name:{classItem.name}</p>
                                <p>Email:{classItem.email}</p>

                            </div>
                            {classItem.seats<0 || (isAdmin) || (isInstructor)?<>
                                <button disabled={true} onClick={()=>{handleSelect(classItem)}} className="btn btn-info">Select</button>

                            </>:<button onClick={()=>{handleSelect(classItem)}} className="btn btn-info">Select</button>

                            
                        }
                           
                        </div>
                    </div>
                  </div>:''


                )}


            </div>
            
        </div>
        </div>
    );
};

export default Classes;