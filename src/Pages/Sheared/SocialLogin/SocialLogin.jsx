import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname||'/';
    // console.log(from);
    const {googleLogin } = useContext(AuthContext);

    const handleSocialLogin=()=>{
        googleLogin()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, img:loggedInUser.photoURL }
            fetch('https://b7a12-summer-camp-server-side-arpita-malaker.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                  
                });
                navigate(from, { replace: true });
        })
    }
  
    return (
        <div>

            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleSocialLogin} className="btn btn-circle btn-outline">

                    <FaGoogle></FaGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;