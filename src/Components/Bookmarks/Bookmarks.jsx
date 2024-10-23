import Bookmark from "../../Bookmark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({bookmarks,readtime}) => {
    return (
        <div className="md:w-1/3 ml-0 md:ml-6 h-full">
            <div className="bg-[#6047EC]/10 p-6 md:p-8 mb-4 md:mb-6 rounded-lg border border-[#6047EC]">
                <h3 className="text-lg md:text-xl lg:text-2xl text-[#6047EC] font-bold ">Spent time on read: {readtime} min</h3>
            </div>
            <div className="bg-[#111111]/5 space-y-4 p-6 md:p-8 rounded-lg min-h-full">
                <h2 className="text-lg md:text-xl font-bold">Bookmarked Blog: {bookmarks.length}</h2>
                <div className="flex flex-col gap-4">
                    {bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)}
                </div> 
            </div>
        </div>

    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readtime: PropTypes.number.isRequired,
}


export default Bookmarks;