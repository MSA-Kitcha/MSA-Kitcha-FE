import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className="font-nanum">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
