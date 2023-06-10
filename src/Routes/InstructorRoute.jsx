import useAuth from "../hooks/useAuth";

import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";


// eslint-disable-next-line react/prop-types
const InstructorRoute = ({ children }) => {
    const { user, loadding } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loadding || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;