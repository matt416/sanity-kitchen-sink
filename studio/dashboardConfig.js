export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff89210fcd260099295d423',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rekswazu',
                  apiId: 'd5fcab8c-a6aa-4c53-8de6-10037012bcd2'
                },
                {
                  buildHookId: '5ff89210c60b7506999a4d01',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7v694awm',
                  apiId: 'f89119ec-0cab-4b7f-864a-c8a3cc7420b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matt416/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7v694awm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
