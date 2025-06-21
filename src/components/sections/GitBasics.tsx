
import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, CheckCircle, Play, BookOpen, Code2 } from 'lucide-react';
import CodeBlock from '../CodeBlock';
import Terminal from '../Terminal';

const GitBasics = () => {
  const [activeTab, setActiveTab] = useState('setup');
  const [copiedCommand, setCopiedCommand] = useState('');

  const tabs = [
    { id: 'setup', title: 'Initial Setup', icon: '🔧', color: 'from-purple-500 to-purple-600' },
    { id: 'commands', title: 'Core Commands', icon: '⚡', color: 'from-blue-500 to-blue-600' },
    { id: 'staging', title: 'Staging Area', icon: '📦', color: 'from-green-500 to-green-600' },
    { id: 'commits', title: 'Commits', icon: '💾', color: 'from-orange-500 to-orange-600' },
    { id: 'practice', title: 'Practice Terminal', icon: '💻', color: 'from-cyan-500 to-cyan-600' },
  ];

  const content = {
    setup: {
      title: 'Git Configuration & Setup',
      description: 'Essential configuration for your Git environment',
      commands: [
        { cmd: 'git config --global user.name "Your Name"', desc: 'Set your username globally', type: 'config' },
        { cmd: 'git config --global user.email "your.email@example.com"', desc: 'Set your email globally', type: 'config' },
        { cmd: 'git config --global init.defaultBranch main', desc: 'Set default branch to main', type: 'config' },
        { cmd: 'git config --global core.editor "code --wait"', desc: 'Set VS Code as default editor', type: 'config' },
      ]
    },
    commands: {
      title: 'Essential Git Commands',
      description: 'Core commands every developer should know',
      commands: [
        { cmd: 'git init', desc: 'Initialize a new Git repository', type: 'basic' },
        { cmd: 'git clone <url>', desc: 'Clone a remote repository', type: 'basic' },
        { cmd: 'git status', desc: 'Check the status of your working directory', type: 'info' },
        { cmd: 'git log --oneline --graph', desc: 'View commit history with visual graph', type: 'info' },
      ]
    },
    staging: {
      title: 'Working with the Staging Area',
      description: 'Understanding Git\'s three-tree architecture',
      commands: [
        { cmd: 'git add <file>', desc: 'Stage specific file', type: 'staging' },
        { cmd: 'git add .', desc: 'Stage all changes in current directory', type: 'staging' },
        { cmd: 'git add -A', desc: 'Stage all changes in repository', type: 'staging' },
        { cmd: 'git reset HEAD <file>', desc: 'Unstage a file', type: 'reset' },
      ]
    },
    commits: {
      title: 'Creating Quality Commits',
      description: 'Best practices for commit messages and structure',
      commands: [
        { cmd: 'gi commit -m "feat: add user authentication"', desc: 'Commit with conventional message', type: 'commit' },
        { cmd: 'git commit --amend', desc: 'Modify the last commit', type: 'commit' },
        { cmd: 'git commit -m "fix: resolve login issue" -m "- Fixed null pointer exception\\n- Added error handling"', desc: 'Multi-line commit message', type: 'commit' },
        { cmd: 'git show HEAD', desc: 'Show details of the last commit', type: 'info' },
      ]
    },
    practice: {
      title: 'Interactive Git Terminal',
      description: 'Practice Git commands in a safe, simulated environment',
      commands: []
    }
  };

  const getCommandTypeColor = (type: string) => {
    switch (type) {
      case 'config': return 'border-purple-500/30 bg-purple-500/10';
      case 'basic': return 'border-blue-500/30 bg-blue-500/10';
      case 'staging': return 'border-green-500/30 bg-green-500/10';
      case 'commit': return 'border-orange-500/30 bg-orange-500/10';
      case 'info': return 'border-cyan-500/30 bg-cyan-500/10';
      case 'reset': return 'border-red-500/30 bg-red-500/10';
      default: return 'border-gray-500/30 bg-gray-500/10';
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(text);
      setTimeout(() => setCopiedCommand(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="basics" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <BookOpen className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Foundation Knowledge</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Git Fundamentals</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Master the core concepts and commands that form the foundation of Git version control. 
            Learn through interactive examples and practice in our built-in terminal.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap border-b border-purple-500/20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-6 py-4 text-sm font-medium transition-all duration-300 relative group ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white border-b-2 border-purple-400'
                    : 'text-gray-400 hover:text-purple-300 hover:bg-purple-500/10'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.title}</span>
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-t-lg"></div>
                )}
              </button>
            ))}
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">{content[activeTab].title}</h3>
              <p className="text-gray-300 text-lg">{content[activeTab].description}</p>
            </div>

            {activeTab === 'practice' ? (
              <div className="space-y-8">
                {/* Terminal Section */}
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-3 border-b border-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <TerminalIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-300 text-sm font-medium">Interactive Git Terminal</span>
                      </div>
                    </div>
                  </div>
                  <Terminal className="w-full" />
                </div>

                {/* Practice Guide */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                      <Play className="h-5 w-5 mr-2" />
                      Beginner Commands
                    </h4>
                    <div className="space-y-3">
                      {[
                        { cmd: 'git init', desc: 'Start a repository' },
                        { cmd: 'git status', desc: 'Check status' },
                        { cmd: 'git add .', desc: 'Stage files' },
                        { cmd: 'git commit -m "message"', desc: 'Commit changes' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Code2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <code className="text-green-400 font-mono text-sm">{item.cmd}</code>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                      <Play className="h-5 w-5 mr-2" />
                      Intermediate Commands
                    </h4>
                    <div className="space-y-3">
                      {[
                        { cmd: 'git log --oneline', desc: 'View history' },
                        { cmd: 'git branch', desc: 'List branches' },
                        { cmd: 'git stash', desc: 'Save work temporarily' },
                        { cmd: 'git diff', desc: 'See changes' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Code2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <code className="text-green-400 font-mono text-sm">{item.cmd}</code>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {content[activeTab].commands.map((item, index) => (
                  <div key={index} className={`border rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] ${getCommandTypeColor(item.type)}`}>
                    <div className="flex items-center justify-between mb-3">
                      <code className="text-green-400 font-mono text-sm bg-black/30 px-3 py-2 rounded-lg">
                        {item.cmd}
                      </code>
                      <button 
                        onClick={() => copyToClipboard(item.cmd)}
                        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg group"
                      >
                        {copiedCommand === item.cmd ? (
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Commit Convention Guide */}
            {activeTab === 'commits' && (
              <div className="mt-10 p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl">
                <h4 className="text-2xl font-semibold text-blue-300 mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3" />
                  Conventional Commit Messages
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { type: 'feat:', desc: 'New features', color: 'text-green-400' },
                    { type: 'fix:', desc: 'Bug fixes', color: 'text-red-400' },
                    { type: 'docs:', desc: 'Documentation', color: 'text-yellow-400' },
                    { type: 'refactor:', desc: 'Code refactoring', color: 'text-purple-400' },
                    { type: 'style:', desc: 'Code formatting', color: 'text-pink-400' },
                    { type: 'test:', desc: 'Adding tests', color: 'text-cyan-400' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                      <code className={`${item.color} font-mono font-bold`}>{item.type}</code>
                      <span className="text-gray-300">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitBasics;
