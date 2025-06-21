
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw } from 'lucide-react';

interface TerminalProps {
  className?: string;
}

interface CommandHistory {
  command: string;
  output: string;
  type: 'success' | 'error' | 'info';
}

const Terminal: React.FC<TerminalProps> = ({ className = '' }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'Welcome to Git Practice Terminal',
      output: 'Type git commands to see simulated outputs. Try "git --help" to get started.',
      type: 'info'
    }
  ]);
  const [currentDirectory, setCurrentDirectory] = useState('~/my-project');
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const gitCommands = {
    'git --help': {
      output: `usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status`,
      type: 'success' as const
    },
    'git init': {
      output: 'Initialized empty Git repository in ~/my-project/.git/',
      type: 'success' as const
    },
    'git status': {
      output: `On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md
	index.html
	style.css

nothing added to commit but untracked files present (use "git add" to track)`,
      type: 'info' as const
    },
    'git add .': {
      output: '',
      type: 'success' as const
    },
    'git add README.md': {
      output: '',
      type: 'success' as const
    },
    'git commit -m "Initial commit"': {
      output: `[main (root-commit) a1b2c3d] Initial commit
 3 files changed, 42 insertions(+)
 create mode 100644 README.md
 create mode 100644 index.html
 create mode 100644 style.css`,
      type: 'success' as const
    },
    'git log': {
      output: `commit a1b2c3d4e5f6789012345678901234567890abcd (HEAD -> main)
Author: Your Name <your.email@example.com>
Date:   ${new Date().toDateString()}

    Initial commit`,
      type: 'info' as const
    },
    'git log --oneline': {
      output: 'a1b2c3d Initial commit',
      type: 'info' as const
    },
    'git branch': {
      output: '* main',
      type: 'info' as const
    },
    'git branch feature/new-feature': {
      output: '',
      type: 'success' as const
    },
    'git checkout -b feature/new-feature': {
      output: "Switched to a new branch 'feature/new-feature'",
      type: 'success' as const
    },
    'git checkout main': {
      output: "Switched to branch 'main'",
      type: 'success' as const
    },
    'git merge feature/new-feature': {
      output: `Updating a1b2c3d..b2c3d4e
Fast-forward
 new-feature.js | 15 +++++++++++++++
 1 file changed, 15 insertions(+)
 create mode 100644 new-feature.js`,
      type: 'success' as const
    },
    'git remote add origin https://github.com/username/repo.git': {
      output: '',
      type: 'success' as const
    },
    'git push -u origin main': {
      output: `Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 892 bytes | 892.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To https://github.com/username/repo.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.`,
      type: 'success' as const
    },
    'git stash': {
      output: 'Saved working directory and index state WIP on main: a1b2c3d Initial commit',
      type: 'success' as const
    },
    'git stash pop': {
      output: `On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes to working directory)
	modified:   index.html

Dropped refs/stash@{0} (d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0)`,
      type: 'success' as const
    },
    'git diff': {
      output: `diff --git a/index.html b/index.html
index 1234567..abcdefg 100644
--- a/index.html
+++ b/index.html
@@ -1,5 +1,6 @@
 <!DOCTYPE html>
 <html>
 <head>
+    <meta charset="UTF-8">
     <title>My Project</title>
 </head>`,
      type: 'info' as const
    },
    'clear': {
      output: '',
      type: 'success' as const,
      clear: true
    }
  };

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim();
    
    if (trimmedCommand === 'clear') {
      setHistory([]);
      return;
    }

    const commandConfig = gitCommands[trimmedCommand as keyof typeof gitCommands];
    
    if (commandConfig) {
      setHistory(prev => [
        ...prev,
        { command: `$ ${trimmedCommand}`, output: commandConfig.output, type: commandConfig.type }
      ]);
    } else if (trimmedCommand.startsWith('git ')) {
      setHistory(prev => [
        ...prev,
        { 
          command: `$ ${trimmedCommand}`, 
          output: `git: '${trimmedCommand.split(' ')[1]}' is not a git command. See 'git --help'.`, 
          type: 'error' 
        }
      ]);
    } else if (trimmedCommand) {
      setHistory(prev => [
        ...prev,
        { 
          command: `$ ${trimmedCommand}`, 
          output: `bash: ${trimmedCommand}: command not found`, 
          type: 'error' 
        }
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const clearTerminal = () => {
    setHistory([]);
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const getOutputColor = (type: string) => {
    switch (type) {
      case 'error': return 'text-red-400';
      case 'success': return 'text-green-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-300';
    }
  };

  return (
    <div className={`bg-gray-900 border border-gray-700 rounded-lg overflow-hidden ${className}`}>
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="h-4 w-4 text-green-400" />
          <span className="text-gray-300 text-sm font-mono">Git Practice Terminal</span>
        </div>
        <button
          onClick={clearTerminal}
          className="p-1 bg-gray-700 hover:bg-gray-600 rounded border border-gray-600 transition-colors"
          title="Clear terminal"
        >
          <RotateCcw className="h-3 w-3 text-gray-400" />
        </button>
      </div>
      
      <div 
        ref={outputRef}
        className="h-80 overflow-y-auto p-4 font-mono text-sm"
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="text-yellow-400">{currentDirectory} {item.command}</div>
            {item.output && (
              <pre className={`whitespace-pre-wrap ${getOutputColor(item.type)} ml-4`}>
                {item.output}
              </pre>
            )}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-yellow-400 mr-2">{currentDirectory} $</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none font-mono"
            placeholder="Type a git command..."
            autoFocus
          />
        </form>
      </div>
      
      <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
        <p className="text-gray-400 text-xs">
          💡 Try commands like: git init, git status, git add ., git commit -m "message", git log
        </p>
      </div>
    </div>
  );
};

export default Terminal;
