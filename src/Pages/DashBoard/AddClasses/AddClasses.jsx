import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_Hosting_Key = import.meta.env.VITE_Image_Upload_Token;
const AddClasses = () => {
   
    const [axiosSecure] =useAxiosSecure();
    const { user } = useAuth();

   

    const { register, handleSubmit,reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`

    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData;
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {console.log(imgResponse);
            if(imgResponse.success){
                const imgURL= imgResponse.data.display_url;
                const {className, price,seats,name,email,status} = data;
                const classItems = {className, price:parseFloat(price),seats:parseInt(seats),name,email,status,image:imgURL}
                console.log(classItems);
                axiosSecure.post('/classesInfo',classItems)
                .then(data=>{
                    console.log('new data to the server', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class is send for confirmation',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
                
            }
            
            });


    }
  
    return (
        <div className="w-full mt-16">
            <div className="text-center"><h1>Add a class </h1></div>
            <form onSubmit={handleSubmit(onSubmit)} className="ml-24">
                <div className="flex gap-6">
                    <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text ">className: </span>
                        </label>
                        <input type="text" {...register("className", { required: true })} placeholder="Class Name" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text">Pick a Image</span>

                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                    </div>


                </div>
                <div className="flex gap-6 "> <div className="form-control  mt-8">
                    <label className="label">
                        <span className="label-text ">Instructor name </span>
                    </label>
                    <input type="text" {...register("name", { required: true })} value={user.displayName} className="input input-bordered w-full max-w-xs" ></input>

                </div>
                    <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text ">Instructor Email: </span>
                        </label>
                        <input type="text" {...register("email", { required: true })} value={user.email} className="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
                <div className="flex gap-6 ">
                    <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text">Available Seats </span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text ">Price </span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
                <div className="form-control mt-6">
                        <label className="label">
                            <span className="label-text ">Status </span>
                        </label>
                        <input type="text" {...register("status", { required: true })} value='pending'  className="badge badge-secondary text-center input input-bordered w-full max-w-xs" />

                    </div>
               


                    <div className="form-control mt-6">

                        <input type="submit" className="btn btn-info w-full max-w-xs" value="Add Class" />

                    </div>

             



               



            </form>

        </div>
    );
};

export default AddClasses;