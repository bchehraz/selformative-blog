import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import '../styles/blog-listing.css'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, index) => {
          if (index === 0) {
            return (
              <div className="blog-post-preview-main" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
              </div>
            );
          } else {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>
                  {post.frontmatter.date}
                </h2>
              </div>
            )
          }
        })
      }
    </div>
  )
}

Index.propTypes = {
   data: PropTypes.object
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
