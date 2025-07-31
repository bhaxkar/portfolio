import { Link } from "react-router-dom";
import Resume from "../../public/resume.pdf"

const Header = () => {
  return (
    <div className="w-full py-3">
      <nav className="flex justify-center space-x-4 md:space-x-12">
        <Link
          to="/"
          className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-300 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          home
        </Link>
        <Link
          to="/about"
          className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-300 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          about
        </Link>
        <Link
          to="/projects"
          className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-300 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          projects
        </Link>
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-300 hover:scale-110 cursor-pointer transition-all duration-300 flex items-center gap-2" 
        >
          <span>resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default Header;
