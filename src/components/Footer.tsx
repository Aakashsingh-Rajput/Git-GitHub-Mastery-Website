
import React from 'react';
import { Github, BookOpen, ExternalLink, Heart, Star, Code, Users } from 'lucide-react';

const Footer = () => {
  const resources = [
    { title: 'Official Git Documentation', url: 'https://git-scm.com/doc', icon: BookOpen },
    { title: 'GitHub Docs', url: 'https://docs.github.com', icon: Github },
    { title: 'Interactive Git Tutorial', url: 'https://learngitbranching.js.org', icon: ExternalLink },
    { title: 'Git Cheat Sheet', url: 'https://education.github.com/git-cheat-sheet-education.pdf', icon: ExternalLink },
  ];

  const stats = [
    { icon: Code, label: 'Commands Covered', value: '50+' },
    { icon: Users, label: 'Practice Examples', value: '25+' },
    { icon: Star, label: 'Interactive Features', value: '15+' },
    { icon: Github, label: 'Workflow Patterns', value: '10+' },
  ];

  return (
    <footer className="relative bg-black/60 backdrop-blur-sm border-t border-purple-500/20 mt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-4 mb-3 group-hover:border-purple-400/50 transition-all duration-300">
                  <Icon className="h-8 w-8 text-purple-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-xl animate-pulse-slow">
                <Github className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Git & GitHub Mastery</h3>
                <p className="text-purple-300 text-sm">Advanced Developer Guide</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your comprehensive, interactive guide to mastering version control and collaborative development. 
              From beginner basics to advanced workflows, practice with real Git commands in our integrated terminal.
            </p>
            <div className="flex items-center text-gray-400 mb-4">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 mx-2 animate-pulse" />
              <span>for developers worldwide</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Aakashsingh Rajput. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 w-1 h-6 rounded-full mr-3"></span>
              Quick Navigation
            </h4>
            <div className="space-y-3">
              {[
                { href: '#basics', label: 'Git Basics' },
                { href: '#github', label: 'GitHub Features' },
                { href: '#workflows', label: 'Advanced Workflows' },
                { href: '#best-practices', label: 'Best Practices' },
                { href: '#troubleshooting', label: 'Troubleshooting' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-purple-400 transition-colors group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 w-1 h-6 rounded-full mr-3"></span>
              Learning Resources
            </h4>
            <div className="space-y-4">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors group"
                  >
                    <div className="bg-gray-800/50 p-2 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="flex-1">{resource.title}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Built with React, TypeScript & Tailwind CSS • Designed by Aakashsingh Rajput
            </div>
            <div className="flex items-center space-x-6">
               <a
              href="https://aakashrajput.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:underline transition"
            >
              Visit My Portfolio
            </a>
              <div className="text-gray-400 text-sm">Version 2.0</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
