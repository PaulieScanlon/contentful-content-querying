import { graphql, useStaticQuery } from 'gatsby';

const useBlogPosts = () => {
  const {
    allContentfulPost: { nodes }
  } = useStaticQuery(graphql`
    query BlogPostQuery {
      allContentfulPost {
        nodes {
          title
          gatsbyPath(filePath: "/blog/{contentfulPost.url}")
        }
      }
    }
  `);
  return nodes;
};

export default useBlogPosts;
