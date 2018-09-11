import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import '../styles/blog-listing.css'
import BgImage from '../components/BgImage';

class Index extends React.Component {

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

  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;

    return (
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            const title = post.frontmatter.title;

            if (index === 0) {
              return (
                <div className="blog-post-preview-main" key={post.id}>
                  <h1>
                    <Link to={post.frontmatter.path}>{title}</Link>
                  </h1>
                  <h2>{post.frontmatter.date}</h2>
                  <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                  <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
              );
            } else {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h1>
                    <Link to={post.frontmatter.path}>{title}</Link>
                  </h1>
                  <h2>
                    {post.frontmatter.date}
                  </h2>
                  <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                  <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
              )
            }
          })
        }
      </div>
    );
  }
}

Index.propTypes = {
   data: PropTypes.object
}

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
