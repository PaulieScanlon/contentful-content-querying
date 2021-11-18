import { graphql, useStaticQuery } from 'gatsby';

const useLatestBlogPosts = () => {
  const {
    allContentfulPost: { nodes }
  } = useStaticQuery(graphql`
    query latestBlogLinksQuery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: 3) {
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

export default useLatestBlogPosts;
