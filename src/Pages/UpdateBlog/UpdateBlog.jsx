import { useNavigate, useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
import NavBar from "../../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateBlog = () => {
    const {user} =useContext(AuthContext)
    const id = useParams();
    const navigate= useNavigate()
    // const { isPending, data: blogs } = useQuery({
    //     queryKey: ['blogs'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/blogs/${id}`);
    //         return res.json()
    //     }
    // })

    const ID = id.id

    console.log(id,ID);

    // if (isPending) {
    //     return <Skeleton count={10} />
    // }

    // const found = blogs.filter(blog => blog._id === ID)
    // console.log(found, id);

    const handleUpdateBlog = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const shortDes = form.shortDes.value;
        const longDes = form.longDes.value;
        const creationTime = user.metadata.creationTime;
        const createdAt = user.metadata.createdAt;
        const creator = user.email;
        const creatorName = user.displayName;
        const creatorPhoto = user.photoURL;
        const updatedBlog = {title, photo, category, shortDes, longDes, creationTime, createdAt, creator, creatorName, creatorPhoto};
        console.log(updatedBlog);

        fetch(`http://localhost:5000/blogs/${ID}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedBlog),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Blog updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done',
                    })
                    navigate('/')
                }
            })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="md:mx-20 mx-8 my-12 md:p-20 p-4 bg-orange-100 space-y-4 rounded-2xl">
                <h1 className="md:text-3xl text-lg text-orange-500 font-extrabold text-center mb-8">Update Your Blog</h1>
                <form onSubmit={handleUpdateBlog} className="space-y-4">
                    {/* title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Blog Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Enter Your Blog Title" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    {/* photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input placeholder="Enter The Photo URL" type="text" name="photo" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    {/* Category */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group lg:pr-36">
                            <select className="w-full p-4 text-base" name="category" required>
                                <option value="Nature">Nature</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Technology">Technology</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="Food">Food</option>
                                <option value="Health">Health</option>
                            </select>
                        </label>
                    </div>
                    {/* Short Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDes" placeholder="Write a short description of your blog" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    {/* Long Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="longDes" placeholder="Write a long description of your blog" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="text-center ">
                        <button className="mt-8">
                            <input type="submit" value="Update Blog" className="btn btn-block bg-orange-400 text-white" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;