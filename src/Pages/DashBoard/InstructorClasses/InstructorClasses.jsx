


import useClasses from "../../../Hooks/useClasses";
import useAuth from "../../../hooks/useAuth";



const InstructorClasses = () => {

    const [classesInfo] = useClasses();
    const { user } = useAuth();


    return (
        <div className="w-full">
            <h2 className="text-center font-bold text-blue-700 text-2xl mt-16">Show All the Classes</h2>



            <div className=" mt-10 ml-6 grid  grid-flow-col gap-4 ">
                {classesInfo.map(classItem => (classItem.email === user.email) ?

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
                            <div className="text-blue-600">{


                                classItem.feedback ? <p>Feedback: {classItem.feedback}</p> : ''
                            }</div>


                        </div>
                    </div> : ''


                )}


            </div>
        </div>
    );
};

export default InstructorClasses;