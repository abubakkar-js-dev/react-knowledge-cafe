import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarksBtn,handleMarksAsRead}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(err => console.log(err))
    },[])
    return (
        <div className="md:w-2/3">

            <div className="space-y-8 md:space-y-10">
                {blogs.map(blog => <Blog 
                key={blog.id}
                blog={blog}
                handleBookmarksBtn={handleBookmarksBtn}
                handleMarksAsRead={handleMarksAsRead}
                ></Blog>)}
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarksBtn: PropTypes.func.isRequired,
    handleMarksAsRead: PropTypes.func.isRequired,
}

export default Blogs;