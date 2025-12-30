function BorderedButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        relative inline-flex h-12 overflow-hidden rounded-full p-[1px]
        focus:outline-none
        focus:ring-2 focus:ring-[#6FA8DC]
        focus:ring-offset-2 focus:ring-offset-white
        transform transition-transform duration-300 hover:scale-[1.06]
      "
    >
      {/* Animated gradient border */}
      <span
        className="
          absolute inset-[-1000%]
          animate-[spin_6s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#6FA8DC_0%,#004F8B_50%,#6FA8DC_100%)]
        "
      />

      {/* Button body */}
      <span
        className="
          inline-flex h-full w-full items-center justify-center
          rounded-full bg-white px-10 py-1
          text-md font-semibold text-[#004F8B]
          backdrop-blur-xl
        "
      >
        {children}
      </span>
    </button>
  );
}

export default BorderedButton;
