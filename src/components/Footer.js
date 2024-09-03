import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-4 text-center">
      <p>© 2024 Tyres Plex. All rights reserved.</p>
      <p>
        Follow us on{' '}
        <a href="https://facebook.com" className="underline">
          Facebook
        </a>{' '}
        |{' '}
        <a href="https://twitter.com" className="underline">
          Twitter
        </a>
      </p>
    </footer>
  );
};

export default Footer;
