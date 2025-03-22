import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiCss3, SiNodedotjs, SiExpress, 
  SiTensorflow, SiKeras, SiMongodb, SiPostgresql, 
  SiPython, SiC,  SiDocker, SiLinux, SiGithub
} from 'react-icons/si';
import { FaAws, FaJava  } from "react-icons/fa";

const ToolsCarousel = () => {
  const tools = [
    { name: "JavaScript", icon: <SiJavascript />, bgColor: "bg-yellow-500", textColor: "text-black" },
    { name: "TypeScript", icon: <SiTypescript />, bgColor: "bg-blue-500", textColor: "text-white" },
    { name: "Next.js", icon: <SiNextdotjs />, bgColor: "bg-black", textColor: "text-white", borderColor: "border-white" },
    { name: "React.js", icon: <SiReact />, bgColor: "bg-blue-600", textColor: "text-white" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, bgColor: "bg-cyan-500", textColor: "text-white" },
    { name: "CSS", icon: <SiCss3 />, bgColor: "bg-blue-500", textColor: "text-white" },
    { name: "Node.js", icon: <SiNodedotjs />, bgColor: "bg-green-800", textColor: "text-white" },
    { name: "Express", icon: <SiExpress />, bgColor: "bg-gray-800", textColor: "text-white" },
    { name: "TensorFlow", icon: <SiTensorflow />, bgColor: "bg-orange-600", textColor: "text-white" },
    { name: "Keras", icon: <SiKeras />, bgColor: "bg-red-500", textColor: "text-white" },
    { name: "MongoDB", icon: <SiMongodb />, bgColor: "bg-green-600", textColor: "text-white" },
    { name: "PostgreSQL", icon: <SiPostgresql />, bgColor: "bg-blue-600", textColor: "text-white" },
    { name: "Java", icon: <FaJava />, bgColor: "bg-red-700", textColor: "text-white" },
    { name: "Python", icon: <SiPython />, bgColor: "bg-yellow-400", textColor: "text-black" },
    { name: "C", icon: <SiC />, bgColor: "bg-blue-900", textColor: "text-white" },
    { name: "AWS", icon: <FaAws />, bgColor: "bg-orange-500", textColor: "text-white" },
    { name: "Docker", icon: <SiDocker />, bgColor: "bg-blue-400", textColor: "text-white" },
    { name: "Linux", icon: <SiLinux />, bgColor: "bg-gray-900", textColor: "text-white" },
    { name: "GitHub", icon: <SiGithub />, bgColor: "bg-gray-800", textColor: "text-white" }
  ];

  return (
    <div className="w-11/12 md:w-6/12 mx-auto mt-3 mb-6 backdrop-blur-sm bg-black/30 p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden">
      <h2 className="text-xl md:text-2xl font-mono text-custom-yellow text-center md:text-right mb-6 pt-4">
        Tools I've Mastered
      </h2>
      
      <div className="relative mb-8">
        <div className="h-0.5 bg-custom-yellow/20 w-full">
          <div className="h-0.5 bg-custom-yellow w-1/2 absolute left-0"></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center pb-6">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="flex items-center bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg 
                      border border-gray-700 hover:border-custom-yellow hover:bg-black/60 transition-all duration-300"
          >
            <div className={`rounded-full w-9 h-9 flex items-center justify-center ${tool.bgColor} ${tool.textColor} mr-2
                            ${tool.borderColor ? tool.borderColor + " border" : ""} shadow-md`}>
              <span className="text-lg">{tool.icon}</span>
            </div>
            <span className="text-white font-mono text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsCarousel;