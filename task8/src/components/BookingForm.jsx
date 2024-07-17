import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/confirm`, { state: { ...formData, id } });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Link to={`/movie/${id}`} className="text-blue-500 hover:underline">
        &larr; Back to Movie Details
      </Link>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold">Booking Form for Movie {id}</h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="border rounded p-3 w-full mb-4 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="border rounded p-3 w-full mb-4 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            required
            className="border rounded p-3 w-full mb-4 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
