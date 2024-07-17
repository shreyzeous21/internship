import { Link, useLocation } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 10000); // Random booking ID

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Link to="/" className="text-blue-500 hover:underline">
        &larr; Back to Movie List
      </Link>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold">Booking Confirmed!</h1>
        <div className="mt-4">
          <p className="text-lg">
            Your booking ID: <span className="font-bold">{bookingId}</span>
          </p>
          <p className="mt-2">
            Name: <span className="font-bold">{state.name}</span>
          </p>
          <p className="mt-2">
            Email: <span className="font-bold">{state.email}</span>
          </p>
          <p className="mt-2">
            Mobile: <span className="font-bold">{state.mobile}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
