import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Spotlight = ({
  gradientFirst =
    "radial-gradient(68% 68% at 55% 32%, rgba(111,168,220,0.10) 0%, rgba(0,79,139,0.05) 45%, rgba(0,79,139,0) 75%)",

  gradientSecond =
    "radial-gradient(50% 50% at 50% 50%, rgba(111,168,220,0.08) 0%, rgba(0,79,139,0.03) 70%, transparent 100%)",

  gradientThird =
    "radial-gradient(50% 50% at 50% 50%, rgba(0,79,139,0.06) 0%, rgba(0,79,139,0.025) 70%, transparent 100%)",

  translateY = -420,
  width = 420,
  height = 1200,
  smallWidth = 180,
  duration = 10,
  xOffset = 70,
} = {}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 2 }}
      className="pointer-events-none absolute inset-0 h-full w-full z-10"
    >
      {/* LEFT LIGHT */}
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 mx-auto h-screen pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width,
            height,
          }}
          className="absolute top-0 left-0"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(10%, -55%)",
            background: gradientSecond,
            width: smallWidth,
            height,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-160%, -80%)",
            background: gradientThird,
            width: smallWidth,
            height,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      {/* RIGHT LIGHT */}
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 mx-auto h-screen pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width,
            height,
          }}
          className="absolute top-0 right-0"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-10%, -55%)",
            background: gradientSecond,
            width: smallWidth,
            height,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(160%, -80%)",
            background: gradientThird,
            width: smallWidth,
            height,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};
