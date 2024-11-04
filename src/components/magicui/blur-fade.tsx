"use client";

import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: `${number}px` | `${number}%`; // Strictly typed margin
  blur?: string;
  ease?: string | number[];
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.6,
  delay = 0,
  yOffset = 4,
  inView = false,
  inViewMargin = "-50px",
  blur = "4px",
  ease = [0.22, 1, 0.36, 1],
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { 
    once: true, 
    margin: inViewMargin as `${number}px` 
  });
  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { 
      y: yOffset, 
      opacity: 0, 
      filter: `blur(${blur})`,
      transform: 'translate3d(0, 0, 0)'
    },
    visible: { 
      y: 0,
      opacity: 1, 
      filter: "blur(0px)",
      transform: 'translate3d(0, 0, 0)'
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.1 + delay,
          duration,
          ease,
        }}
        className={`will-change-transform ${className || ''}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;