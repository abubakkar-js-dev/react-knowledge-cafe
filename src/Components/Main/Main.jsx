import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

const Main = () => {

const [bookmarks,setBookmarks] = useState([]);
const [readtime,setReadtime] = useState(0);
const handleBookmarksBtn = (blog) => {
    if(bookmarks.includes(blog)){
        alert('Already exist. You can not add it.')
    }else{

        const newBookmarks = [...bookmarks,blog];
        setBookmarks(newBookmarks);
    }

}

const handleMarksAsRead = (id,readingTime) =>{
    const timeNum = parseInt(readingTime[0]);
    setReadtime(readtime + timeNum);

    // remove from bookmarks when read
    const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
}

    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between ">
            <Blogs
            handleBookmarksBtn={handleBookmarksBtn}
            handleMarksAsRead={handleMarksAsRead}
            ></Blogs>
            <Bookmarks
            bookmarks={bookmarks}
            readtime = {readtime}
            ></Bookmarks>
        </div>
    );
};

export default Main;