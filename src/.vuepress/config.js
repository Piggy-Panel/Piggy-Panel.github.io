module.exports = {
  title: 'Piggy Panel',
  description: 'A modular panel for subscription services.',
  dest: "docs",
  evergreen: true,
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'Piggy-Panel/panel',
    repoLabel: 'Github', docsRepo: 'Piggy-Panel/Piggy-Panel.github.io',
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Document', link: '/start/' }
    ],
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          { title: 'About', path: '/start/' },
          { title: 'Changelog', path: '/start/changelog.html' },
          { title: 'Installation', path: '/start/installation.html' },
          { title: 'Quick Tour', path: '/start/quick-tour.html' }
        ]
      },
      {
        title: 'Modules',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          { title: 'Overview', path: '/modules/' },
          { title: 'Framework', path: '/modules/framework.html' },
          { title: 'Account / RBAC', path: '/modules/account_rbac.html' },
          { title: 'Support / Tickets', path: '/modules/support_tickets.html' },
          { title: 'Subscription', path: '/modules/subscriptions.html' },
          { title: 'Payments', path: '/modules/payments.html' }
        ]
      }
    ]
  }
}