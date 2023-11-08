import PropTypes from 'prop-types'

const CommentCard = ({ com, id }) => {

    const { name, photo, comment } = com;

    console.log(com);

    return (
        <div>
            {
                com.blogId === id ? <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src={photo} />
                        </div>
                    </div>
                    <div className="chat-header">
                        {name}
                    </div>
                    <div className="chat-bubble">{comment}</div>
                </div> : ""
        }

        </div>
    );
};

CommentCard.propTypes = {
    com: PropTypes.object,
    id: PropTypes.string
}

export default CommentCard;

// {
//     comments?.map(com => <CommentCard key={com._id} com={com} id={id}></CommentCard>)
// }