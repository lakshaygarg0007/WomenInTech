import React from 'react';
import { TrendingUp, GraduationCap, MessageSquare, BookOpen, User, FileText } from 'lucide-react';

interface ServicesProps {
  onResumeToolClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onResumeToolClick }) => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Accelerate your career with personalized guidance, leadership training, and strategic career planning.',
      features: ['Leadership Development', 'Career Planning', 'Salary Negotiation', 'Network Building'],
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: GraduationCap,
      title: 'Upskilling',
      description: 'Enhance your technical skills with comprehensive courses, mentorship programs, and resume building.',
      features: ['Technical Courses', '1-on-1 Mentorship', 'Resume Review', 'Interview Prep'],
      color: 'from-pink-600 to-pink-700',
      subServices: [
        { icon: BookOpen, name: 'Courses', desc: 'Industry-relevant technical courses' },
        { icon: User, name: 'Mentorship', desc: 'Expert guidance from industry leaders' },
        { 
          icon: FileText, 
          name: 'Resume Tool', 
          desc: 'AI-powered resume builder with ATS score checking and optimization',
          onClick: onResumeToolClick
        }
      ]
    },
    {
      icon: MessageSquare,
      title: 'Forum',
      description: 'Connect with a vibrant community of women in tech. Share experiences, ask questions, and build lasting relationships.',
      features: ['Discussion Groups', 'Q&A Sessions', 'Networking Events', 'Knowledge Sharing'],
      color: 'from-indigo-600 to-indigo-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support designed to propel your tech career forward at every stage of your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {service.subServices && (
                  <div className="mb-6 space-y-4">
                    {service.subServices.map((sub, subIndex) => {
                      const SubIconComponent = sub.icon;
                      return (
                        <div 
                          key={subIndex} 
                          className={`flex items-start space-x-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl ${
                            sub.onClick ? 'cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-0.5' : ''
                          }`}
                          onClick={sub.onClick}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <SubIconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className={`font-semibold text-gray-900 mb-1 ${sub.onClick ? 'text-purple-600' : ''}`}>
                              {sub.name}
                              {sub.onClick && <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Try Now</span>}
                            </h4>
                            <p className="text-sm text-gray-600">{sub.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full mt-8 bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;