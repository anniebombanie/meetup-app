import React from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell } from 'react-foundation';

const Header = () => {
  return (
    <header>
      <Grid className="display align-center">
        <Cell small={6} medium={8}>
          <h1 className="text-center">
            A simple app to find upcoming meetups in your area!
          </h1>
        </Cell>
      </Grid>
    </header>
  );
};

export default Header;
