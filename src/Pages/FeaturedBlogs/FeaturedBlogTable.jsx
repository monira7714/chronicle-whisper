import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types'

const FeaturedBlogTable = ({ blog }) => {
    // const { title, creatorName, creatorPhoto } = blog;
    const blogTitle = blog.title;
    const blogOwner = blog.creatorName;
    const blogOwnerPhoto = blog.creatorPhoto;
    console.log(blogTitle, blogOwner, blogOwnerPhoto);


    const columns = [
        {
            name: 'Serial No',
            selector: row => row.id,

        },
        {
            name: 'Blog Title',
            selector: row => row.title,
        },
        {
            name: 'Blog Owner',
            selector: row => row.owner,
        },
        {
            name: 'Picture',
            selector: row => row.pic,
        },
    ];

    // const tableData = [

    // ] 

    const data = [
        {
            id: 1,
            title: blogTitle,
            owner: blogOwner,
            pic: blogOwnerPhoto
        }
    ]

    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    );
};

FeaturedBlogTable.propTypes = {
    blog: PropTypes.object
}

export default FeaturedBlogTable;