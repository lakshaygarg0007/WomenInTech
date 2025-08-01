import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Search, 
  Filter,
  ExternalLink,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Jobs', count: 156 },
    { id: 'engineering', name: 'Engineering', count: 45 },
    { id: 'data', name: 'Data Science', count: 32 },
    { id: 'product', name: 'Product', count: 28 },
    { id: 'design', name: 'Design', count: 24 },
    { id: 'marketing', name: 'Marketing', count: 27 }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and AWS.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
      posted: '2 days ago',
      applicants: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'DataFlow Inc',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $150k',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Analyze complex datasets and build machine learning models to drive business insights.',
      skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
      posted: '1 day ago',
      applicants: 18,
      featured: true
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'InnovateLab',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$110k - $160k',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Lead product strategy and work with cross-functional teams to deliver innovative solutions.',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'Leadership'],
      posted: '3 days ago',
      applicants: 31,
      featured: true
    },
    {
      id: 4,
      title: 'UX Designer',
      company: 'DesignStudio',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$85k - $125k',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Create intuitive user experiences for our mobile and web applications.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      posted: '1 week ago',
      applicants: 42,
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$130k - $170k',
      logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Build and maintain CI/CD pipelines and cloud infrastructure.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      posted: '4 days ago',
      applicants: 15,
      featured: false
    },
    {
      id: 6,
      title: 'Marketing Manager',
      company: 'GrowthCo',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$90k - $130k',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Drive marketing campaigns and growth strategies for our SaaS platform.',
      skills: ['Digital Marketing', 'Analytics', 'Content Strategy', 'SEO'],
      posted: '5 days ago',
      applicants: 28,
      featured: false
    }
  ];

  const filteredJobs = jobCategories.find(cat => cat.id === selectedFilter)?.id === 'all' 
    ? featuredJobs 
    : featuredJobs.filter(job => 
        job.skills.some(skill => 
          skill.toLowerCase().includes(selectedFilter) || 
          job.title.toLowerCase().includes(selectedFilter)
        )
      );

  const searchedJobs = filteredJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="jobs" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Dream <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tech Job</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover opportunities at companies that value diversity and are committed to empowering women in technology.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg appearance-none bg-white"
                >
                  {jobCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {jobCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedFilter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-sm'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-2 gap-8">
          {searchedJobs.map(job => (
            <div key={job.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              {job.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                </div>
              )}
              
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={job.logo} 
                  alt={job.company}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.skills.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-green-600 font-bold">
                  <DollarSign className="w-5 h-5 mr-1" />
                  {job.salary}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {job.applicants} applicants
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{job.posted}</span>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center space-x-2">
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Job Market Insights */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Job Market Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-white/90">Average Salary Increase</div>
              <p className="text-sm text-white/80 mt-2">For women switching to tech roles</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/90">Partner Companies</div>
              <p className="text-sm text-white/80 mt-2">Committed to diversity & inclusion</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-white/90">Placement Success Rate</div>
              <p className="text-sm text-white/80 mt-2">Within 3 months of application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;