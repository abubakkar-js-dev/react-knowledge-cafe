import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    return (
        <div className="p-5 bg-white rounded-lg">
            <h2 className="text-base md:text-lg text-black font-semiboldn">{bookmark.title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;