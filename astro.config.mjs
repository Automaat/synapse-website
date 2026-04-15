import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://synapse.mskalski.dev',
  integrations: [
    starlight({
      title: 'Sybra',
      description: 'Local-first Claude Code agent orchestration for your desktop.',
      logo: {
        src: './public/favicon.svg',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/automaat/synapse' },
      ],
      customCss: ['./src/styles/starlight.css'],
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started' },
            { label: 'Installation', slug: 'installation' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Task Format', slug: 'tasks' },
            { label: 'Agent Modes', slug: 'agents' },
            { label: 'Projects & Git', slug: 'projects' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'CLI Reference', slug: 'cli' },
            { label: 'Configuration', slug: 'configuration' },
          ],
        },
        {
          label: 'Deployment',
          items: [
            { label: 'Server Deployment', slug: 'server-deployment' },
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
