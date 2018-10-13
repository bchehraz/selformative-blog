import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import '../styles/blog-listing.sass';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90vw',
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  blogListingContainer: {
    maxWidth: '980px',
    flex: 1,
  },
};

const Index = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div style={styles.container}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, index) => {
          const { title } = post.frontmatter;

          if (index === 0) {
            return (
              <div
                className="blog-post-preview-main"
                style={styles.blogListingContainer}
                key={post.id}
              >
                <h1>
                  <Link to={post.frontmatter.path}>{title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </div>
            );
          }
          return (
            <div className="blog-post-preview" style={styles.blogListingContainer} key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{title}</Link>
              </h1>
              <h2>
                {post.frontmatter.date}
              </h2>
              <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
          );
        })
      }
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
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
