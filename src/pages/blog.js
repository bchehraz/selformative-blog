import React from 'react'
import { push } from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Media from 'react-media'

import '../styles/blog-listing.css'

class Blog extends React.Component {

  constructor() {
    super()
    let postsToShow = 12
    if (typeof window !== 'undefined') {
      postsToShow = window.postsToShow
    }
    this.state = {
      showingMore: postsToShow > 12,
      postsToShow,
    }
  }

  getTags = (tags) => {
    if (tags !== null) {
      return tags.join(", ");
    }
    return "No Category Found";
  }

  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;

    return (
      <div style={styles.container}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            const title = post.frontmatter.title;
            const tags = post.frontmatter.tags;

            if (index % 2 === 0) {
              return (
                <div
                  style={styles.blogListingContainer}
                  className="blog-listing-container"
                  onClick={() => push(post.frontmatter.path)}
                >
                  <div style={styles.container} className="blog-listing-preview-main">
                    <div style={styles.blogContainer} key={post.id}>
                      <h4 className="category">{this.getTags(tags)}</h4>
                      <h1>
                        {title}
                      </h1>
                      <h2 className="date" >{post.frontmatter.date}</h2>

                      <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    </div>
                    <div className="blog-listing-preview-main blog-post-image" style={styles.blogImageContainer}>
                      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  style={styles.blogListingContainer}
                  className="blog-listing-container"
                  onClick={() => push(post.frontmatter.path)}
                >
                  <div style={styles.container} className="blog-listing-preview-main">
                    <div className="blog-listing-preview-main" style={styles.blogImageContainer}>
                      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                    </div>
                    <div style={styles.blogContainer} key={post.id}>
                      <h4 className="category">{this.getTags(tags)}</h4>
                      <h1>
                        {title}
                      </h1>
                      <h2 className="date" >{post.frontmatter.date}</h2>

                      <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    );
  }
}

Blog.propTypes = {
   data: PropTypes.object
}

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
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    maxWidth: '980px',
  },
  blogContainer: {
    padding: 10,
    flex: 1
  },
  blogImageContainer: {
    flex: 1
  }
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
