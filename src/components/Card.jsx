// components/Card.jsx
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {children}
    </div>
  );
};

export default Card;
