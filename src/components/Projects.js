const projects = [
  {
    title: "Chatter",
    description: "The backend implementation for a video sharing platform like youtube",
    stack: ["express.js", "mongodb", "socket.io", "zustand", "tailwind-css", "bcrypt", "cloudinary", "jwt"],
    status: "In Progress",
    link: "https://github.com/bhaxkar/Chatter",
    demo: "https://videoverse-demo.example.com", 
  },
  {
    title: "VideoVerse",
    description: "The backend implementation for a video sharing platform like youtube",
    stack: ["express.js", "mongodb", "node.js", "bcrypt", "multer", "cloudinary", "jwt"],
    status: "In Progress",
    link: "https://github.com/bhaxkar/VideoVerse",
    demo: "https://videoverse-demo.example.com", 
  },
  {
    title: "Foodify",
    description: "Modern food ordering frontend application",
    stack: ["react.js", "react-router", "redux-toolkit", "tailwind CSS", "jest", "react-testing-library"],
    status: "Done",
    link: "https://github.com/bhaxkar/Foodify",
    demo: "https://www.youtube.com/watch?v=YavNxbvfjF8", 
  },
  {
    title: "Prajna",
    description: "Prajna (प्रज्ञा), the AI-powered Discord bot that provides intelligent responses.",
    stack: ["python", "discord.py", "discord-bot", "google-generative-ai"],
    status: "Done",
    link: "https://github.com/bhaxkar/Prajna",
    demo: "https://www.youtube.com/watch?v=OwgCU8PLqHA", 
  },
];

const ProjectCard = ({ title, description, stack, status, link, demo }) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-800 hover:border-custom-yellow/50 transition-all duration-300">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-custom-yellow">{title}</h2>
        <span className="text-sm bg-custom-yellow/20 text-custom-yellow px-3 py-1 rounded-full">
          {status}
        </span>
      </div>
      <p className="text-gray-300 mt-2">{description}</p>
      <div className="mt-3">
        <p className="text-gray-300 font-semibold">Stack:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-sm px-4 py-2 rounded-full overflow-hidden"
        >
          <span className="absolute inset-0 bg-slate-800 rounded-full group-hover:bg-custom-yellow/30 transition-all duration-300"></span>
          <span className="absolute inset-0 border border-custom-yellow/40 rounded-full group-hover:border-custom-yellow/60 transition-all duration-300"></span>
          <span className="relative text-custom-yellow flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </span>
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-sm px-4 py-2 rounded-full overflow-hidden"
        >
          <span className="absolute inset-0 bg-slate-800 rounded-full group-hover:bg-custom-yellow/30 transition-all duration-300"></span>
          <span className="absolute inset-0 border border-custom-yellow/40 rounded-full group-hover:border-custom-yellow/60 transition-all duration-300"></span>
          <span className="relative text-custom-yellow flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="py-4 md:py-8">
      <div className="container w-11/12 md:w-6/12 mx-auto px-4">
        <h1 className="text-2xl font-bold text-custom-yellow font-mono mb-6 text-right">
          Witness my tech stack
        </h1>
        <div className="relative mb-8">
          <div className="h-0.5 bg-custom-yellow/20 w-full">
            <div className="h-0.5 bg-custom-yellow w-1/2 absolute left-0"></div>
          </div>
        </div>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;