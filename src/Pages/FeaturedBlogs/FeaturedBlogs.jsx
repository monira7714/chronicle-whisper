import NavBar from '../../shared/NavBar/NavBar';
import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import FeaturedBlogTable from './FeaturedBlogTable';
// import DataTable from 'react-data-table-component';

const FeaturedBlogs = () => {

    const { isPending, data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://eleventh-assignment-server-nine.vercel.app/blogs');
            return res.json()
        }
    })
    // console.log(blogs);
    if (isPending) {
        return <Skeleton count={10} />
    }

    const allBlogs = blogs.filter(blog => blog.longDes.length > 850);
    const featuredBlogs = allBlogs.slice(0, 11);
    // console.log(allBlogs, featuredBlogs);
    const Id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const tableContent = featuredBlogs.map(blog => {
        // const Id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        const blogTitle = blog.title;
        const blogOwner = blog.creatorName;
        const blogOwnerPhoto = blog.creatorPhoto;
        // console.log(blogTitle, blogOwner, blogOwnerPhoto);
        const dataInfo = { blogTitle, blogOwner, blogOwnerPhoto };
        // console.log(dataInfo);
        return dataInfo
    })
    console.log(tableContent);


    return (
        <div>
            <NavBar></NavBar>
            <div className='md:mx-24 mx-8 text-black'>
                {/* <DataTable
                    columns={columns}
                    data={data}
                /> */}
                {
                    tableContent.map(content => <FeaturedBlogTable key={Id} content={content}></FeaturedBlogTable>)
                }
            </div>
        </div>
    );
};

export default FeaturedBlogs;