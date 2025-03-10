const Footer = () => {
    return (
      <div className="py-4  flex items-center justify-center">
        <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto backdrop-blur-sm bg-black/40 p-4 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-custom-yellow/5 rounded-full blur-3xl"></div>
          
          <div className="flex justify-center">
            <a
              href="mailto:bhaxkar@gmail.com"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium text-custom-yellow border border-custom-yellow/30 rounded-full"
            >
              <span className="absolute w-0 h-full bg-custom-yellow left-0 top-0"></span>
              <span className="relative flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Connect With Me
              </span>
            </a>
          </div>
          
          <p className="text-custom-yellow/50 text-center text-sm mt-4 font-mono">
            © {new Date().getFullYear()} Bhaskar Jha. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
export default Footer;