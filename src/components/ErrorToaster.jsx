import React, { useEffect, useState } from "react";
import ErrorIcon from "../assets/error-icon.svg"; // Error icon SVG
import CloseIcon from "../assets/close-icon.svg"; // Close button SVG

const ErrorToaster = ({ message, autoCloseDuration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically close the toaster after the specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, autoCloseDuration);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [autoCloseDuration]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-red-500 text-white shadow-lg rounded-lg overflow-hidden w-80">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Error Icon */}
          <div className="flex items-center">
            <img src={ErrorIcon} alt="Error Icon" className="w-6 h-6 mr-2" />
            <span className="text-sm font-semibold">Error</span>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <img src={CloseIcon} alt="Close Icon" className="w-5 h-5" />
          </button>
        </div>

        {/* Error Message */}
        <div className="px-4 py-4 text-sm text-center">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorToaster;
