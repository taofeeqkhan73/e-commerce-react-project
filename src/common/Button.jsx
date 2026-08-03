import React from "react";

const CommonButton = ({ text, icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-0 py-2 font-semibold transition ${className}`}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default CommonButton;