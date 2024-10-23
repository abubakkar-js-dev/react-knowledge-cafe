import Profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between container mx-auto py-8 border-b-2 mb-8'>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Knowledge Cafe</h2>
            <img className='w-14 h-14' src={Profile} alt="Profile img" />
        </header>
    );
};

export default Header;