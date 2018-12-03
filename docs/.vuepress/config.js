module.exports = {
  title: '@nuebuild/fields',
  themeConfig: {
    nav: [
      { text: 'Settings', link: '/settings/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      },
      {
        text: 'Languages',
        items: [
          { 
            text: 'Group1', 
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'Japanese', link: '/language/japanese' }
            ] 
          },
        ]
      }
    ],
    sidebar: {
      '/settings/': [
        '/',
        '',
        {
          title: 'Sub Pages',
          collapsable: true,
          children: [
            ['child', 'Child Page']
          ]
        },
        
      ],
      // fallback
      '/': [
        '/'
      ]
    }
  }
}
