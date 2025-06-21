
import React, { useState } from 'react';
import { GitPullRequest, Shield, Zap, Eye } from 'lucide-react';

const GitHubFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('pullrequests');

  const features = [
    { id: 'pullrequests', title: 'Pull Requests', icon: GitPullRequest, color: 'purple' },
    { id: 'actions', title: 'GitHub Actions', icon: Zap, color: 'blue' },
    { id: 'security', title: 'Security Features', icon: Shield, color: 'green' },
    { id: 'collaboration', title: 'Collaboration Tools', icon: Eye, color: 'orange' },
  ];

  const content = {
    pullrequests: {
      title: 'Mastering Pull Requests',
      items: [
        {
          title: 'Creating Effective PRs',
          description: 'Write clear titles, detailed descriptions, and include screenshots',
          code: '# PR Template Example\n## Changes\n- Added user authentication\n- Fixed responsive design issues\n\n## Testing\n- [ ] Unit tests pass\n- [ ] Manual testing completed\n\n## Screenshots\n![Before](before.png)\n![After](after.png)'
        },
        {
          title: 'Review Process',
          description: 'Best practices for code reviews and collaboration',
          code: '# Reviewing PRs effectively\n1. Check code quality and standards\n2. Test functionality locally\n3. Provide constructive feedback\n4. Approve when ready'
        },
        {
          title: 'Advanced PR Features',
          description: 'Draft PRs, auto-merge, and review requirements',
          code: 'git push -u origin feature/new-feature\n# Create draft PR first\n# Convert to ready when complete\n# Set up branch protection rules'
        }
      ]
    },
    actions: {
      title: 'GitHub Actions & CI/CD',
      items: [
        {
          title: 'Basic Workflow',
          description: 'Set up continuous integration with automated testing',
          code: 'name: CI\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - name: Setup Node\n      uses: actions/setup-node@v3\n      with:\n        node-version: 18\n    - run: npm ci\n    - run: npm test'
        },
        {
          title: 'Deployment Pipeline',
          description: 'Automated deployment to production',
          code: 'name: Deploy\non:\n  push:\n    branches: [ main ]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - name: Deploy to Production\n      run: |\n        npm run build\n        npm run deploy\n      env:\n        DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}'
        }
      ]
    },
    security: {
      title: 'Security & Compliance',
      items: [
        {
          title: 'Dependabot',
          description: 'Automated dependency updates and security alerts',
          code: '# .github/dependabot.yml\nversion: 2\nupdates:\n  - package-ecosystem: "npm"\n    directory: "/"\n    schedule:\n      interval: "weekly"\n    open-pull-requests-limit: 5\n    reviewers:\n      - "security-team"'
        },
        {
          title: 'Security Scanning',
          description: 'Code scanning and secret detection',
          code: 'name: Security Scan\non: [push, pull_request]\n\njobs:\n  security:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - name: Run CodeQL\n      uses: github/codeql-action/init@v2\n    - name: Perform Analysis\n      uses: github/codeql-action/analyze@v2'
        }
      ]
    },
    collaboration: {
      title: 'Team Collaboration Tools',
      items: [
        {
          title: 'Issues & Projects',
          description: 'Track bugs, features, and project progress',
          code: '# Issue Templates\n## Bug Report\n**Describe the bug**\nA clear description of the bug\n\n**Steps to reproduce**\n1. Go to...\n2. Click on...\n3. See error\n\n**Expected behavior**\nWhat should happen\n\n**Screenshots**\nAdd screenshots if applicable'
        },
        {
          title: 'Team Management',
          description: 'Organizations, teams, and permissions',
          code: '# Team structure example\nOrganization: company-name\n├── Frontend Team\n│   ├── @frontend-leads (admin)\n│   └── @frontend-devs (write)\n├── Backend Team\n│   ├── @backend-leads (admin)\n│   └── @backend-devs (write)\n└── DevOps Team\n    └── @devops (admin)'
        }
      ]
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      purple: 'border-purple-500/30 bg-purple-600/10 text-purple-300',
      blue: 'border-blue-500/30 bg-blue-600/10 text-blue-300',
      green: 'border-green-500/30 bg-green-600/10 text-green-300',
      orange: 'border-orange-500/30 bg-orange-600/10 text-orange-300',
    };
    return colors[color] || colors.purple;
  };

  return (
    <section id="github" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">GitHub Platform Features</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Leverage GitHub's powerful features for collaboration, automation, and project management
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                activeFeature === feature.id
                  ? getColorClasses(feature.color)
                  : 'border-gray-700 bg-gray-800/30 text-gray-400 hover:border-gray-600'
              }`}
            >
              <Icon className="h-6 w-6 mx-auto mb-2" />
              <span className="text-sm font-medium">{feature.title}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">{content[activeFeature].title}</h3>
        
        <div className="space-y-6">
          {content[activeFeature].items.map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-800/50 p-4 border-b border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
              <div className="bg-gray-900/50 p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
                  <code>{item.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubFeatures;
