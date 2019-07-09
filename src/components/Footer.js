import React from 'react';
// import Foundation from 'react-foundation';

const Footer = () => {
  return (
    <footer>
      <p>
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
    </footer>
  );
};

export default Footer;
