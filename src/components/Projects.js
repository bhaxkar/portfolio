const projects = [
  {
    title: "VideoVerse",
    description: "The backend implementation for a video sharing platform like youtube",
    stack: ["Express.js", "mongodb", "node.js", "bcrypt", "multer", "cloudinary", "jwt"],
    status: "Done",
    link: "https://github.com/bhaxkar/VideoVerse",
  },
  {
    title: "Foodify",
    description: "Modern food ordering frontend application",
    stack: ["react.js", "react-router", "redux-toolkit", "tailwind CSS", "jest", "react-testing-library"],
    status: "Done",
    link: "https://github.com/bhaxkar/Foodify",
  },
  {
    title: "Prajna",
    description: "Prajna (प्रज्ञा), the AI-powered Discord bot that provides intelligent responses.",
    stack: ["python", "discord.py", "google-generative-ai"],
    status: "Done",
    link: "https://github.com/bhaxkar/Prajna",
  },
];

const ProjectCard = ({ title, description, stack, status, link }) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-800">
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
      <a
        href={link}
        className="mt-4 inline-block text-custom-yellow hover:underline"
      >
        Visit Project →
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
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