import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 w-12 h-12 animate-spin rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;
