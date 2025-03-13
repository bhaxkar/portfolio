const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-500 animate-pulse mb-8">404</h1>
                <div className="relative">
                    <div className="h-px w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute top-0 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                </div>
                <h2 className="text-2xl md:text-4xl text-white mt-8 mb-4">
                    <span className="text-blue-500">&lt;</span>
                    Page Not Found
                    <span className="text-blue-500">/&gt;</span>
                </h2>
                <p className="text-gray-400 mb-8">Looks like you've ventured into undefined territory!</p>
                <div className="space-x-4">
                    <a 
                        href="/" 
                        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Return Home
                    </a>
                    <a 
                        href="/projects" 
                        className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                        View Projects
                    </a>
                </div>
                <div className="mt-12">
                    <code className="text-sm text-gray-500">
                        <span className="text-blue-500">TypeError</span>: Cannot read property 'page' of undefined
                    </code>
                </div>
            </div>
        </div>
    )
}

export default Error;