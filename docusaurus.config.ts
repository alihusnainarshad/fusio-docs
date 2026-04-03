import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fusio',
  tagline: 'Self-Hosted API Management for Builders.',
  favicon: 'img/fusio_32px.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.fusio-project.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apioo', // Usually your GitHub org/user name.
  projectName: 'fusio', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/apioo/fusio-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/apioo/fusio-docs/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Fusio',
      logo: {
        alt: 'Fusio',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'installation/index',
          position: 'left',
          label: 'Installation',
        },
        {
          type: 'doc',
          docId: 'architecture',
          position: 'left',
          label: 'Architecture',
        },
        {
          type: 'doc',
          docId: 'operation/index',
          position: 'left',
          label: 'Operation',
        },
        {
          type: 'doc',
          docId: 'action/index',
          position: 'left',
          label: 'Action',
        },
        {
          type: 'doc',
          docId: 'ai/index',
          position: 'left',
          label: 'AI',
        },
        {
          href: 'https://github.com/apioo/fusio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get started',
              to: '/docs/bootstrap',
            },
            {
              label: 'Installation',
              to: '/docs/installation',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture',
            },
            {
              label: 'Operation',
              to: '/docs/operation',
            },
            {
              label: 'Action',
              to: '/docs/action',
            },
            {
              label: 'AI',
              to: '/docs/ai',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'Backend',
              href: 'https://www.fusio-project.org/api/backend',
            },
            {
              label: 'Consumer',
              href: 'https://www.fusio-project.org/api/consumer',
            },
            {
              label: 'System',
              href: 'https://www.fusio-project.org/api/system',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/apioo/fusio',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/FusioAPI',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/FusioAPI',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/eMrMgwsc6e',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Fusio',
              href: 'https://www.fusio-project.org/',
            },
            {
              label: 'TypeHub',
              href: 'https://typehub.cloud/',
            },
            {
              label: 'TypeAPI',
              href: 'https://typeapi.org/',
            },
            {
              label: 'TypeSchema',
              href: 'https://typeschema.org/',
            },
            {
              label: 'PSX',
              href: 'https://phpsx.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://chrisk.app/">Christoph Kappestein</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
