
import React from 'react';
import { ChevronRight, Clock, CheckCircle } from 'lucide-react';

const Navigation = () => {
  const sections = [
    { 
      id: 'basics', 
      title: 'Git Basics', 
      description: 'Fundamentals of version control',
      time: '15 min',
      difficulty: 'Beginner'
    },
    { 
      id: 'github', 
      title: 'GitHub Features', 
      description: 'Platform-specific capabilities',
      time: '20 min',
      difficulty: 'Intermediate'
    },
    { 
      id: 'workflows', 
      title: 'Advanced Workflows', 
      description: 'Complex collaboration patterns',
      time: '25 min',
      difficulty: 'Advanced'
    },
    { 
      id: 'best-practices', 
      title: 'Best Practices', 
      description: 'Industry standards and tips',
      time: '18 min',
      difficulty: 'Intermediate'
    },
    { 
      id: 'troubleshooting', 
      title: 'Troubleshooting', 
      description: 'Common issues and solutions',
      time: '12 min',
      difficulty: 'All Levels'
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-blue-400 bg-blue-400/10';
    }
  };

  return (
    <nav className="py-16 bg-black/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Your Learning Journey</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master Git and GitHub step by step with our comprehensive, interactive curriculum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {sections.map((section, index) => (
            <div key={section.id} className="relative">
              {/* Connection line */}
              {index < sections.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-6 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform translate-x-full -translate-y-1/2 z-10" />
              )}
              
              <a
                href={`#${section.id}`}
                className="group block bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 relative overflow-hidden"
              >
                {/* Card background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Step {index + 1}
                    </div>
                    <ChevronRight className="h-5 w-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Meta information */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                      <Clock className="h-3 w-3" />
                      <span>{section.time}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(section.difficulty)}`}>
                      {section.difficulty}
                    </span>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Progress summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full px-6 py-3">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-white font-medium">Complete all sections to master Git & GitHub</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
