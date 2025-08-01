import React from 'react';
import { Users, Calendar, MessageCircle, Video, Globe, Heart } from 'lucide-react';

const Community = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Discussion Forums',
      description: 'Engage in meaningful conversations about tech trends, career advice, and industry insights.',
      members: '5,000+ active members'
    },
    {
      icon: Calendar,
      title: 'Virtual Events',
      description: 'Join webinars, workshops, and networking events hosted by industry experts.',
      events: '50+ events monthly'
    },
    {
      icon: Video,
      title: 'Mentorship Circle',
      description: 'Connect with experienced mentors and peers for guidance and support.',
      connections: '1,000+ mentor matches'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with women in tech from around the world and expand your professional network.',
      reach: '50+ countries'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Women in AI Summit',
      date: 'March 15, 2025',
      type: 'Virtual Conference',
      attendees: '500+ registered'
    },
    {
      title: 'Career Growth Workshop',
      date: 'March 20, 2025',
      type: 'Interactive Workshop',
      attendees: '150+ registered'
    },
    {
      title: 'Networking Night',
      date: 'March 25, 2025',
      type: 'Social Event',
      attendees: '200+ registered'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a supportive community of ambitious women in technology. Connect, learn, and grow together.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-sm font-semibold text-purple-600">
                  {feature.members || feature.events || feature.connections || feature.reach}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Calendar className="w-8 h-8 text-purple-600 mr-3" />
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                    <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Stats & CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
              <p className="text-white/90 leading-relaxed mb-8">
                Be part of a movement that's transforming the tech industry. Connect with like-minded women, 
                access exclusive resources, and accelerate your career growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-white/80">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80">Monthly Interactions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Community Support</div>
              </div>
            </div>

            <button className="w-full bg-white text-purple-600 py-4 px-8 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              Join Community Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;