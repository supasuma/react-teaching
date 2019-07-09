import React from 'react';
import GetDogPhoto from "../components/dog"

/**
 * This component wraps page content sections (eg header, footer, main).
 * It provides consistent margin and max width behavior.
 */
const Container = ({ children }) => (
  <div
    css={{
        paddingLeft: 200,
        paddingRight: 200,
        paddingTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',

    }}>
    {children}

  </div>
);

export default Container;
