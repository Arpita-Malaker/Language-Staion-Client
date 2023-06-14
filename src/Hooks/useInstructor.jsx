import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../src/Hooks/useAxiosSecure";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const useInstructor=()=>{

const {user} = useContext(AuthContext);
    const [axiosSecure] =useAxiosSecure();
    const {data: isInstructor, isLoading:isInstructorLoading}= useQuery({
        queryKey:['isInstrutor', user?.email],
        enabled: !! user?.email && !! localStorage.getItem('access-token'),
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log('is insturctor res', res )
            return res.data.instructor;
        }
    })

    return [isInstructor, isInstructorLoading]

}

export default useInstructor;