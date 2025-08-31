import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import ProfileImage from './ProfileImage';

interface HeroProps {
  typedText: string;
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ typedText, scrollToSection }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Profile Image */}
                  <div className="mb-12">
            <div className="mx-auto mb-8">
              <ProfileImage size="lg" showFloatingElements={true} showStatus={true} isOnline={true} />
            </div>
          </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
          Hello, I'm <span className="text-indigo-600">Divyesh</span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-600 mb-8 h-12 flex items-center justify-center">
          <span className="mr-3">I'm a</span>
          <span className="text-indigo-600 font-semibold min-w-[280px] text-left">
            {typedText}
            <span className="animate-pulse text-indigo-400">|</span>
          </span>
        </div>
        
        {/* <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate Software Engineer with almost 2 years of experience at Cybage Software, 
          specializing in React, .NET, and GraphQL. I love building solutions that make a difference.
        </p> */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate Software Engineer with almost 2 years of experience at{" "}
          <a
            href="https://www.linkedin.com/company/cybage/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Cybage Software
          </a>
          , specializing in React, .NET, and GraphQL. I love building solutions that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/divs1502/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-indigo-600 hover:shadow-lg transition-all transform hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/divyesh-lahane/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all transform hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:divyeshlahane15@gmail.com" 
            className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-indigo-600 hover:shadow-lg transition-all transform hover:-translate-y-1"
            aria-label="Send Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-indigo-400" />
      </div>
    </section>
  );
};

export default Hero;
