import linkedinIcon from '../../public/icons/linkedin.svg';
import githubIcon from '../../public/icons/github.svg';

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 md:py-16 flex items-center justify-center">
      <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto backdrop-blur-sm bg-black/40 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-custom-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-custom-yellow/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-custom-yellow font-coro text-4xl md:text-5xl mb-4 text-center">
            👋 Hey, I'm Bhaskar Jha
          </h1>
          
          <div className="flex justify-center gap-6 mt-6 mb-8">
            <a
              href="https://www.linkedin.com/in/bhaxkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-800/50 p-3 rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1">
                <img
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  src={linkedinIcon}
                  alt="LinkedIn"
                />
              </div>
            </a>
            <a
              href="https://github.com/bhaxkar"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gray-800/50 p-3 rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1">
                <img
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  src={githubIcon}
                  alt="GitHub"
                />
              </div>
            </a>
          </div>

          <div className="text-custom-yellow mt-6">
            <div className="flex items-center mb-6">
              <div className="h-px bg-custom-yellow/30 flex-grow mr-4"></div>
              <p className="text-2xl font-mono">Right Now, I'm</p>
              <div className="h-px bg-custom-yellow/30 flex-grow ml-4"></div>
            </div>
            
            <ul className="space-y-6 font-mono">
              <li className="bg-gray-800/20 p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-300 transform hover:scale-102">
                <div className="flex items-start">
                  <span className="text-lg mr-3">➢</span>
                  <p className="text-lg">
                    Honing my technical acumen in Information Technology at{" "}
                    <a
                      href="https://hithaldia.ac.in/"
                      className="underline decoration-dotted hover:text-red-200 transition-colors"
                    >
                      Haldia Institute of Technology
                    </a>
                    .
                  </p>
                </div>
              </li>
              
              <li className="bg-gray-800/20 p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-300 transform hover:scale-102">
                <div className="flex items-start">
                  <span className="text-lg mr-3">➢</span>
                  <p className="text-lg">
                    Working as <span className="font-bold">SDE Intern</span> at{" "}
                    <a
                      href="https://www.turnpikeanalyst.com/"
                      className="underline decoration-dotted hover:text-red-200 transition-colors"
                    >
                      Turnpike Analyst
                    </a>
                    , contributing to innovative solutions.
                  </p>
                </div>
              </li>
              
              <li className="bg-gray-800/20 p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-300 transform hover:scale-102">
                <div className="flex items-start">
                  <span className="text-lg mr-3">➢</span>
                  <p className="text-lg">
                    Spearheading technical initiatives as the{" "}
                    <a
                      href="https://www.instagram.com/acmhitchapter/"
                      className="underline decoration-dotted hover:text-red-200 transition-colors"
                    >
                      ACM HIT Student Chapter's
                    </a>{" "}
                    <span className="font-bold">Tech Lead</span>.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;