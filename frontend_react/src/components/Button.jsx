/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Button({ btnName, btnColor }) {
  return (
    <div
      className={`bg-${btnColor} text-white p-2 rounded-lg font-medium hover:bg-gradient-to-tl from-primary to-white hover:cursor-pointer`}
    >{btnName}
    </div>
  );
}

export default Button;
