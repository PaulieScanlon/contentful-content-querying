import { graphql, useStaticQuery } from 'gatsby';

const useBottomNavigation = () => {
  const {
    allContentfulPage: { nodes }
  } = useStaticQuery(graphql`
    query BottomNavQuery {
      allContentfulPage(
        filter: { navigation: { eq: "bottom-navigation" } }
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

export default useBottomNavigation;
