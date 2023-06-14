
import useAuth from "../../hooks/useAuth";


const Mainuserhome = () => {

    const {user} = useAuth();

    console.log(user)
    return (
        <div>
           <div className="card lg:card-side bg-blue-100 shadow-xl mt-28 ml-16">
 <div className='w-48' > <figure>< img   src={user.photoURL} alt="Album"/></figure></div>
  <div className="card-body">
    <h2 className="card-title">{user.displayName}</h2>
    <p>{user.email}</p>
   
  </div>
</div>
            
        </div>
    );
};

export default Mainuserhome;