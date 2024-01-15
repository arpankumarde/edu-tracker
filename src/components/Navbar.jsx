import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center lg:justify-between text-2xl p-4 bg-gray-800 text-white sticky top-0">
      <Link to="/" className="font-serif font-bold text-center">
        WordPiece
      </Link>
      <div className="text-xl hidden lg:flex gap-8">
        <Link to="/" className="font-bold text-center">
          Home
        </Link>
        <Link to="/blog" className="font-bold text-center">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
