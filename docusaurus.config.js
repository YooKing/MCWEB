const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'YKMC',
  tagline: 'A minecraft server.',
  url: 'https://yooking.github.io/',
  baseUrl: '/MCWEB/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YooKing', // Usually your GitHub org/user name.
  projectName: 'MCWEB', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/YooKing/MCWEB/edit/documentation/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/YooKing/MCWEB/edit/documentation/blog/',
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
        title: 'YKMC',
        logo: {
          alt: 'YKMC logo',
          src: 'img/ykmclogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog/Notice', label: '公告', position: 'left'},
	  {to: '/blog', label: '服务器动态', position: 'left'},
          {
            href: 'https://jq.qq.com/?_wv=1027&k=551kUUF',
            label: '加入QQ群',
            position: 'right',
          },
	  {
	    href: 'http://139.159.156.93:8123',
            label: '卫星地图',
	    position: 'right'
	  },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '首页',
            items: [                                      {
                label: '加入服务器',
		to: '/', 
	      },
	      {
		label: '公告',
		to: '/blog/Notice'
	      },
	    ],
          },
	  {
            title: '社群',
            items: [                       
	      {   
		label: 'QQ群',
		href: 'https://jq.qq.com/?_wv=1027&k=551kUUF',
              },
            ],
          },
	  {
            title: '更多',
            items: [
              {
                label: '卫星地图',
                href: 'http://139.159.156.93:8123/',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} YKMC 网站使用 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
