import React from "react";

const HeadingNText = ({ title, children }) => {
  return (
    <div className="text-center">
      {/* Heading */}
      <h2
        className="
          text-4xl sm:text-5xl lg:text-6xl
          p-2 sm:p-4 m-6 sm:m-10
          font-extrabold tracking-wide
          bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800
          bg-clip-text text-transparent
          leading-tight break-words whitespace-normal
        "
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className="
          max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto
          text-slate-700
          text-base sm:text-lg md:text-xl lg:text-2xl
          tracking-tight leading-relaxed
        "
      >
        {children}
      </p>
    </div>
  );
};

export default HeadingNText;
