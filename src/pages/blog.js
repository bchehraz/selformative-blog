import React from 'react'
import { push } from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Media from 'react-media'

import '../styles/blog-listing.sass'

class Blog extends React.Component {
  getTags = (tags) => {
    if (tags !== null) {
      return tags.join(", ");
    }
    return "No Category Found";
  }

  render() {
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

Blog.propTypes = {
   data: PropTypes.object
}

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
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
