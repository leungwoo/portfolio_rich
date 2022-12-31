/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Button({ btnName, btnColor }) {
  return (
    <button
      type="button"
      className={`bg-${btnColor} text-white p-2 rounded-lg font-medium hover:bg-gradient-to-tl from-primary to-white hover:cursor-pointer`}
    >{btnName}
    </button>
  );
}

export default Button;
