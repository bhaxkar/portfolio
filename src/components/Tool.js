import React from 'react';

const ToolsCarousel = () => {
  const tools = [
    { name: "JavaScript", icon: "JS", bgColor: "bg-yellow-500", textColor: "text-black" },
    { name: "TypeScript", icon: "TS", bgColor: "bg-blue-500", textColor: "text-white" },
    { name: "Next.js", icon: "N", bgColor: "bg-black", textColor: "text-white", borderColor: "border-white" },
    { name: "React.js", icon: "⚛", bgColor: "bg-blue-600", textColor: "text-white" },
    { name: "TailwindCSS", icon: "~", bgColor: "bg-cyan-500", textColor: "text-white" },
    { name: "Bootstrap", icon: "B", bgColor: "bg-purple-600", textColor: "text-white" },
    { name: "C++", icon: "C++", bgColor: "bg-blue-700", textColor: "text-white" },
    { name: "CSS", icon: "CSS", bgColor: "bg-blue-500", textColor: "text-white" },
    { name: "nx", icon: "nx", bgColor: "bg-gray-800", textColor: "text-white" },
    { name: "Express", icon: "ex", bgColor: "bg-gray-800", textColor: "text-white" },
    { name: "TensorFlow", icon: "TF", bgColor: "bg-orange-600", textColor: "text-white" },
    { name: "Keras", icon: "K", bgColor: "bg-red-500", textColor: "text-white" },
    { name: "Bun", icon: "🍞", bgColor: "bg-gray-800", textColor: "text-white" },
    { name: "Flask", icon: "🧪", bgColor: "bg-gray-700", textColor: "text-white" },
    { name: "Arch Linux", icon: "A", bgColor: "bg-blue-600", textColor: "text-white" },
    { name: "MongoDB", icon: "M", bgColor: "bg-green-600", textColor: "text-white" },
    { name: "PostgreSQL", icon: "pg", bgColor: "bg-blue-600", textColor: "text-white" },
  ];

  return (
    <div className="w-11/12 md:w-6/12 mx-auto mt-3 mb-12">
      <div className="backdrop-blur-sm bg-black/30 p-4 md:p-6 rounded-xl shadow-xl">
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
                         border border-gray-700 hover:border-custom-yellow transition-all duration-300"
            >
              <div className={`rounded-full w-8 h-8 flex items-center justify-center ${tool.bgColor} ${tool.textColor} mr-2
                              ${tool.borderColor ? tool.borderColor + " border" : ""}`}>
                <span className="text-xs font-bold">{tool.icon}</span>
              </div>
              <span className="text-white font-mono text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsCarousel;