
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-slate-600 text-white shadow">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Movie Booking App</h1>
                <nav>
                    <Link to="/" className="mr-4 hover:text-gray-200">Home</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
