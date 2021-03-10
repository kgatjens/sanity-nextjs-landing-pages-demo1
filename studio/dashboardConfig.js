export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6048d81fe3b0aafd5cbcd923',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-demo-1-studio',
                  apiId: 'e6a1a367-4f41-4172-9729-decc24f4fcf1'
                },
                {
                  buildHookId: '6048d81fb7723a1cab5f88a8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-demo-1',
                  apiId: '44ca5217-2529-4147-ba3d-17891edd3e30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kgatjens/sanity-nextjs-landing-pages-demo1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-demo-1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
