// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const title = 'Appli.Scinti';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: title,
  tagline: 'Developing Applications in Nuclear Medicine',
  url: 'https://petctviewer.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',// a changer
  organizationName: 'CHU Rangueil / IUCT Oncopole', // Usually your GitHub org/user name.
  projectName: 'Scintigraphy_Documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: title,
        /*logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/
        items: [
          {
            to: 'our_software',
            label: 'Our Software',
            position: 'left'
          },{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation'
          },{
            to: 'about_us',
            label: 'About us',
            position: 'left'
          },{
            to: 'contact_us',
            label: 'Contact us',
            position: 'left'
          },
          {
            href: 'https://github.com/salimkanoun/Scintigraphy', // a changer pour le git du projet
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright ?? ${new Date().getFullYear()} Appli.Scinti, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = config;