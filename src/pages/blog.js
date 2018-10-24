import React from 'react';
import { push } from 'gatsby-link';
import Img from 'gatsby-image';

import '../styles/blog-listing.sass';

const getTags = (tags) => {
  if (tags !== null) {
    return tags.join(', ');
  }
  return 'No Category Found';
};

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-listing-container">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          const {
            title,
            tags,
            path,
            date,
            featuredImage,
          } = post.frontmatter;

          return (
            <div
              className="blog-listing-outer"
              onClick={() => push(path)}
              role="button"
              onKeyPress={() => push(path)}
              key={post.id}
              tabIndex={0}
            >
              <div className="blog-listing" key={post.id}>
                <div className="blog-listing-image-container">
                  <Img
                    sizes={featuredImage.childImageSharp.sizes}
                    className="blog-listing-image"
                  />
                </div>
                <div className="blog-listing-text" key={post.id}>
                  <h4 className="category">{getTags(tags)}</h4>
                  <h1>
                    {title}
                  </h1>
                  <h2 className="date">{date}</h2>

                  <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
