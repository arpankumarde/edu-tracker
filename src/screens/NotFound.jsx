import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="px-8 flex flex-col items-center justify-center h-[80dvh] bg-[#fefefe]">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
