import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Categories = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
    {/*Add in content for the category page here*/}
    </div>
  );
}

Categories.propTypes = {
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

export default Categories;

export const pageQuery = graphql`
  query CategoryPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: { frontmatter: { tags: { in : [$tag] } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
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
