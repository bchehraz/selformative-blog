import React from 'react';
import Link, { push } from 'gatsby-link';
import Img from 'gatsby-image';

import '../styles/blog-listing.sass';

/*
  This template is only for /category/$tag
  and doesn't work for /category/
*/

const getTags = (tags) => {
  if (tags !== null) {
    return tags.join(', ');
  }
  return 'No Category Found';
};

const CategoriesTemplate = ({ data, pathContext }) => {
  const { tag } = pathContext;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-listing-container">
      <h2 style={{ flexBasis: '100%', textAlign: 'center' }}>
        Showing posts with category:
        <span style={{ fontWeight: 'bold' }}>{`${tag}`}</span>
        <Link to="/blog">Reset</Link>
      </h2>
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
              <div className="blog-listing">
                <div className="blog-listing-text" key={post.id}>
                  <h4 className="category">{getTags(tags)}</h4>
                  <h1>
                    {title}
                  </h1>
                  <h2 className="date">{date}</h2>

                  <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
                <div className="blog-listing-image-container">
                  <Img
                    sizes={featuredImage.childImageSharp.sizes}
                    className="blog-listing-image"
                  />
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default CategoriesTemplate;

export const pageQuery = graphql`
  query CategoryPage($tag: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: { frontmatter: { tags: { in : [$tag] } } }
    ) {
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
