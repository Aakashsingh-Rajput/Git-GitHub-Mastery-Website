
import React from 'react';
import { Terminal, GitBranch, Users, Star, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full px-6 py-2 mb-8 animate-glow">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-purple-300 font-medium">The Ultimate Git & GitHub Guide</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-slide-in-up">
          Maste <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Git & GitHub</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          From version control fundamentals to advanced collaboration workflows. 
          Your complete guide to becoming a Git and GitHub expert with interactive learning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-glow">
            <span className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Start Learning</span>
            </span>
          </button>
          <button className="border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 font-semibold py-3 px-8 rounded-full transition-all duration-300">
            <span className="flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span>Try Terminal</span>
            </span>
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="group bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:animate-pulse">
              <Terminal className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Interactive Terminal</h3>
            <p className="text-gray-400">Practice Git commands in a real terminal environment with instant feedback</p>
          </div>

          <div className="group bg-black/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:animate-pulse">
              <GitBranch className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Advanced Workflows</h3>
            <p className="text-gray-400">Master complex branching strategies and collaboration patterns</p>
          </div>

          <div className="group bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:animate-pulse">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
            <p className="text-gray-400">Learn GitHub workflows used by professional development teams</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400">Git Commands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-gray-400">Practical Examples</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
            <div className="text-gray-400">Workflow Patterns</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-gray-400">Interactive</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
