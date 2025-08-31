import { Mail, MapPin, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always excited to discuss new opportunities, collaborate on interesting projects, 
          or simply have a conversation about technology and innovation.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <Mail className="mx-auto mb-4 text-indigo-600" size={32} />
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">divyeshlahane15@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <MapPin className="mx-auto mb-4 text-indigo-600" size={32} />
            <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">Pune, Maharashtra, India</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <Linkedin className="mx-auto mb-4 text-indigo-600" size={32} />
            <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
            <p className="text-gray-600">3,809+ Connections</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="mailto:divyeshlahane15@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
            Send Email
          </a>
          <a 
            href="https://www.linkedin.com/in/divyesh-lahane/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
