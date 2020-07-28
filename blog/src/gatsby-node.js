const path = require('path');
exports.createPages = async ({graphql,actions}) => {
     const {createPage} = actions; 
     const result = await graphql(`
     {
        allContentfulBlogs {
            nodes {
              id
              title {
                title
              }
              image {
                fluid {
                  src
                }
              }
              slug
              description {
                description
              }
            }
          }
     }
     `)
    console.log("dataaaaaaaa")
    //  result.data.allContentfulBlogs.nodes.forEach((data) => {
    //     createPage({
    //         path: `/blogs/${data.slug}`,
    //         component: path.resolve('./src/templates/BlogTemp.js'),
    //         context: {
    //             data: slug.data
    //         }
    //     })
    //  })

    //  console.log('ressssssssss--------',JSON.stringify(result));
}