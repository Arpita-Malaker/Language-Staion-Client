import Swal from "sweetalert2";
import useClasses from "../../../Hooks/useClasses";


const ManageClasses = () => {

    const [classesInfo, refetch] = useClasses();
    console.log(classesInfo);


    const handleApproved = classid => {
        // console.log("ennnnnnnnnnnnnnnnnn  ")

        fetch(`http://localhost:5000/classesInfo/${classid._id}`, {
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

        fetch(`http://localhost:5000/classesInfo/${classid._id}`, {
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


    return (
        <div className="w-full">
            <h2 className="text-center font-bold text-blue-700 text-2xl mt-16">Show All the Classes</h2>



            <div className=" mt-10 ml-6 grid  grid-flow-col gap-4 ">
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
                            <div className="card-actions justify-center mt-5">


                                <div>{classItem.status === 'approved' ? <div className=" flex gap-3"><button onClick={() => handleApproved(classItem)} disabled='true' className="btn btn-info">Approve</button>
                                    <button onClick={() => handleDeny(classItem)} disabled='true' className="btn btn-warning pl-4 pr-4 "> Deny </button>
                                    <button  className="btn  btn-success  "> Feedback </button>
                                    </div>


                                    : classItem.status === 'deny' ? <div className="flex gap-3"><button disabled='true' onClick={() => handleApproved(classItem)} className="btn btn-info">Approve</button>
                                        <button disabled='true' onClick={() => handleDeny(classItem)} className="btn btn-warning pl-4 pr-4 "> Deny </button>
                                        <button  className="btn  btn-success  "> Feedback </button>
                                        </div> :


                                        <div className="flex gap-3"><button onClick={() => handleApproved(classItem)} className="btn btn-info">Approve</button>
                                            <button onClick={() => handleDeny(classItem)} className="btn btn-warning pl-4 pr-4 "> Deny </button>
                                            <button  className="btn  btn-success  "> Feedback </button>
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
