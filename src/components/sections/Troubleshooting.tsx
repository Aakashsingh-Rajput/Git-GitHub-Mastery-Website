
import React, { useState } from 'react';
import { AlertCircle, HelpCircle, Wrench, Zap } from 'lucide-react';

const Troubleshooting = () => {
  const [activeCategory, setActiveCategory] = useState('common');

  const categories = [
    { id: 'common', title: 'Common Issues', icon: AlertCircle },
    { id: 'conflicts', title: 'Merge Conflicts', icon: Wrench },
    { id: 'recovery', title: 'Recovery', icon: Zap },
    { id: 'performance', title: 'Performance', icon: HelpCircle },
  ];

  const troubleshootingGuides = {
    common: [
      {
        problem: 'Permission denied (publickey)',
        symptoms: 'Cannot push to repository, SSH authentication fails',
        solution: [
          'Check if SSH key exists: ls -la ~/.ssh',
          'Generate new SSH key: ssh-keygen -t ed25519 -C "your-email@example.com"',
          'Add key to SSH agent: ssh-add ~/.ssh/id_ed25519',
          'Add public key to GitHub: cat ~/.ssh/id_ed25519.pub',
          'Test connection: ssh -T git@github.com'
        ],
        prevention: 'Set up SSH keys properly during initial configuration'
      },
      {
        problem: 'Detached HEAD state',
        symptoms: 'Working in detached HEAD, commits not on any branch',
        solution: [
          'Check current state: git status',
          'Create new branch: git checkout -b new-branch-name',
          'Or return to existing branch: git checkout main',
          'To save work: git branch temp-branch HEAD'
        ],
        prevention: 'Always work on named branches, not direct commit hashes'
      },
      {
        problem: 'Large files blocking push',
        symptoms: 'Push rejected due to file size limits',
        solution: [
          'Identify large files: git ls-files | xargs ls -la | sort -k5 -rn | head',
          'Remove from history: git filter-branch --tree-filter "rm -f large-file.zip"',
          'Or use BFG Repo Cleaner: bfg --strip-blobs-bigger-than 100M',
          'Use Git LFS for large files: git lfs track "*.zip"'
        ],
        prevention: 'Use .gitignore and Git LFS for large files from the start'
      }
    ],
    conflicts: [
      {
        problem: 'Merge conflicts during pull',
        symptoms: 'Automatic merge failed, fix conflicts and commit',
        solution: [
          'Check conflicted files: git status',
          'Open files and look for conflict markers: <<<<<<<, =======, >>>>>>>',
          'Edit files to resolve conflicts manually',
          'Stage resolved files: git add resolved-file.js',
          'Complete merge: git commit'
        ],
        prevention: 'Pull frequently, communicate with team about overlapping work'
      },
      {
        problem: 'Complex merge conflicts',
        symptoms: 'Multiple files with conflicts, unclear resolution',
        solution: [
          'Use merge tool: git mergetool',
          'Configure VS Code as merge tool: git config --global merge.tool vscode',
          'Or abort and try different approach: git merge --abort',
          'Consider rebasing instead: git rebase main',
          'Cherry-pick specific commits: git cherry-pick commit-hash'
        ],
        prevention: 'Keep feature branches small and up-to-date with main'
      },
      {
        problem: 'Binary file conflicts',
        symptoms: 'Cannot merge binary files automatically',
        solution: [
          'Choose which version to keep: git checkout --theirs binary-file.png',
          'Or keep your version: git checkout --ours binary-file.png',
          'Stage the chosen version: git add binary-file.png',
          'Complete merge: git commit'
        ],
        prevention: 'Avoid committing generated files, coordinate binary changes'
      }
    ],
    recovery: [
      {
        problem: 'Accidentally deleted commits',
        symptoms: 'Important commits missing after reset or rebase',
        solution: [
          'Find lost commits: git reflog',
          'Restore to specific commit: git reset --hard commit-hash',
          'Create branch from lost commit: git checkout -b recovery commit-hash',
          'Cherry-pick specific changes: git cherry-pick commit-hash'
        ],
        prevention: 'Use git reflog regularly, make backup branches before risky operations'
      },
      {
        problem: 'Wrong commit on wrong branch',
        symptoms: 'Committed to main instead of feature branch',
        solution: [
          'Create new branch: git branch feature-branch',
          'Reset main to previous commit: git reset --hard HEAD~1',
          'Switch to feature branch: git checkout feature-branch',
          'Your commit is now on the correct branch'
        ],
        prevention: 'Always check current branch before committing'
      },
      {
        problem: 'Corrupted repository',
        symptoms: 'Git commands fail with object errors',
        solution: [
          'Try to recover: git fsck --full',
          'Clean up: git gc --aggressive',
          'If still broken, clone fresh: git clone <url> new-repo',
          'Copy uncommitted work from old repository',
          'Verify integrity: git fsck'
        ],
        prevention: 'Regular backups, avoid force operations on corrupted repos'
      }
    ],
    performance: [
      {
        problem: 'Slow git operations',
        symptoms: 'Git commands take very long to execute',
        solution: [
          'Clean up repository: git gc --aggressive',
          'Repack objects: git repack -ad',
          'Remove unnecessary files: git clean -fd',
          'Check repository size: du -sh .git',
          'Consider shallow clone: git clone --depth 1 <url>'
        ],
        prevention: 'Regular maintenance, avoid committing large files'
      },
      {
        problem: 'Large repository clone time',
        symptoms: 'Initial clone takes hours or fails',
        solution: [
          'Use shallow clone: git clone --depth 1 <url>',
          'Clone single branch: git clone -b main --single-branch <url>',
          'Use partial clone: git clone --filter=blob:none <url>',
          'Download history later: git fetch --unshallow'
        ],
        prevention: 'Use Git LFS, avoid large binaries, regular repository maintenance'
      },
      {
        problem: 'Out of memory during operations',
        symptoms: 'Git operations fail with memory errors',
        solution: [
          'Increase git memory: git config pack.windowMemory 256m',
          'Increase pack size: git config pack.packSizeLimit 2g',
          'Use smaller packs: git config pack.window 10',
          'Split large operations into smaller chunks'
        ],
        prevention: 'Monitor repository size, use appropriate git configuration'
      }
    ]
  };

  return (
    <section id="troubleshooting" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Troubleshooting Guide</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Solutions to common Git and GitHub problems you might encounter
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-red-500/50 bg-red-600/20 text-red-300'
                  : 'border-gray-700 bg-gray-800/30 text-gray-400 hover:border-gray-600'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{category.title}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {troubleshootingGuides[activeCategory].map((guide, index) => (
          <div key={index} className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden">
            <div className="bg-red-900/20 border-b border-red-500/20 p-6">
              <h3 className="text-xl font-bold text-red-300 mb-2">{guide.problem}</h3>
              <p className="text-gray-300 flex items-center">
                <AlertCircle className="h-4 w-4 text-yellow-400 mr-2" />
                {guide.symptoms}
              </p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Wrench className="h-5 w-5 text-green-400 mr-2" />
                    Solution Steps
                  </h4>
                  <ol className="space-y-3">
                    {guide.solution.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-3">
                        <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <div className="flex-1">
                          {step.includes(':') ? (
                            <div>
                              <span className="text-gray-300">{step.split(':')[0]}:</span>
                              <code className="block bg-gray-900 text-green-400 p-2 rounded mt-1 text-sm">
                                {step.split(':')[1].trim()}
                              </code>
                            </div>
                          ) : (
                            <span className="text-gray-300">{step}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-400 mr-2" />
                    Prevention
                  </h4>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-blue-100">{guide.prevention}</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                    <h5 className="text-yellow-300 font-semibold mb-2">⚠️ Important</h5>
                    <p className="text-yellow-100 text-sm">
                      Always create a backup branch before attempting recovery operations:
                      <code className="block bg-gray-900 text-green-400 p-2 rounded mt-2">
                        git branch backup-$(date +%Y%m%d-%H%M%S)
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-red-900/30 border border-purple-500/30 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Emergency Commands</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-red-300 font-semibold mb-3">Undo Changes</h4>
            <div className="space-y-2 text-sm">
              <code className="block text-green-400">git stash</code>
              <code className="block text-green-400">git reset --hard HEAD</code>
              <code className="block text-green-400">git checkout -- file.js</code>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-yellow-300 font-semibold mb-3">Find Lost Work</h4>
            <div className="space-y-2 text-sm">
              <code className="block text-green-400">git reflog</code>
              <code className="block text-green-400">git fsck --lost-found</code>
              <code className="block text-green-400">git log --all --graph</code>
            </div>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold mb-3">Repository Health</h4>
            <div className="space-y-2 text-sm">
              <code className="block text-green-400">git fsck --full</code>
              <code className="block text-green-400">git gc --aggressive</code>
              <code className="block text-green-400">git clean -fd</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Troubleshooting;
