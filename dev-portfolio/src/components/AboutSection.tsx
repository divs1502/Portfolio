import { Coffee } from 'lucide-react';
import ProfileImage from './ProfileImage';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate software developer who believes in creating meaningful digital experiences. 
              My journey at Cybage Software has been filled with continuous learning and exciting challenges.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently, I'm working on a cutting-edge B2B clothing platform that's transforming how fashion 
              brands connect and conduct business. I enjoy solving complex problems and turning ideas into 
              reality through clean, efficient code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, reading tech blogs, 
              or enjoying a good cup of coffee while brainstorming my next project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Profile Image for About Section */}
            <div className="col-span-2 mb-6 flex justify-center">
              <ProfileImage size="md" />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">1+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">12+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <Coffee size={16} />
                Cups of Coffee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
