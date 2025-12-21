import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.getBoundingClientRect().height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto font-sans antialiased"
    >
      {data.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className="flex justify-start pt-12 md:pt-40 md:gap-10"
        >
          {/* Left sticky title */}
          <div className="sticky top-40 z-40 flex items-center max-w-xs md:w-full">
            <div className="relative flex items-center">
              <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center border border-slate-300">
                <div className="h-4 w-4 rounded-full bg-indigo-500" />
              </div>
            </div>

            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-slate-500">
              {item.title}
            </h3>
          </div>

          {/* Content */}
          <div className="relative pl-20 pr-4 md:pl-4 w-full">
            <h3 className="md:hidden block text-2xl mb-4 font-bold text-slate-600">
              {item.title}
            </h3>
            {item.content}
          </div>
        </div>
      ))}

      {/* Vertical line */}
      <div
        style={{ height: `${height}px` }}
        className="
          absolute left-8 top-0 w-[2px]
          bg-gradient-to-b
          from-transparent via-slate-300 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
        "
      >
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="
            absolute top-0 inset-x-0 w-[2px]
            bg-gradient-to-t from-indigo-600 via-violet-600 to-transparent
            rounded-full
          "
        />
      </div>
    </div>
  );
};
