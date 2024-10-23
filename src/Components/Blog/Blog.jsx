import PropTypes from "prop-types";
import { MdBookmarkBorder } from "react-icons/md";
const Blog = ({blog,handleBookmarksBtn,handleMarksAsRead}) => {
    const {cover,author,title,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className="border-b">
           <img className="h-[480px] w-full rounded-lg mb-6 md:mb-8" src={cover} alt={`cover picture of ${title}`} />
           <div className="flex justify-between mb-4">
                <div className="flex gap-6">
                    <img className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full" src={author_img} alt={`picture of ${author}`} />
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold">{author}</h4>
                        <p className="text-base text-gray-500 font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center text-gray-500 font-semibold text-lg md:text-xl gap-2">
                   <p>{reading_time}</p>
                   <button onClick={() => handleBookmarksBtn(blog)} className="w-6 h-6 text-2xl"><span><MdBookmarkBorder /></span></button> 
                </div>
           </div>
           <div className="mb-10">
            <h2 className="text-2xl md:3xl lg:text-4xl font-bold mb-4">{title}</h2>
            <div className="space-x-2 text-lg md:text-xl font-medium text-gray-500 mb-3 md:mb-4">
                {hashtags.map((hash,idx) => <span key={idx}>{hash}</span>)}
            </div>
            <button onClick={()=> handleMarksAsRead(blog.id,reading_time)}><a className="text-[#6047EC] text-lg md:text-xl font-semibold underline" href="#">Mark as read</a></button>
           </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarksBtn: PropTypes.func.isRequired,
    handleMarksAsRead: PropTypes.func.isRequired,
}

export default Blog;