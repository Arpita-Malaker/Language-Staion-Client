import { useQuery } from "@tanstack/react-query";


const useClasses = () => {

const {data: classesInfo =[], isLoading: loading,refetch}=useQuery({

queryKey:['classesInfo'],
queryFn: async()=>{
    const res = await fetch('https://b7a12-summer-camp-server-side-arpita-malaker.vercel.app/classesInfo')
    return res.json();
}

})

return [classesInfo,loading,refetch]
   
}

export default useClasses;