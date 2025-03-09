import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-full py-3">
      <nav className="flex justify-center space-x-4 md:space-x-12">
        <Link
          to="/"
          className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-200 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          home
        </Link>
        <Link
          to="/about"
          className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-200 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          about
        </Link>
        <Link
          to="/projects"
          className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-200 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          projects
        </Link>
        <Link
          to="/resume"
          className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-200 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          resume
        </Link>
      </nav>
    </div>
  );
};

export default Header;
