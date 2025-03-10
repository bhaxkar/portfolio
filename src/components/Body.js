import linkedinIcon from '../../public/icons/linkedin.svg';
import githubIcon from '../../public/icons/github.svg';

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-4 md:py-8">
      <div className="mt-12 md:mt-16 w-11/12 md:w-6/12 mx-auto backdrop-blur-sm bg-black/30 p-4 md:p-6 rounded-xl shadow-xl">
        <div>
          <h1 className="text-custom-yellow font-coro text-3xl mb-2 text-center md:text-left">
            👋 Hey, I'm Bhaskar Jha
          </h1>
        </div>

        <div className="flex justify-center md:justify-start md:mx-12 gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/bhaxkar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6 hover:scale-125 transition-transform duration-300"
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/bhaxkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6 hover:scale-125 transition-transform duration-300"
              src={githubIcon}
              alt="GitHub"
            />
          </a>
        </div>

        <div className="text-custom-yellow mt-6">
          <p className="text-xl mb-4 font-mono text-left">Right Now, I'm</p>
          <ul className="space-y-4 font-mono">
            <li className="text-lg">
              ➢ Honing my technical acumen in Information Technology at{" "}
              <a
                href="https://hithaldia.ac.in/"
                className="underline hover:text-red-200 transition-colors"
              >
                Haldia Institute of Technology
              </a>
              .
            </li>
            <li className="text-lg">
              ➢ Working as <span className="font-bold">SDE Intern</span> at{" "}
              <a
                href="https://www.turnpikeanalyst.com/"
                className="underline hover:text-red-200 transition-colors"
              >
                Turnpike Analyst
              </a>
              , contributing to innovative solutions.
            </li>
            <li className="text-lg">
              ➢ Spearheading technical initiatives as the{" "}
              <a
                href="https://www.instagram.com/acmhitchapter/"
                className="underline hover:text-red-200 transition-colors"
              >
                ACM HIT Student Chapter's
              </a>{" "}
              <span className="font-bold">Tech Lead</span>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;