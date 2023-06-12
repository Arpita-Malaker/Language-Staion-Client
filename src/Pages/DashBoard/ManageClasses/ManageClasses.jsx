import Swal from "sweetalert2";
import useClasses from "../../../Hooks/useClasses";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";




const ManageClasses = () => {

    const [classesInfo, refetch] = useClasses();
    const [axiosSecure] =useAxiosSecure();
    console.log(classesInfo);


    const handleApproved = classid => {
        // console.log("ennnnnnnnnnnnnnnnnn  ")

        fetch(`http://localhost:5000/classesInfo/admin/${classid._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(`${classid.className} is approved`)

                }
            })

    }

    const handleDeny = classid => {

        fetch(`http://localhost:5000/classesInfo/admin/${classid._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(`${classid.className} is deny`)
                }
            })

    }
///handke feed back

const handleFeedback=(classid)=>{

    Swal.fire({
        title: "FeedBack!",
        text: "Write something or your Action",
        input: 'text',
        showCancelButton: true        
    }).then((result) => {
        if (result.value) {
            console.log("Result: " + result.value);
            const feedbackdata = result.value;
            const reason = {feedback:feedbackdata}
            

            console.log(feedbackdata);
         

            fetch(`http://localhost:5000/classesInfo/${classid._id}`,{
                method:'PATCH',
                headers:{
                    "content-type": "application/json"

                },
                body: JSON.stringify(reason)
                     
            })
            .then(res=>res.json())
            // axiosSecure.patch(`/classesInfo/${classid._id}`,feedbackdata )
            // .then(data=>console.log('hello',data))
            .catch(error => (console.log(error)))
           
        }
    });


}



///////

    return (
        <div className="w-full">
            <h2 className="text-center font-bold text-blue-700 text-2xl mt-16">Show All the Classes: {classesInfo.length}</h2>



            <div className=" mt-10 ml-6 grid md:grid-rows-4 grid-flow-col gap-4 ">
                {classesInfo.map(classItem =>

                    <div key={classItem._id} className="card w-96 bg-gray-200 shadow-xl p-2">
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
                            <div className="text-blue-800 font-bold text-xl">{classItem.EnrollStudent?<p>Enroll Student:{classItem.EnrollStudent}</p>:<p>No enroll Student</p>}</div>
                            <div className="card-actions justify-center mt-5">


                                <div>{classItem.status === 'approved' ? <div className=" flex gap-3"><button onClick={() => handleApproved(classItem)} disabled='true' className="btn btn-info">Approve</button>
                                    <button onClick={() => handleDeny(classItem)} disabled='true' className="btn btn-warning pl-4 pr-4 "> Deny </button>
                                    <button  onClick={()=>handleFeedback(classItem)} className="btn btn-success  "> Feedback </button>
                                    </div>


                                    : classItem.status === 'deny' ? <div className="flex gap-3"><button disabled='true' onClick={() => handleApproved(classItem)} className="btn btn-info">Approve</button>
                                        <button disabled='true' onClick={() => handleDeny(classItem)} className="btn btn-warning pl-4 pr-4 "> Deny </button>
                                        <button onClick={()=>handleFeedback(classItem)}  className="btn  btn-success  "> Feedback </button>
                                        </div> :


                                        <div className="flex gap-3"><button onClick={() => handleApproved(classItem)} className="btn btn-info">Approve</button>
                                            <button onClick={() => handleDeny(classItem)} className="btn btn-warning pl-4 pr-4 "> Deny </button>
                                            <button onClick={()=>handleFeedback(classItem)}  className="btn  btn-success  "> Feedback </button>
                                            </div>}</div>
                            </div>
                        </div>
                    </div>


                )}


            </div>
        </div>
    );
};

export default ManageClasses;
