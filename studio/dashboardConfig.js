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
                  buildHookId: '60abf1c98acf8400dc476d0a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-q3a32m4r',
                  apiId: 'f4294b67-dc21-4b8a-b54e-459e3c161e6c'
                },
                {
                  buildHookId: '60abf1c9bd59e000901f8997',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5ft6g36n',
                  apiId: 'b4b28a7f-371b-4a08-aedb-eeacd990b357'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vishkrish200/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5ft6g36n.netlify.app',
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
