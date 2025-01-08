import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 w-full h-full rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
        <div className="absolute inset-0 w-full h-full rounded-full border-4 border-t-transparent border-red-500 animate-spin delay-300"></div>
        <div className="absolute inset-0 flex justify-center items-center text-xl font-semibold text-white">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
