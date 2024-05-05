import React, { useState } from 'react';
//import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./style.css"

const TextCollapse = ({ text, expanded, onExpand }) => {
  const [displayText, setDisplayText] = useState(text.substring(0, TEXT_TRUNCATE_LENGTH) + '...');

  const handleExpand = () => {
    onExpand();
    if (!expanded) {
      setDisplayText(text);
    } else {
      setDisplayText(text.substring(0, TEXT_TRUNCATE_LENGTH) + '...');
    }
  };

  return (
    <div className="specialist-description-text" style={{ whiteSpace: 'pre-wrap' }}>
      {displayText}
      {expanded? (
          <button className='button-hide' onClick={handleExpand}>Скрыть</button>
      ) : (
        <span>
          <button className='button-show' onClick={handleExpand}>Подробнее</button>
</span>
      )}
    </div>
  );
};

const TEXT_TRUNCATE_LENGTH = 500;

export default TextCollapse;