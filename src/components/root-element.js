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
          <ul
            style={{
              padding: '0px'
            }}
          >
            {topNavigation.map((item, index) => {
              const { url, title } = item;
              return (
                <li
                  key={index}
                  style={{
                    display: 'inline',
                    paddingRight: '8px'
                  }}
                >
                  <Link to={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main
        style={{
          minHeight: '480px'
        }}
      >
        {children}
      </main>
      <footer>
        <nav>
          <ul
            style={{
              padding: '0px'
            }}
          >
            {bottomNavigation.map((item, index) => {
              const { url, title } = item;
              return (
                <li
                  key={index}
                  style={{
                    display: 'inline',
                    paddingRight: '8px'
                  }}
                >
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
