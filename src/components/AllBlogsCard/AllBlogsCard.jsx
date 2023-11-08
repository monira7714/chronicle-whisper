import PropTypes from 'prop-types'
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AllBlogsCard = ({ blog }) => {
    const { _id, title, photo, category, shortDes, creationTime } = blog;
    const [isLiked,setIsLiked]= useState(false);
    let wishlist = []

    const handleLiked =()=>{
        setIsLiked(!isLiked);
        wishlist[blog]
    }

    return (
        <div className="card bg-white text-black">
            <label className='p-6'>
                <span className="text-base font-semibold text-black">Posted On : {creationTime}</span>
            </label>
            <figure className="px-6">
                <img src={photo} alt="Shoes" className="rounded-xl w-[250px] h-[200px]" />
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title text-2xl ">{title}</h2>
                <h6 className='bg-orange-500/20 text-orange-500 p-3 rounded w-fit'>Category : {category}</h6>
                <p className='text-lg '>{shortDes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/blogDetail/${_id}`}><button className="btn bg-orange-500 text-white">Details</button></Link>
                    <button onClick={handleLiked} className="btn bg-orange-500 text-white text-2xl">
                        {
                            isLiked ? <AiFillHeart></AiFillHeart> : <AiOutlineHeart></AiOutlineHeart>
                                
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

AllBlogsCard.propTypes = {
    blog: PropTypes.object
}

export default AllBlogsCard;