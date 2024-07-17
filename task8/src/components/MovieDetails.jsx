// src/MovieDetails.js

import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const image = `https://picsum.photos/400/600?random=${id}`;

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Movie List</Link>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-6">
                <img src={image} alt={`Movie ${id}`} className="w-full h-96 object-cover" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold">Movie {id}</h1>
                    <p className="mt-2 text-lg">Details about Movie {id}</p>
                    <Link to={`/book/${id}`} className="mt-4 inline-block bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
                        Book Seat
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
