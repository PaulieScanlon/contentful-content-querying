import React from 'react';

import './src/styles/global.css';

import RootElement from './src/components/root-element';

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};
