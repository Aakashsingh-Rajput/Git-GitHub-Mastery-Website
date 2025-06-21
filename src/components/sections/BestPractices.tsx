
import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const BestPractices = () => {
  const practices = [
    {
      category: 'Commit Messages',
      icon: '📝',
      color: 'purple',
      items: [
        {
          type: 'do',
          text: 'Use conventional commit format: "feat: add user authentication"',
          explanation: 'Makes commits searchable and enables automated changelog generation'
        },
        {
          type: 'do',
          text: 'Keep the first line under 50 characters',
          explanation: 'Ensures readability in GitHub interface and git log --oneline'
        },
        {
          type: 'dont',
          text: 'Write vague messages like "fix stuff" or "update code"',
          explanation: 'Makes it impossible to understand what changed without reading the diff'
        },
        {
          type: 'do',
          text: 'Use imperative mood: "Add feature" not "Added feature"',
          explanation: 'Follows Git\'s own convention and reads naturally'
        }
      ]
    },
    {
      category: 'Branching Strategy',
      icon: '🌳',
      color: 'blue',
      items: [
        {
          type: 'do',
          text: 'Use descriptive branch names: "feature/user-dashboard"',
          explanation: 'Makes it clear what each branch is for at a glance'
        },
        {
          type: 'do',
          text: 'Delete merged branches promptly',
          explanation: 'Keeps repository clean and reduces confusion'
        },
        {
          type: 'dont',
          text: 'Work directly on main/master branch',
          explanation: 'Bypasses code review and can break production code'
        },
        {
          type: 'warning',
          text: 'Rebase private branches, merge public ones',
          explanation: 'Avoids rewriting shared history while keeping clean local history'
        }
      ]
    },
    {
      category: 'Security & Access',
      icon: '🔒',
      color: 'green',
      items: [
        {
          type: 'do',
          text: 'Use SSH keys for authentication',
          explanation: 'More secure than HTTPS and doesn\'t require entering passwords'
        },
        {
          type: 'do',
          text: 'Enable two-factor authentication',
          explanation: 'Protects your account even if password is compromised'
        },
        {
          type: 'dont',
          text: 'Commit secrets, API keys, or passwords',
          explanation: 'Once in Git history, secrets are difficult to remove completely'
        },
        {
          type: 'do',
          text: 'Use .gitignore for sensitive files',
          explanation: 'Prevents accidentally committing configuration files with secrets'
        }
      ]
    },
    {
      category: 'Collaboration',
      icon: '👥',
      color: 'orange',
      items: [
        {
          type: 'do',
          text: 'Write detailed pull request descriptions',
          explanation: 'Helps reviewers understand context and what to focus on'
        },
        {
          type: 'do',
          text: 'Request reviews from relevant team members',
          explanation: 'Ensures code quality and knowledge sharing'
        },
        {
          type: 'do',
          text: 'Test your changes before pushing',
          explanation: 'Prevents broken builds and saves team time'
        },
        {
          type: 'warning',
          text: 'Force push only to your own feature branches',
          explanation: 'Force pushing shared branches can cause data loss for teammates'
        }
      ]
    }
  ];

  const getItemStyle = (type) => {
    switch (type) {
      case 'do':
        return {
          icon: CheckCircle,
          bgColor: 'bg-green-900/20',
          borderColor: 'border-green-500/30',
          iconColor: 'text-green-400',
          textColor: 'text-green-100'
        };
      case 'dont':
        return {
          icon: XCircle,
          bgColor: 'bg-red-900/20',
          borderColor: 'border-red-500/30',
          iconColor: 'text-red-400',
          textColor: 'text-red-100'
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-yellow-900/20',
          borderColor: 'border-yellow-500/30',
          iconColor: 'text-yellow-400',
          textColor: 'text-yellow-100'
        };
      default:
        return {
          icon: Lightbulb,
          bgColor: 'bg-blue-900/20',
          borderColor: 'border-blue-500/30',
          iconColor: 'text-blue-400',
          textColor: 'text-blue-100'
        };
    }
  };

  return (
    <section id="best-practices" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Best Practices & Guidelines</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Industry-standard practices for professional Git and GitHub usage
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {practices.map((practice, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl">{practice.icon}</span>
              <h3 className="text-2xl font-bold text-white">{practice.category}</h3>
            </div>

            <div className="space-y-4">
              {practice.items.map((item, itemIndex) => {
                const style = getItemStyle(item.type);
                const Icon = style.icon;
                
                return (
                  <div
                    key={itemIndex}
                    className={`p-4 rounded-lg border ${style.bgColor} ${style.borderColor}`}
                  >
                    <div className="flex items-start space-x-3">
                      <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${style.iconColor}`} />
                      <div className="flex-1">
                        <p className={`font-medium mb-2 ${style.textColor}`}>
                          {item.text}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Lightbulb className="h-6 w-6 text-yellow-400 mr-3" />
          Quick Reference Commands
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-purple-300 font-semibold mb-3">Daily Workflow</h4>
            <div className="space-y-2 text-sm">
              <code className="block text-green-400">git status</code>
              <code className="block text-green-400">git add .</code>
              <code className="block text-green-400">git commit -m "message"</code>
              <code className="block text-green-400">git push</code>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold mb-3">Branch Management</h4>
            <div className="space-y-2 text-sm">
              <code className="block text-green-400">git branch -a</code>
              <code className="block text-green-400">git checkout -b new-branch</code>
              <code className="block text-green-400">git branch -d old-branch</code>
              <code className="block text-green-400">git push -u origin branch</code>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-orange-300 font-semibold mb-3">Emergency Fixes</h4>
            <div className="space-y-2 text-sm">
              <code className="block text-green-400">git stash</code>
              <code className="block text-green-400">git reset --hard HEAD</code>
              <code className="block text-green-400">git revert HEAD</code>
              <code className="block text-green-400">git reflog</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
