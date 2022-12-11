import React from 'react';

function Button({ btnName, btnColor = 'primary' }) {
  return (
    <div className={`bg-${btnColor} text-white p-2 rounded-lg font-medium hover:bg-white hover:text-primary duration-300 ease-in-out cursor-pointer`}>{btnName}</div>

  );
}

export default Button;
