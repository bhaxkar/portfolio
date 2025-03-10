// Blog.js
const Blog = () => {
    return (
        <div className="py-2 flex items-center justify-center">
            <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto backdrop-blur-sm bg-black/40 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden">
                <p className="text-custom-yellow text-2xl font-mono">Blog</p>
                <div className="mt-5 flex flex-col gap-3">
                    <a
                      href="https://medium.com/dev-genius/call-by-value-and-call-by-reference-a-contrast-between-c-and-java-3a6949b4918d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-custom-yellow text-lg"
                    > ⤷ Call by Value and Call by Reference: A Contrast Between C and Java</a>
                    <a
                      href="https://medium.com/@bhaxkar/what-is-generative-ai-and-how-transformers-make-it-possible-b2668fa661a5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-custom-yellow text-lg"
                    > ⤷ What is Generative AI and How Transformers Make it Possible</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;