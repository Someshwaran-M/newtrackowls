
import React from "react";
import { motion, useReducedMotion } from "motion/react";

export function TextRoll({
  children,
  className = "",
  duration = 0.55,
  stagger = 0.025,
  delay = 0,
  once = false,
  onAnimationComplete,
}) {
  const reduceMotion = useReducedMotion();

  const letters = Array.from(String(children));

  return (
    <span
      className={`inline ${className}`}
      aria-label={String(children)}
    >
      {letters.map((letter, index) => (
        <span
          key={`${index}-${letter}`}
          aria-hidden="true"
          className="
            relative inline-block
            [perspective:1000px]
            [transform-style:preserve-3d]
          "
        >
          {/* First face */}
          <motion.span
            initial={{
              rotateX: 0,
              opacity: reduceMotion ? 1 : 0,
            }}
            whileInView={{
              rotateX: reduceMotion ? 0 : -90,
              opacity: reduceMotion ? 1 : 0,
            }}
            viewport={{
              once,
              amount: 0.1,
            }}
            transition={{
              duration: reduceMotion ? 0 : duration,
              delay: delay + index * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute inset-0
              inline-block
              [backface-visibility:hidden]
              [transform-origin:50%_25%]
            "
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>

          {/* Second face */}
          <motion.span
            initial={{
              rotateX: reduceMotion ? 0 : 90,
              opacity: reduceMotion ? 1 : 0,
            }}
            whileInView={{
              rotateX: 0,
              opacity: 1,
            }}
            viewport={{
              once,
              amount: 0.1,
            }}
            transition={{
              duration: reduceMotion ? 0 : duration,
              delay: delay + index * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={
              index === letters.length - 1
                ? onAnimationComplete
                : undefined
            }
            className="
              relative inline-block
              [backface-visibility:hidden]
              [transform-origin:50%_100%]
            "
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}

      <span className="sr-only">
        {children}
      </span>
    </span>
  );
}

export default TextRoll;
