export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e42a052e1fc5378f2ed66cd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hcoz79cc',
                  apiId: '395f092d-5e95-4d3c-b9b2-2eb4ecc8dceb'
                },
                {
                  buildHookId: '5e42a052586cfa7be0148803',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ee3pjtvy',
                  apiId: 'eb5fd545-d912-4795-a4bd-0ba74de9a748'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meieh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ee3pjtvy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
