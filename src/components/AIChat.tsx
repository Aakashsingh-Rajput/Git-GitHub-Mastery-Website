
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Sparkles, Brain } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant powered by advanced language understanding. I can help you with Git & GitHub questions, programming concepts, general knowledge, and much more. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const gitKnowledgeBase = {
    'git init': 'Initializes a new Git repository in the current directory. This creates a .git folder that tracks all your project changes.',
    'git clone': 'Creates a copy of a remote repository on your local machine. Usage: git clone <repository-url>',
    'git add': 'Stages changes for commit. Use "git add ." to stage all changes, or "git add <filename>" for specific files.',
    'git commit': 'Saves staged changes to the repository with a descriptive message. Usage: git commit -m "Your message here"',
    'git push': 'Uploads local commits to a remote repository. Usage: git push origin <branch-name>',
    'git pull': 'Downloads and merges changes from a remote repository to keep your local copy up to date.',
    'git status': 'Shows the current state of your working directory, including staged, unstaged, and untracked files.',
    'git log': 'Displays commit history with details like author, date, and commit messages.',
    'git branch': 'Lists, creates, or deletes branches. Use "git branch <name>" to create, "git branch -d <name>" to delete.',
    'git merge': 'Combines changes from different branches. Usually done after reviewing changes.',
    'git rebase': 'Replays commits from one branch onto another, creating a cleaner commit history.',
    'git stash': 'Temporarily saves changes without committing, useful when switching branches quickly.',
    'github': 'A web-based platform for Git repositories with collaboration features like pull requests, issues, and project management.',
    'pull request': 'A GitHub feature to propose changes and request code review before merging into the main branch.',
    'fork': 'Creates a personal copy of someone else\'s repository that you can modify independently.',
    'issue': 'GitHub\'s way to track bugs, enhancements, tasks, and feature requests.',
    'merge conflict': 'Occurs when Git can\'t automatically merge changes. Requires manual resolution by choosing which changes to keep.',
    'remote': 'A version of your repository hosted on a server (like GitHub, GitLab, or Bitbucket).',
    'origin': 'The default name for the main remote repository, typically where you cloned from.',
    'mai': 'The default branch name in modern Git repositories (replaced "master" as the standard).',
    'master': 'The traditional default branch name, now often replaced with "main" for inclusivity.',
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Enhanced Git/GitHub responses
    for (const [key, value] of Object.entries(gitKnowledgeBase)) {
      if (lowerMessage.includes(key)) {
        return `${value}\n\n💡 **Pro tip:** ${getProTip(key)}\n\nWould you like to know more about related concepts or see practical examples?`;
      }
    }

    // Programming and general responses
    if (lowerMessage.includes('javascript') || lowerMessage.includes('js')) {
      return "JavaScript is a versatile programming language! I can help with:\n• ES6+ features and syntax\n• DOM manipulation\n• Async/await and Promises\n• React and modern frameworks\n• Node.js backend development\n\nWhat specific JavaScript topic interests you?";
    }

    if (lowerMessage.includes('react')) {
      return "React is a powerful library for building user interfaces! Key concepts include:\n• Components and JSX\n• State and Props\n• Hooks (useState, useEffect, etc.)\n• Event handling\n• Conditional rendering\n\nWhat React concept would you like to explore?";
    }

    if (lowerMessage.includes('python')) {
      return "Python is an excellent programming language! I can help with:\n• Basic syntax and data structures\n• Object-oriented programming\n• Web development with Django/Flask\n• Data science with pandas/numpy\n• Automation and scripting\n\nWhat Python topic can I assist you with?";
    }

    if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return "I'm here to help! I'm knowledgeable about:\n\n🔧 **Tech Skills:**\n• Git & GitHub workflows\n• Programming languages (JavaScript, Python, etc.)\n• Web development (HTML, CSS, React)\n• Software engineering best practices\n\n💡 **General Knowledge:**\n• Science and mathematics\n• History and current events\n• Creative writing and analysis\n• Problem-solving strategies\n\nWhat would you like to explore today?";
    }

    if (lowerMessage.includes('error') || lowerMessage.includes('problem') || lowerMessage.includes('debug')) {
      return "I'd love to help you troubleshoot! Common approaches include:\n\n🔍 **Debugging Steps:**\n• Read error messages carefully\n• Check syntax and typos\n• Verify file paths and imports\n• Use console.log() for JavaScript debugging\n• Search Stack Overflow for similar issues\n\nCan you share the specific error message or describe what's not working as expected?";
    }

    if (lowerMessage.includes('best practice') || lowerMessage.includes('tips')) {
      return "Great question! Here are some universal best practices:\n\n📝 **Code Quality:**\n• Write clear, descriptive names\n• Keep functions small and focused\n• Comment complex logic\n• Use version control consistently\n• Test your code regularly\n\n🚀 **Productivity:**\n• Break large problems into smaller tasks\n• Learn keyboard shortcuts\n• Use code formatters and linters\n• Stay updated with industry trends\n\nWhich area would you like me to elaborate on?";
    }

    // Creative and conversational responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 Great to meet you! I'm your AI assistant, ready to help with anything from technical questions to creative brainstorming. What's on your mind today?";
    }

    if (lowerMessage.includes('thank')) {
      return "You're very welcome! 😊 I'm always happy to help. Feel free to ask me anything else - whether it's technical, creative, or just a curious question!";
    }

    // Default intelligent response
    return `That's an interesting question! While I have extensive knowledge across many domains, I'd be happy to help you explore this topic further. 

Here are some ways I can assist:
• **Technical guidance** - Programming, web development, tools
• **Learning support** - Explanations, examples, step-by-step guides  
• **Problem solving** - Breaking down complex issues
• **Creative thinking** - Brainstorming and ideation

Could you provide a bit more context about what you're trying to achieve? I'm here to help make it happen! 🚀`;
  };

  const getProTip = (command: string): string => {
    const tips = {
      'git add': 'Use "git add -p" to interactively stage parts of files for more precise commits.',
      'git commit': 'Write commit messages in present tense: "Add feature" not "Added feature".',
      'git push': 'Use "git push -u origin branch-name" the first time to set upstream tracking.',
      'git pull': 'Consider "git fetch" followed by "git merge" for more control over the process.',
      'git branch': 'Use descriptive branch names like "feature/user-authentication" or "bugfix/login-error".',
      'git log': 'Try "git log --oneline --graph" for a beautiful visual representation of your history.',
      'github': 'Enable two-factor authentication for better security of your repositories.',
      'pull request': 'Always review your own PR first - catch obvious issues before others see them.',
    };
    return tips[command] || 'Keep practicing and you\'ll master this in no time!';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time with more realistic delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // ChatGPT-like logo component
  const ChatGPTLogo = () => (
    <div className="relative w-8 h-8">
      <div className="w-8 h-8 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
        <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
          <Brain className="h-3 w-3 text-emerald-600" />
        </div>
      </div>
      <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
        <Sparkles className="h-1.5 w-1.5 text-yellow-600" />
      </div>
    </div>
  );

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 ${isOpen ? 'hidden' : 'block'}`}
      >
        <div className="relative">
          <Brain className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white/95 backdrop-blur-xl border border-emerald-200/50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChatGPTLogo />
              <div>
                <h3 className="text-white font-semibold">AI Assistant</h3>
                <p className="text-emerald-100 text-xs">Powered by advanced AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-emerald-200 transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-[340px] overflow-y-auto space-y-4 bg-gray-50/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-500 to-purple-600' : ''}`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <ChatGPTLogo />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${message.sender === 'user' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-800 shadow-sm'}`}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <ChatGPTLogo />
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-3 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-emerald-500/25"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
