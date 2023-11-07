import Swal from "sweetalert2";
import NavBar from "../../shared/NavBar/NavBar";

const AddBlog = () => {

    const handleAddBlog = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const shortDes = form.shortDes.value;
        const longDes = form.longDes.value;
        const newBlog = { title, photo, category, shortDes, longDes }
        console.log(form, newBlog);



        fetch('http://localhost:5000/blogs', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newBlog),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Blog added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done',

                    })
                }
            })
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className="md:mx-20 mx-8 my-12 md:p-20 p-4 bg-orange-100 space-y-4 rounded-2xl">
                <h1 className="md:text-3xl text-lg text-orange-500 font-extrabold text-center mb-8">Add Your Blog</h1>
                <form onSubmit={handleAddBlog} className="space-y-4">
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
                            <input type="submit" value="Add Blog" className="btn btn-block bg-orange-400" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;