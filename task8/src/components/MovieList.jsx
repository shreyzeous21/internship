import { Link } from "react-router-dom";

const movies = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  title: `Movie ${index + 1}`,
  image: `https://picsum.photos/200/300?movies=${index + 1}`,
}));

const MovieList = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Movie List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
