import React, { useState } from 'react';
import { 
  FileText, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Download, 
  Edit3, 
  Brain,
  Target,
  TrendingUp,
  RefreshCw
} from 'lucide-react';

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('builder');
  const [atsScore, setAtsScore] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: []
  });

  const analyzeATS = () => {
    setIsAnalyzing(true);
    // Simulate ATS analysis
    setTimeout(() => {
      setAtsScore(Math.floor(Math.random() * 30) + 70); // Random score between 70-100
      setIsAnalyzing(false);
    }, 2000);
  };

  const generateWithAI = () => {
    // Simulate AI generation
    alert('AI is generating optimized content based on your profile and target role!');
  };

  const tabs = [
    { id: 'builder', name: 'Resume Builder', icon: Edit3 },
    { id: 'ats', name: 'ATS Checker', icon: Target },
    { id: 'ai', name: 'AI Optimizer', icon: Brain }
  ];

  const atsFeatures = [
    'Keyword optimization analysis',
    'Format compatibility check',
    'Section structure review',
    'Industry-specific recommendations',
    'Real-time scoring updates'
  ];

  const aiFeatures = [
    'Smart content generation',
    'Industry-specific language',
    'Achievement quantification',
    'Skill gap identification',
    'Personalized recommendations'
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 ml-4">AI Resume Builder</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create ATS-optimized resumes with AI assistance, check your ATS score, and get personalized recommendations.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-xl p-1 flex space-x-1">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resume Builder Tab */}
      {activeTab === 'builder' && (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Edit3 className="w-6 h-6 text-purple-600 mr-3" />
              Build Your Resume
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Professional Summary
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Write a compelling professional summary..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Key Skills
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="React, Python, Machine Learning, etc."
                />
              </div>
              
              <button
                onClick={generateWithAI}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Brain className="w-5 h-5" />
                <span>Generate with AI</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Resume Preview</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm min-h-96">
              <div className="text-center text-gray-500">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Your resume preview will appear here as you build it</p>
              </div>
            </div>
            <button className="w-full mt-6 bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      )}

      {/* ATS Checker Tab */}
      {activeTab === 'ats' && (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 text-purple-600 mr-3" />
              ATS Score Checker
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Resume or Paste Content
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors duration-200">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Drag & drop your resume or click to upload</p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Choose File
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Job Description (Optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Paste the job description to get targeted recommendations..."
                />
              </div>
              
              <button
                onClick={analyzeATS}
                disabled={isAnalyzing}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span>Check ATS Score</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-bold text-gray-900">ATS Features:</h4>
              {atsFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ATS Analysis Results</h3>
            
            {atsScore !== null ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className={`text-6xl font-bold mb-4 ${
                    atsScore >= 90 ? 'text-green-500' : 
                    atsScore >= 70 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {atsScore}%
                  </div>
                  <p className="text-gray-600">ATS Compatibility Score</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span className="font-medium">Keyword Match</span>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-green-600 font-semibold">85%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span className="font-medium">Format Score</span>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-green-600 font-semibold">92%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span className="font-medium">Section Structure</span>
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-yellow-600 font-semibold">78%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Recommendations:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Add more industry-specific keywords</li>
                    <li>• Include quantified achievements</li>
                    <li>• Optimize section headers</li>
                    <li>• Add relevant technical skills</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Upload your resume to see ATS analysis results</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* AI Optimizer Tab */}
      {activeTab === 'ai' && (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="w-6 h-6 text-purple-600 mr-3" />
              AI Resume Optimizer
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Role
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Senior Software Engineer, Data Scientist"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">Select Industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="consulting">Consulting</option>
                  <option value="startup">Startup</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Experience Level
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">Select Level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior Level (6-10 years)</option>
                  <option value="lead">Lead/Principal (10+ years)</option>
                </select>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>Optimize with AI</span>
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-bold text-gray-900">AI Features:</h4>
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Suggestions</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                  <h4 className="font-bold text-gray-900">Optimized Summary</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "Results-driven Software Engineer with 5+ years of experience building scalable web applications. 
                  Increased system performance by 40% and led cross-functional teams of 8+ developers."
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-blue-500 mr-3" />
                  <h4 className="font-bold text-gray-900">Keyword Suggestions</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'AWS', 'Microservices', 'Agile', 'CI/CD'].map((keyword, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                  <h4 className="font-bold text-gray-900">Achievement Enhancement</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-2">Before:</p>
                    <p>"Worked on improving website performance"</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-green-600 mb-2">After:</p>
                    <p>"Optimized website performance, reducing load times by 60% and increasing user engagement by 25%"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;