import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import '../styles/blog-listing.sass'

/*
  This template is only for /categories/$tag
  and doesn't work for /categories/
*/
class CategoriesTemplate extends React.Component {
  getTags = (tags) => {
    if (tags !== null) {
      return tags.join(", ");
    }
    return "No Category Found";
  }
  
  render() {
    const { tag } = this.props.pathContext;
    //const { edges: posts } = data.allMarkdownRemark;
    const { edges: posts } = this.props.data.allMarkdownRemark;

    return (
      <div className="blog-listing-container">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            const title = post.frontmatter.title;
            const tags = post.frontmatter.tags;

            return (
              <div
                className="blog-listing-outer"
                onClick={() => push(post.frontmatter.path)}
                key={post.id}
              >
                <div className="blog-listing">
                  <div className="blog-listing-text" key={post.id}>
                    <h4 className="category">{this.getTags(tags)}</h4>
                    <h1>
                      {title}
                    </h1>
                    <h2 className="date" >{post.frontmatter.date}</h2>

                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  </div>
                  <div className="blog-listing-image-container">
                    <Img
                      sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
                      className="blog-listing-image"
                    />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

CategoriesTemplate.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
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
