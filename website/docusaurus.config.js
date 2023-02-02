// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Low Code & Fusion Dev',
  tagline: 'Power Platform - Cloud Integrations - Developer Tools',
  url: 'https://microsoft.github.io',
  baseUrl: '/Low-Code/',
  favicon: 'img/favicon.ico',

  // GitHub Pages Config
  organizationName: 'microsoft', 
  projectName: 'Low-Code', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },

        blog: {
          blogTitle: '#30DaysOfLowCode',
          blogDescription: 'Jumpstart your #LowCode and #FusionDev learning journey with #30Days of content and resources',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent Articles',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: 'descending'
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

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: ' ',
        logo: {
          alt: 'Low Code Logo',
          src: 'img/logo.png',
        },

        style: 'primary',
       
        items: [
          {to: '/lowcode-february', label: '#LowCodeFebruary', position: 'left'},
          {to: 'https://aka.ms/lowcode-february/devplan', label: '✨ Developer Plan', position: 'left'},
          {to: 'https://learn.microsoft.com/events/learn-events/powerful-devs-2023/?WT.mc_id=javascript-82212-ninarasi', label: '#PowerfulDevs Conf', position: 'left'},

          {to: '/blog', label: 'Blog', position: 'right'},
          {to: 'https://aka.ms/lowcode-february/videos', label: 'Videos', position: 'right'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Workshops',
          },
        
          {to: '/calendar', label: 'Calendar', position: 'right'},
          {
            href: 'https://github.com/microsoft/Low-Code',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
       

        /* 
        style: 'light',
        logo: {
          alt: 'LowCode February Logo',
          src: 'img/???.png',
          href: 'https://aka.ms/lowcode-february',
          width: 280,
          height: 100,
        },
        */

        links: [

          {
            label: `Collection`,
            to: 'https://aka.ms/lowcode-february/collection'
          },
          {
            label: `Power Platforms`,
            to: 'https://learn.microsoft.com/power-platform/developer/get-started?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power Virtual Agents`,
            to: 'https://learn.microsoft.com/power-virtual-agents/fundamentals-what-is-power-virtual-agents?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power Automate`,
            to: 'https://learn.microsoft.com/power-automate/getting-started?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power Apps`,
            to: 'https://learn.microsoft.com/power-apps/powerapps-overview?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power BI`,
            to: 'https://learn.microsoft.com/power-bi/fundamentals/power-bi-service-overview?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power Pages`,
            to: 'https://learn.microsoft.com/power-pages/introduction?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: 'Privacy Statement ',
            to: 'https://privacy.microsoft.com/privacystatement',
          },
          { 
           label: `Copyright © ${new Date().getFullYear()} Microsoft`,
           to: 'https://microsoft.com'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      // TODO: Configure to provide default OpenGraph Metadata 
      image: 'https://microsoft.github.io/Low-Code/img/og/30-banner.png',
      metadata: [
        { 
          name: 'twitter:url', 
          content: 'https://aka.ms/lowcode-february'
        },
        { 
          name: 'twitter:title', 
          content: '#LowCodeFebruary is here!'
        },
        { 
          name: 'twitter:description', 
          content: 'Explore Low Code Development and Fusion Teams with Power Platforms, Azure and Developer Tools - with resources for self-study'
        },
        { 
          name: 'twitter:image', 
          content: 'https://microsoft.github.io/Low-Code/img/og/30-banner.png' 
        },
        { 
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        { 
          name: 'twitter:creator', 
          content: '@nitya'
        },
        { 
          name: 'twitter:site', 
          content: '@AzureAdvocates'
        },
      ],

      /* Banner Announcements */
      announcementBar: {
        id: 'LowCode February kicks off Feb 1, 2022!',
        content:
          '<b> <a href="https://aka.ms/lowcode-february/challenge"> Take Our Cloud Skills Challenge! </a> | Give us <a href="https://github.com/microsoft/Low-Code"><b> a 🌟 on GitHub</b></a> </b> ',
        backgroundColor: '#000000', /* '#050D20',*/
        textColor: '#ffffff', /* '#4DC7B2', */
        isCloseable: false,
      },

      /* Clarity Config */
      clarity: {
        ID: "eze7lsqnch", 
      }

    }),


  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1000, // max resized image's size.
        min: 420, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],

    [
      'docusaurus-plugin-clarity',
      {
      }
    ],
  ],
};

module.exports = config;
