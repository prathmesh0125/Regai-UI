// Message.js
import React from 'react';

const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
      <p>hi</p>
    </div>
  );
};

export default Message;
