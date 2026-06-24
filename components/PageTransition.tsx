"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: 1 | -1;
}

const variants = {
  enter: (dir: number) => ({
    x: dir * 48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir * -48,
    opacity: 0,
  }),
};

export default function PageTransition({ children, direction }: Props) {
  return (
    <motion.div
      className="w-full grow flex flex-col [&>*]:grow"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  );
}
