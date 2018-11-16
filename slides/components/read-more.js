import React from 'react';

export const ReadMore = ({ link }) => {
  const href = `https://${link}`;
  return (
    <a
      href={href}
      target="_blank"
	  style={{fontSize: '1.5em' }}
	  className="link"
    >
      📖 {link}
    </a>
  );
};
