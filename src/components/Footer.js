/*
  This functional component's purpose is to render the social platforms.

  The styling for this component is found at ../styles/app.css from
  lines 177 to 199.

*/

import React from 'react';

const Footer = (props) => (
  <div className='footer'>
    © 2017 SPARTA PLAESENT ― &nbsp;
    <div className='footer__link'>
      <a href='https://www.instagram.com/'
        target='_blank' rel="noopener noreferrer">
        INSTAGRAM
    </a>
    </div>
    &nbsp; - &nbsp;
    <div className='footer__link'>
    <a href='https://www.facebook.com/'
      target='_blank'
      rel="noopener noreferrer">
      FACEBOOK
    </a>
    </div> &nbsp; - &nbsp;
    <div className='footer__link'>
      <a href='https://www.twitter.com/'
        target='_blank'
        rel="noopener noreferrer">
        TWITTER
      </a>
    </div>
  </div>
);

export default Footer;
