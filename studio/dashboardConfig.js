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
                  buildHookId: '5f5c2bb2da13e34734ccbf28',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-swbv6ga4',
                  apiId: '67448910-b619-4f91-996f-c8bd6a8c0432'
                },
                {
                  buildHookId: '5f5c2bb23b4b0e391728e15f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-amwwuzhp',
                  apiId: 'f94cddf1-1ca1-4579-8d42-a8a383cdb0ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/telriot/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-amwwuzhp.netlify.app', category: 'apps'}
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
