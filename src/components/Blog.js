// Blog.js
const Blog = () => {
    return (
        <div className="py-2 flex items-center justify-center">
            <div className="w-11/12 md:w-5/6 lg:w-6/12 mx-auto backdrop-blur-sm bg-black/40 p-8  rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden">
                <p className="text-custom-yellow text-2xl font-mono my-4">Blog</p>

                <div className="flex items-start my-2">
                  <span className="text-lg mr-3 text-custom-yellow"> ⤷
                  </span>
                   {" "}
                    <a
                      href="https://github.com/bhaxkar/aws-high-scalability-infrastructure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-custom-yellow font-mono hover:text-red-200 transition-colors"
                    >
                      Step by Step Guide to Create AWS High Scalability Infrastructure
                    </a>
                    .
                </div>
              
                <div className="flex items-start my-2">
                  <span className="text-lg mr-3 text-custom-yellow"> ⤷
                  </span>
                   {" "}
                    <a
                      href="https://medium.com/@bhaxkar/what-is-generative-ai-and-how-transformers-make-it-possible-b2668fa661a5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-custom-yellow font-mono hover:text-red-200 transition-colors"
                    >
                      What is Generative AI and How Transformers Make it Possible
                    </a>
                    .
                </div>

       
                <div className="flex items-start">
                  <span className="text-lg mr-3 text-custom-yellow"> ⤷
                  </span>
                   {" "}
                    <a
                      href="https://medium.com/@bhaxkar/what-is-generative-ai-and-how-transformers-make-it-possible-b2668fa661a5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-custom-yellow font-mono hover:text-red-200 transition-colors"
                    >
                      Call by Value and Call by Reference: A Contrast Between C and Java
                    </a>
                    .
                </div>

            </div>
        </div>
    );
};

export default Blog;