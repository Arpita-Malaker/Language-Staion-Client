import { useQuery } from "@tanstack/react-query";


const useClasses = () => {

const {data: classesInfo =[], isLoading: loading,refetch}=useQuery({

queryKey:['classesInfo'],
queryFn: async()=>{
    const res = await fetch('http://localhost:5000/classesInfo')
    return res.json();
}

})

return [classesInfo,loading,refetch]
   
}

export default useClasses;