"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
}

export default function AnimateIn({
  children,
  delay = 0,
  className,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
