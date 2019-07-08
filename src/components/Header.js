import React from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell } from 'react-foundation';

const Header = () => {
  return (
    <header>
      <Grid-x className="display">
        <Cell>
          <h1 className="text-center">
            A simple app to find upcoming meetups in your area!
          </h1>
        </Cell>
      </Grid-x>
    </header>
  );
};

export default Header;
