import React from 'react';

/**
 * This component wraps page content sections (eg header, footer, main).
 * It provides consistent margin and max width behavior.
 */
const Container = ({ children }) => (
  <div
    css={{
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',

    }}>
    {children}
  </div>
);

export default Container;
