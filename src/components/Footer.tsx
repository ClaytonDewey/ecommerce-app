import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          rel='noreferrer'
          target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://www.claytondewey.io/' rel='noreferrer' target='_blank'>
          Clayton Dewey
        </a>
        .
      </div>
    </footer>
  );
};
export default Footer;
