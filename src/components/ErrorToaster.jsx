import React, { useEffect, useState } from "react";
import ErrorIcon from "../assets/error-icon.svg";
import CloseIcon from "../assets/close-icon.svg";

const ErrorToaster = ({ message, autoCloseDuration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, autoCloseDuration);

    return () => clearTimeout(timer);
  }, [autoCloseDuration]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-red-500 text-white shadow-lg rounded-lg overflow-hidden w-80">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <img src={ErrorIcon} alt="Error Icon" className="w-6 h-6 mr-2" />
            <span className="text-sm font-semibold">Error</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <img src={CloseIcon} alt="Close Icon" className="w-5 h-5" />
          </button>
        </div>
        <div className="px-4 py-4 text-sm text-center">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorToaster;
