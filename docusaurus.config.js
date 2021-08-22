const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
darkCodeTheme.plain.backgroundColor = "#333333";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tapio Developer Documentation',
  tagline: 'digital. wood. works.',
  url: 'https://ambitious-glacier-0e4d34a03.azurestaticapps.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'tapioone', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'tapio Logo',
        src: 'img/logo_light.svg',
        srcDark: 'img/logo_dark.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://www.tapio.one/en/blog',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://www.tapio.one',
          label: 'Homepage',
          position: 'right'
        },
        {
          href: 'https://github.com/tapioone',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/tapio.Deutschland',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCuWvcOhs358LxhUSeRipZtg',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/woodisdigital/',
            },
            {
              label: 'LinkedIn',
              href: 'https://de.linkedin.com/company/tapio-gmbh',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Use',
              href: 'https://www.tapio.one/en/tapio-terms-of-use'
            },
            {
              label: 'Data Privacy Agreement',
              href: 'https://www.tapio.one/en/tapio-data-privacy-agreement'
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.tapio.one/en/policy'
            },
            {
              label: 'Legal Notice',
              href: 'https://www.tapio.one/en/imprint'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tapio GmbH.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // FUTURE add GitHub link here
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexBlog: false
      },
    ],
  ],
};
