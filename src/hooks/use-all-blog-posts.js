import { graphql, useStaticQuery } from 'gatsby';

const useAllBlogPosts = () => {
  const {
    allContentfulPost: { nodes }
  } = useStaticQuery(graphql`
    query allBlogLinksQuery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/blog/{contentfulPost.url}")
          createdAt
        }
      }
    }
  `);
  return nodes;
};

export default useAllBlogPosts;
