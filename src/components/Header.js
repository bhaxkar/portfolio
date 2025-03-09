import poster from '../../assets/poster.webp';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';

const Header = () => {
    return(
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-4 md:py-8">
            <div className="relative w-full md:w-fit mx-auto px-4 md:px-0">
                <nav className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 w-full">
                    <ul className="flex justify-center space-x-4 md:space-x-12">
                        <li className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-200 hover:scale-110 cursor-pointer transition-all duration-300">about</li>
                        <li className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-200 hover:scale-110 cursor-pointer transition-all duration-300">projects</li>
                        <li className="text-custom-yellow font-mono text-base md:text-lg font-semibold hover:text-red-200 hover:scale-110 cursor-pointer transition-all duration-300">resume</li>
                    </ul>
                </nav> 
            </div>
            
            <div className="mt-12 md:mt-16 w-11/12 md:w-6/12 mx-auto backdrop-blur-sm bg-black/30 p-4 md:p-6 rounded-xl shadow-xl">
                <div>
                    <h1 className="text-custom-yellow font-coro text-2xl md:text-3xl mb-2 text-center md:text-left">👋 Hey, I'm Bhaskar Jha</h1>
                </div>
                
                <div className="flex justify-center md:justify-start md:mx-12 gap-4 mt-4">
                    <a href="https://www.linkedin.com/in/bhaxkar/" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6 hover:scale-125 transition-transform duration-300" src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/bhaxkar" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6 hover:scale-125 transition-transform duration-300" src={githubIcon} alt="GitHub" />
                    </a>
                </div>

                <div className="text-custom-yellow mt-6">
                    <p className="text-xl md:text-2xl mb-4 font-mono text-center md:text-left">Right Now, I'm</p>
                    <ul className="space-y-4 font-mono">
                       <li className="text-base md:text-base">➢ Honing my technical acumen in Information Technology at <a href="https://hithaldia.ac.in/" className="underline hover:text-red-200 transition-colors">Haldia Institute of Technology</a>.</li>
                       <li className="text-base md:text-base">➢ Working as <span className="font-bold">SDE Intern</span> at <a href="https://www.turnpikeanalyst.com/" className="underline hover:text-red-200 transition-colors">Turnpike Analyst</a>, contributing to innovative solutions.</li>
                       <li className="text-base md:text-base">➢ Spearheading technical initiatives as the <a href="https://www.instagram.com/acmhitchapter/" className="underline hover:text-red-200 transition-colors">ACM HIT Student Chapter's</a> <span className="font-bold">Tech Lead</span>.</li>
                    </ul>
                </div>

                <div className="pt-6 md:pt-8 text-custom-yellow min-h-screen p-2 md:p-4">
                    <h2 className="text-xl md:text-2xl font-mono text-center md:text-right mb-4 md:mb-6">Who am I?</h2>

                    <div className="space-y-3 md:space-y-4">
                        <p className="font-mono text-sm md:text-base">
                        I'm Bhaskar Jha, a tech enthusiast with a solid foundation in Computer Science. I have skills in MERN stack, Core Java (OOPs, multithreading, collection framework, and exception handling), Golang (concurrent programming), Python, SQL, AWS and I'm actively exploring the exciting domain of AI & ML.
                        </p>
                        <p className="font-mono text-sm md:text-base">
                        I've successfully tackled a variety of coding challenges, which have enhanced my problem-solving skills.
                        </p>
                        <p className="font-mono text-sm md:text-base">
                        I'm Seeking an SDE Internship to contribute to groundbreaking projects. Let's build something amazing together! 
                        </p>
                        <p className="font-mono text-sm md:text-base">
                        Feel free to reach out to me via email at bhaskarjha.info@gmail.com 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;