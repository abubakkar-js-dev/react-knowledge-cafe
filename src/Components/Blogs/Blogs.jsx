import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    console.log(blogs);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <h2>This is a blogs</h2>
        </div>
    );
};

export default Blogs;