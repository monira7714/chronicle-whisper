import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import NavBar from '../../shared/NavBar/NavBar';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { VscSend } from 'react-icons/vsc';
import Swal from "sweetalert2";
import CommentCard from "../../components/CommentCard/CommentCard";

const BlogDetails = () => {

    const { user } = useContext(AuthContext);

    const { id } = useParams();
    // console.log(id);

    const { data: comments } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/comments');
            return res.json()
        }
    })

    const { isPending, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            return res.json()
        }
    })

    console.log(comments, blogs);


    if (isPending) {
        return <Skeleton count={10} />
    }

    // const found = blogs.find(blog => blog._id === id)
    const found = blogs.find(blog => blog._id === id);
    console.log(found);

    const { title, photo, shortDes, longDes, creator } = found;
    // console.log(found);

    const handleComment = (e) => {
        // e.preventDefault();

        const comment = e.target.comment.value;
        e.target.comment.value = '';
        console.log('hi from comment', comment);
        const name = user.displayName;
        const photo = user.photoURL;
        const blogId = id;
        const newComment = { comment, name, photo, blogId };
        console.log(newComment);

        {/* storing comments on db*/ }
        fetch('http://localhost:5000/comments', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newComment),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Comment is done successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done',

                    })
                }
            })


    }

    return (
        <div className="space-y-8">
            <NavBar></NavBar>
            {/* blog detail */}
            <div className="card mt-20 bg-white text-black">
                <figure className="px-6">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body mx-12 my-12 space-y-4 p-6">
                    <h2 className="card-title text-2xl ">{title}</h2>
                    <p className='text-lg '>{shortDes}</p>
                    <p className='text-lg '>{longDes}</p>
                </div>
            </div>
            {/* comment section */}
            <div className="md:mx-20 mx-8 font-black my-12 space-y-4 text-black">
                <h3 >Comment Section</h3>
                <hr className="bg-[#464545] h-1" />
                <h4>Write your comment here</h4>
                {
                    user.email === creator ? <><h3 className="pl-8 text-red-500">You cannot comment on your own blog!</h3></> :
                        <form onSubmit={handleComment} className="flex items-center">
                            <textarea className="border-black border-2 textarea" name="comment" id="" cols="100" rows="3" required></textarea>
                            <button className="flex items-center gap-2 bg-orange-500 p-4 text-white rounded-r-lg text-2xl" >
                                <input type="submit" value="Comment" />
                                <VscSend></VscSend>
                            </button>
                        </form>
                }
                {/* comments */}
                <div className="my-16 space-y-8 pt-12">
                    {
                        comments?.map(com => <CommentCard key={com._id} com={com} id={id}></CommentCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;