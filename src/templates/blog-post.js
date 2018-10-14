import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import '../styles/blog-post.sass';
import EmailForm from '../components/EmailForm';

const Template = ({ data }) => {
  const post = data.markdownRemark;
  const { tags } = post.frontmatter;
  const tagsList = data.allMarkdownRemark.group;

  return (
    <div className="blog-post-container">
      <Helmet title={`Selformative - ${post.frontmatter.title}`} />
      <div className="main-content">
        <h1>{post.frontmatter.title}</h1>
        <h2 className="date">{post.frontmatter.date}</h2>
        <h4 className="blog-category-label">in </h4>
        {
          tags.map((category, index) => {
            const useComma = (index + 1 !== tags.length);
            return (
              <span key={category} style={{ color: '#aaa' }}>
                <h4 className="blog-category-label">
                  <span className="blog-category">
                    <Link key={category} to={`/blog/category/${category.replace(/\s+/g, '-').toLowerCase()}`} style={{ color: 'inherit' }}>
                      {category}
                    </Link>
                  </span>
                </h4>
                {(useComma) ? ', ' : ''}
              </span>
            );
          })
        }
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Img
            className="blog-image"
            sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
          />
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <div className="side-content">
        <h3>Categories</h3>
        {
          tagsList.map((category) => {
            const { fieldValue } = category;
            return (
              <h4 key={category}>
                <span className="blog-category-list">
                  <Link key={category} to={`/blog/category/${fieldValue.replace(/\s+/g, '-').toLowerCase()}`} style={{ color: 'inherit' }}>
                    {fieldValue}
                  </Link>
                </span>
              </h4>
            );
          })
        }
        <EmailForm img={data.emailFormImage} />
      </div>
    </div>
  );
};

export default Template;

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

    emailFormImage: imageSharp(id: { regex: "/email_form_bg/" }) {
      sizes(maxWidth: 800 ) {
          ...GatsbyImageSharpSizes
      }
    }
  }
`;
