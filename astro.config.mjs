import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import rehypeThemedScreenshots from './src/plugins/rehype-themed-screenshots.mjs';

export default defineConfig({
  site: 'https://sybra.mskalski.dev',
  markdown: {
    rehypePlugins: [rehypeThemedScreenshots],
  },
  integrations: [
    starlight({
      title: 'Sybra',
      description: 'Local-first Claude Code agent orchestration for your desktop.',
      logo: {
        src: './public/favicon.svg',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/automaat/sybra' },
      ],
      customCss: ['./src/styles/starlight.css'],
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: 'Getting started', slug: 'getting-started' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'Tasks and agents', slug: 'concepts/tasks-and-agents' },
            { label: 'Execution modes', slug: 'concepts/execution-modes' },
            { label: 'Projects and worktrees', slug: 'concepts/projects-and-worktrees' },
            { label: 'Orchestrator and automation', slug: 'concepts/orchestrator-and-automation' },
            { label: 'Workflows', slug: 'concepts/workflows' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Use the task board', slug: 'guides/task-board' },
            { label: 'Run and monitor agents', slug: 'guides/agents-and-loops' },
            { label: 'Manage projects', slug: 'guides/projects' },
            { label: 'Run ad-hoc chats', slug: 'guides/chat' },
            { label: 'Review code', slug: 'guides/reviews' },
            { label: 'GitHub integration', slug: 'guides/github-integration' },
            { label: 'Build workflows', slug: 'guides/workflows' },
            { label: 'Dashboard and stats', slug: 'guides/dashboard-and-stats' },
            { label: 'Configure Sybra', slug: 'guides/settings' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'CLI', slug: 'reference/cli' },
            { label: 'Config', slug: 'reference/config' },
            { label: 'Task format', slug: 'reference/task-format' },
            { label: 'Keyboard shortcuts', slug: 'reference/keyboard-shortcuts' },
            { label: 'Skills', slug: 'reference/skills' },
          ],
        },
      ],
    }),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
