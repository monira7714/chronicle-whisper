import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import RecentBlogsCard from "../RecentBlogsCard/RecentBlogsCard";
const RecentBlogs = () => {

    const { isPending, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            return res.json()
        }
    })

    if (isPending) {
        return <Skeleton count={10} />
    }
    console.log(blogs);

    const recentBlogs = blogs.slice(-6)
    console.log(recentBlogs);

    return (
        <div className="ml-12 my-12">
            <h1 className="mb-16">Recent Blog</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center">
                {
                    recentBlogs.map(blog=> <RecentBlogsCard key={blog._id} blog={blog}></RecentBlogsCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;