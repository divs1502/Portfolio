import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Divyesh Lahane</h3>
            <p className="text-gray-400">Software Engineer • Full Stack Developer</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/divs1502/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/divyesh-lahane/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:divyeshlahane15@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            &copy; 2025 Divyesh Lahane. Made with 
            <Heart size={16} className="text-red-400" /> 
            and React
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Building digital experiences that matter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
