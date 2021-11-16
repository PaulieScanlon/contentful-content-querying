import { graphql, useStaticQuery } from 'gatsby';

const useTopNavigation = () => {
  const {
    allContentfulPage: { nodes }
  } = useStaticQuery(graphql`
    query TopNavQuery {
      allContentfulPage(
        filter: { navigation: { eq: "top-navigation" } }
        sort: { fields: url }
      ) {
        nodes {
          url
          title
        }
      }
    }
  `);
  return nodes;
};

export default useTopNavigation;
