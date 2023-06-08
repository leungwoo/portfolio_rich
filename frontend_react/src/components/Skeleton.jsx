import React from 'react';

function Skeleton() {
  return (
    <div className="relative w-full group flex-1 md:min-w-[300px] min-w-[200px] md:max-h-[200px] rounded-lg shadow-lg ">Skeleton
      <div
        className="flex rounded-lg absolute object-cover w-full h-full inset-0 group-hover:opacity-10"
      />
    </div>
  );
}

export default Skeleton;
