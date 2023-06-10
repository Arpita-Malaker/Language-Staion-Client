import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageUser = () => {

  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })

  // make admin
  const handleAdmin = user => {

    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`${user.name} is an Admin now`)
        }
      })

  }

  // make instructor
  const handleInstructor = user => {

    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`${user.name} is an instructor now`)
        }
      })

  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-12 text-blue-800 pb-8">Total Users: {users.length}</h1>
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

            {users.map((user, index) =>
              <tr key={user._id}>
                <th>{index + 1}</th>
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

                <td>{user.role === 'admin' ? <div className="badge badge-primary px-5">Admin</div>



                  : user.role === 'instructor' ? <div className="badge badge-accent">Instructor</div> : <div >
                    <div className="badge badge-error px-4">
                      Student
                    </div>
                    {/* <button onClick={() => handleAdmin(user)} className="btn btn-warning">Admin</button>

                    <button onClick={() => handleInstructor(user)} className="btn btn-info">Instrutor</button> */}

                  </div>}</td>


                <th>
                  {user.role === "admin" ? <div className="flex gap-2">
                    <button onClick={() => handleAdmin(user)} disabled='true' className="btn btn-warning">Admin</button>

                    <button onClick={() => handleInstructor(user)} disabled='true' className="btn btn-info">Instrutor</button>

                  </div> : user.role === 'instructor' ? <div className="flex gap-2">

                    <button onClick={() => handleAdmin(user)} disabled='true' className="btn btn-warning">Admin</button>

                    <button onClick={() => handleInstructor(user)} disabled='true' className="btn btn-info">Instrutor</button>
                  </div> : <div className="flex gap-2">
                    <button onClick={() => handleAdmin(user)} className="btn btn-warning">Admin</button>

                    <button onClick={() => handleInstructor(user)} className="btn btn-info">Instrutor</button>

                  </div>}
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