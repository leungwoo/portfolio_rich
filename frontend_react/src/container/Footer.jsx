import React from 'react';

function Footer() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="image.jpg" alt="Card" className="w-full h-64 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card title</div>
        <p className="text-gray-700 text-base">
          Some brief description of the card content.
        </p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      )}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white p-2">
            <p className="text-xl font-bold">Hover text</p>
            <p className="text-base">Some additional information</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Footer;
