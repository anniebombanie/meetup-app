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
          href="https://developer.ticketmaster.com/products-and-docs/apis/getting-started/"
          target="_blank"
          aria-label="go to Ticketmaster's API website"
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
