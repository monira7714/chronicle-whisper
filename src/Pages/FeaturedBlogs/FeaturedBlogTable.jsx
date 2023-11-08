import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types'

const FeaturedBlogTable = ({ content }) => {
    console.log(content);
    const { blogTitle, blogOwner, blogOwnerPhoto } = content;
    // const blogTitle = content.title;
    // const blogOwner = content.creatorName;
    // const blogOwnerPhoto = content.creatorPhoto;
    console.log(blogTitle, blogOwner, blogOwnerPhoto);


    const columns = [
        // {
        //     name: 'Serial No',
        //     selector: row => row.id,

        // },
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

    const data = [
        {
            // id: {$},
            title: blogTitle,
            owner:blogOwner,
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
    content: PropTypes.object
}

export default FeaturedBlogTable;