import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import BgImage from '../components/BgImage';

const Template = ({ data }) => {
  const post = data.markdownRemark;
  let tags = post.frontmatter.tags;
  let tagsList = data.allMarkdownRemark.group;

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
      <div className="blog-post-container">
        <Helmet title={`Selformative - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <h2 className="date">{post.frontmatter.date}</h2>
            <h4 className="blog-category-label">{"in "}</h4>
            {
              tags.map((category, index) => {
                let useComma = (index+1 != tags.length);
                return (
                  <span key={index} style={{ color: '#aaa' }}>
                    <h4 className="blog-category-label">
                      <span className="blog-category">
                        <Link key={index} to={'/categories/'+category.replace(/\s+/g, '-').toLowerCase()} style={{ color: 'inherit' }}>
                          {category}
                        </Link>
                      </span>
                    </h4>
                    {(useComma) ? ", " : ""}
                  </span>
                )
              })
            }
            <div style={{ paddingTop: 10, paddingBottom: 10 }}>
              <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
        </div>
        </div>
      </div>
      <div className="side-content" style={styles.sideContent}>
        <h3>Categories</h3>
        {
          tagsList.map((category, index) => {
            return (
              <h4 key={index}>
                <span className="blog-category-list">
                  <Link key={index} to={'/categories/'+category.fieldValue.replace(/\s+/g, '-').toLowerCase()} style={{ color: 'inherit' }}>
                    {category.fieldValue}
                  </Link>
                </span>
              </h4>
            )
          })
        }
      </div>
    </div>
  )
}

Template.propTypes = {
  data: PropTypes.object
}

const styles = {
  container: {
    border: '1px solid red',
    display: 'flex',
  },
  mainContent: {
    flex: 3,
    padding: 20,
    border: '1px solid blue',
  },
  sideContent: {
    flex: 1,
    padding: 20,
    border: '1px solid green',
  },
}

export default Template

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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

    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`;
