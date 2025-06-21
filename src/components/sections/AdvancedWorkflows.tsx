
import React, { useState } from 'react';
import { GitBranch, GitMerge, Repeat, Workflow } from 'lucide-react';

const AdvancedWorkflows = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('gitflow');

  const workflows = [
    { id: 'gitflow', title: 'Git Flow', icon: GitBranch, description: 'Feature-based development model' },
    { id: 'github-flow', title: 'GitHub Flow', icon: Workflow, description: 'Simplified continuous deployment' },
    { id: 'rebase', title: 'Rebase Workflows', icon: Repeat, description: 'Clean linear history' },
    { id: 'advanced-merge', title: 'Advanced Merging', icon: GitMerge, description: 'Complex merge strategies' },
  ];

  const workflowContent = {
    gitflow: {
      title: 'Git Flow Workflow',
      description: 'A robust branching model for release-based development',
      steps: [
        {
          title: 'Initialize Git Flow',
          command: 'git flow init',
          explanation: 'Set up the Git Flow branching model with default branch names'
        },
        {
          title: 'Start a Feature',
          command: 'git flow feature start user-authentication',
          explanation: 'Create and switch to a new feature branch from develop'
        },
        {
          title: 'Finish a Feature',
          command: 'git flow feature finish user-authentication',
          explanation: 'Merge feature back to develop and delete feature branch'
        },
        {
          title: 'Start a Release',
          command: 'git flow release start 1.2.0',
          explanation: 'Create a release branch for version 1.2.0 from develop'
        },
        {
          title: 'Finish a Release',
          command: 'git flow release finish 1.2.0',
          explanation: 'Merge to main, tag the release, merge back to develop'
        }
      ],
      diagram: `
main     ●─────●─────●─────●
          \\     \\     \\     \\
develop    ●─────●─────●─────●
            \\           /
feature      ●─────●───/
      `
    },
    'github-flow': {
      title: 'GitHub Flow',
      description: 'Lightweight, branch-based workflow perfect for continuous deployment',
      steps: [
        {
          title: 'Create Feature Branch',
          command: 'git checkout -b feature/add-payment-system',
          explanation: 'Branch directly from main for any new work'
        },
        {
          title: 'Make Changes & Commit',
          command: 'git add .\ngit commit -m "feat: implement payment processing"',
          explanation: 'Work on your feature with descriptive commits'
        },
        {
          title: 'Push and Create PR',
          command: 'git push -u origin feature/add-payment-system',
          explanation: 'Push branch and open a pull request for review'
        },
        {
          title: 'Deploy for Testing',
          command: '# Deploy PR to staging environment',
          explanation: 'Test your changes in a production-like environment'
        },
        {
          title: 'Merge to Main',
          command: 'git checkout main\ngit merge feature/add-payment-system\ngit push origin main',
          explanation: 'After approval, merge to main and deploy to production'
        }
      ],
      diagram: `
main     ●─────●─────●─────●
          \\           /
feature    ●─────●───/
      `
    },
    rebase: {
      title: 'Rebase Workflows',
      description: 'Maintain clean, linear project history',
      steps: [
        {
          title: 'Interactive Rebase',
          command: 'git rebase -i HEAD~3',
          explanation: 'Edit, squash, or reorder the last 3 commits'
        },
        {
          title: 'Rebase onto Main',
          command: 'git rebase main',
          explanation: 'Replay your feature commits on top of latest main'
        },
        {
          title: 'Force Push (Safely)',
          command: 'git push --force-with-lease origin feature-branch',
          explanation: 'Update remote branch after rebase (safer than --force)'
        },
        {
          title: 'Squash Commits',
          command: 'git rebase -i HEAD~n\n# Change "pick" to "squash" or "s"',
          explanation: 'Combine multiple commits into a single, clean commit'
        },
        {
          title: 'Abort if Needed',
          command: 'git rebase --abort',
          explanation: 'Cancel the rebase operation and return to original state'
        }
      ],
      diagram: `
Before rebase:
main     ●─────●─────●
          \\
feature    ●─────●─────●

After rebase:
main     ●─────●─────●─────●─────●
                       \\
                    feature commits
      `
    },
    'advanced-merge': {
      title: 'Advanced Merge Strategies',
      description: 'Handle complex merges and conflicts effectively',
      steps: [
        {
          title: 'Three-way Merge',
          command: 'git merge --no-ff feature-branch',
          explanation: 'Create a merge commit even if fast-forward is possible'
        },
        {
          title: 'Octopus Merge',
          command: 'git merge branch1 branch2 branch3',
          explanation: 'Merge multiple branches simultaneously'
        },
        {
          title: 'Merge with Strategy',
          command: 'git merge -X theirs feature-branch',
          explanation: 'Automatically resolve conflicts by preferring their changes'
        },
        {
          title: 'Conflict Resolution',
          command: 'git mergetool\n# Edit conflicts manually\ngit add .\ngit commit',
          explanation: 'Use merge tools to resolve complex conflicts'
        },
        {
          title: 'Cherry-pick',
          command: 'git cherry-pick abc123def456',
          explanation: 'Apply specific commits from another branch'
        }
      ],
      diagram: `
Merge strategies:
●─────●─────●─────M    (merge commit)
 \\           /
  ●─────●───/

●─────●─────●─────●    (fast-forward)
      `
    }
  };

  return (
    <section id="workflows" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Advanced Git Workflows</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Master sophisticated branching strategies and collaboration patterns for professional development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {workflows.map((workflow) => {
          const Icon = workflow.icon;
          return (
            <button
              key={workflow.id}
              onClick={() => setActiveWorkflow(workflow.id)}
              className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                activeWorkflow === workflow.id
                  ? 'border-purple-500/50 bg-purple-600/20 shadow-lg shadow-purple-500/20'
                  : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
              }`}
            >
              <Icon className={`h-8 w-8 mb-3 ${
                activeWorkflow === workflow.id ? 'text-purple-400' : 'text-gray-400'
              }`} />
              <h3 className="text-white font-semibold mb-2">{workflow.title}</h3>
              <p className="text-gray-400 text-sm">{workflow.description}</p>
            </button>
          );
        })}
      </div>

      <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden">
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              {workflowContent[activeWorkflow].title}
            </h3>
            <p className="text-xl text-gray-300">
              {workflowContent[activeWorkflow].description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Step-by-Step Guide</h4>
              {workflowContent[activeWorkflow].steps.map((step, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-semibold mb-2">{step.title}</h5>
                      <div className="bg-gray-900 rounded p-3 mb-3">
                        <code className="text-green-400 text-sm whitespace-pre-line">{step.command}</code>
                      </div>
                      <p className="text-gray-300 text-sm">{step.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <h4 className="text-xl font-semibold text-blue-300 mb-4">Visual Diagram</h4>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <pre className="text-blue-400 font-mono text-sm whitespace-pre-line">
                  {workflowContent[activeWorkflow].diagram}
                </pre>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                <h5 className="text-yellow-300 font-semibold mb-2">💡 Pro Tip</h5>
                <p className="text-yellow-100 text-sm">
                  {activeWorkflow === 'gitflow' && 'Git Flow is ideal for scheduled releases and larger teams with formal release cycles.'}
                  {activeWorkflow === 'github-flow' && 'GitHub Flow works best for continuous deployment and smaller, agile teams.'}
                  {activeWorkflow === 'rebase' && 'Use rebase to keep a clean history, but never rebase shared/public branches.'}
                  {activeWorkflow === 'advanced-merge' && 'Choose the right merge strategy based on your team\'s workflow and history preferences.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedWorkflows;
