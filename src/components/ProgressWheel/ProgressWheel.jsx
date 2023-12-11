import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ProgressWheel = () => {
  const controls = useAnimation();

  useEffect(() => {
    const progressWheel = document.querySelector(".progress");

    controls.start({
      strokeDasharray: [0, 1],
      transition: { duration: 0.5 },
      onUpdate: (latest) => {
        progressWheel.style.strokeDasharray = `${latest}, 1`;
      },
    });
  }, [controls]);

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      className="fixed left-0 top-1/2 transform -translate-y-1/2"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="bg"
        stroke="#1daa9e"
        strokeWidth="10"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="progress-wheel"
        stroke="#c11bd4d1"
        strokeWidth="10"
        initial={{ strokeDasharray: "0, 1" }}
        animate={controls}
      />
    </svg>
  );
};

export default ProgressWheel;
