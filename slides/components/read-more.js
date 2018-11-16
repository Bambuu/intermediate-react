import React from 'react';

export const ReadMore = ({ link }) => {
  const href = `https://${link}`;
  return (
    <a
      href={href}
      target="_blank"
      style={{ color: "#addb67", fontSize: '1.5em' }}
    >
      📖 {link}
    </a>
  );
};
