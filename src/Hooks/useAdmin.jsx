import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../src/Hooks/useAxiosSecure";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAdmin=()=>{

const {user,loading} = useContext(AuthContext);
// console.log(user.email);
    const [axiosSecure] =useAxiosSecure();
    const {data: isAdmin, isLoading:isAdminLoading}= useQuery({
        queryKey:['isAdmin', user?.email],
        enabled:!loading && !! user?.email && !! localStorage.getItem('access-token'),
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('is admin res', res )
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminLoading]

}

export default useAdmin;