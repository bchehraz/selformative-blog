/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require('path');
 const _ = require('lodash');

 exports.createPages = ({ boundActionCreators, graphql }) => {
   const { createPage } = boundActionCreators;

   const blogPostTemplate = path.resolve("src/templates/blog-post.js");
   const categoryTemplate = path.resolve("src/templates/categories.js");

   return graphql(`
     {
       allMarkdownRemark(
         sort: { order: DESC, fields: [frontmatter___date] }
         limit: 2000
       ) {
         edges {
           node {
             excerpt(pruneLength: 250)
             html
             frontmatter {
               date
               path
               tags
             }
           }
         }
       }
     }
   `).then(result => {
     if (result.errors) {
       return Promise.reject(result.errors);
     }

     const posts = result.data.allMarkdownRemark.edges;

     // Create post detail pages
     posts.forEach(({ node }) => {
       createPage({
         path: node.frontmatter.path,
         component: blogPostTemplate
       });
     });

     // Category/Tag Pages:
     let tags = [];
     // Iterate through each post, putting all found tags into `tags`
     _.each(posts, edge => {
       if (_.get(edge, "node.frontmatter.tags")) {
         tags = tags.concat(edge.node.frontmatter.tags);
       }
     });
     // Eliminate duplicate tags
     tags = _.uniq(tags);

     // Make tag pages
     tags.forEach(tag => {
       createPage({
         path: `/blog/categories/${_.kebabCase(tag)}/`,
         component: categoryTemplate,
         context: {
           tag,
         },
       });
     });
   });
 }
