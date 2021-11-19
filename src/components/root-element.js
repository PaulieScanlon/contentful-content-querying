import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import useTopNavigation from '../hooks/use-top-navigation';
import useBottomNavigation from '../hooks/use-bottom-navigation';

const RootElement = ({ children }) => {
  const topNavigation = useTopNavigation();
  const bottomNavigation = useBottomNavigation();

  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            {topNavigation.map((item, index) => {
              const { url, title } = item;
              return (
                <li key={index}>
                  <Link to={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
          <ul>
            {bottomNavigation.map((item, index) => {
              const { url, title } = item;
              return (
                <li key={index}>
                  <Link to={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </footer>
    </Fragment>
  );
};

export default RootElement;
