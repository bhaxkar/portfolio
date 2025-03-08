import ToolsCarousel from "./Tool.js"

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-4 md:py-8">
      <div className="mt-12 md:mt-16 w-11/12 md:w-6/12 mx-auto backdrop-blur-sm bg-black/30 p-4 md:p-6 rounded-xl shadow-xl">
        <div className="pt-6 md:pt-8 text-custom-yellow p-2 md:p-4">
          <h2 className="text-xl md:text-2xl font-mono text-center md:text-right mb-4 md:mb-6">
            Who am I?
          </h2>
          <div className="space-y-3 md:space-y-4">
            <p className="font-mono text-sm md:text-base">
              I'm Bhaskar Jha, a tech enthusiast with a solid foundation in
              Computer Science. I have skills in MERN stack, Core Java (OOPs,
              multithreading, collection framework, and exception handling),
              Golang (concurrent programming), Python, SQL, AWS and I'm actively
              exploring the exciting domain of AI & ML.
            </p>
            <p className="font-mono text-sm md:text-base">
              I've successfully tackled a variety of coding challenges, which
              have enhanced my problem-solving skills.
            </p>
            <p className="font-mono text-sm md:text-base">
              I'm Seeking an SDE Internship to contribute to groundbreaking
              projects. Let's build something amazing together!
            </p>
            <p className="font-mono text-sm md:text-base">
              Feel free to reach out to me via email at
              bhaskarjha.info@gmail.com
            </p>
          </div>
        </div>
      </div>
      <ToolsCarousel/>
    </div>
  );
};
export default About;
