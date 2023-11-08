import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import NavBar from "../../shared/NavBar/NavBar";
import AllBlogsCard from "../../components/AllBlogsCard/AllBlogsCard";
const AllBlogs = () => {
    const { isPending, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            return res.json()
        }
    })


    // console.log(blogs);

    if (isPending) {
        return <Skeleton count={15} />
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-20 py-20 bg-[#f6f6f6]">
               {
                blogs?.map(blog => <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>)
               }
            </div>
        </div>
    );
};

export default AllBlogs;