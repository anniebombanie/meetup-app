import React from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell } from 'react-foundation';

const Footer = () => {
  return (
    <footer>
      <Grid>
        <Cell small={10} medium={8} large={4}>
          <p className="text-center">
            Created by{' '}
            <a
              href="http://www.anniebombanie.com"
              target="_blank"
              aria-label="go to Annie Liew's website"
              rel="noopener noreferrer"
            >
              Annie
            </a>{' '}
            | Using the{' '}
            <a
              href="https://www.meetup.com/en-AU/meetup_api/"
              target="_blank"
              aria-label="go to Meetup.com API website"
              rel="noopener noreferrer"
            >
              Meetup.com
            </a>{' '}
            API
          </p>
        </Cell>
      </Grid>
    </footer>
  );
};

export default Footer;
