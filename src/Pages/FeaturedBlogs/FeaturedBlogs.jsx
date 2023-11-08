import NavBar from '../../shared/NavBar/NavBar';
import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import { useState } from 'react';
import FeaturedBlogTable from './FeaturedBlogTable';
// import DataTable from 'react-data-table-component';

const FeaturedBlogs = () => {

    // const [data, setData] = useState()

    const { isPending, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            return res.json()
        }
    })

    // console.log(blogs);

    if (isPending) {
        return <Skeleton count={10} />
    }

    const allBlogs = blogs.filter(blog => blog.longDes.length > 850);
    const featuredBlogs = allBlogs.slice(0, 11);
    console.log(allBlogs, featuredBlogs);
    const Id = [0,1,2,3,4,5,6,7,8,9]

    // setData(featuredBlogs);
    // const columns = [
    //     {
    //         name: 'Serial No',
    //         selector: row => row.no,

    //     },
    //     {
    //         name: 'Blog Title',
    //         selector: row => row.title,
    //     },
    //     {
    //         name: 'Blog Owner',
    //         selector: row => row.owner,
    //     },
    //     {
    //         name: 'Picture',
    //         selector: row => row.pic,
    //     },
    // ];

    return (
        <div>
            <NavBar></NavBar>
            <div className='md:mx-24 mx-8 text-black'>
                {/* <DataTable
                    columns={columns}
                    data={data}
                /> */}
                {
                    featuredBlogs.map(blog => <FeaturedBlogTable key={Id} blog={blog}></FeaturedBlogTable>)
                }
            </div>
        </div>
    );
};

export default FeaturedBlogs;