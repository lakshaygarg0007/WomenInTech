import React from 'react';
import { Star, Quote, Trophy, Briefcase } from 'lucide-react';

const Featured = () => {
  const successStories = [
    {
      name: 'Sarah Chen',
      role: 'Senior Software Engineer at Google',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'WomenInTech helped me transition from marketing to software engineering. The mentorship program was invaluable.',
      achievement: 'Career Transition Success'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Tech Lead at Microsoft',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'The leadership training and career guidance helped me advance to a Tech Lead role within 2 years.',
      achievement: 'Leadership Excellence'
    },
    {
      name: 'Aisha Patel',
      role: 'Startup Founder & CEO',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'The community support and networking opportunities were crucial in launching my successful fintech startup.',
      achievement: 'Entrepreneurial Success'
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Industry Recognition',
      description: 'Featured in TechCrunch as "Top 10 Organizations Advancing Women in Tech"'
    },
    {
      icon: Briefcase,
      title: 'Career Placement',
      description: '95% job placement rate with average 40% salary increase'
    },
    {
      icon: Star,
      title: 'Community Impact',
      description: 'Rated 4.9/5 stars by our community members across all programs'
    }
  ];

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real women, real success stories. See how our community members have transformed their careers in technology.
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {successStories.map((story, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                  <p className="text-purple-600 font-medium">{story.role}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-purple-600 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">"{story.story}"</p>
              </div>
              
              <div className="flex items-center">
                <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-gray-900">{story.achievement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{achievement.title}</h4>
                  <p className="text-white/90 leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;