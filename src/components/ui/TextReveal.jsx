
import React from "react";
import { motion } from "motion/react";

const presets = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },

  "fade-in-blur": {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 15,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  },

  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },

  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

const staggerValues = {
  word: 0.06,
  char: 0.025,
  line: 0.12,
};

export default function TextReveal({
  children,
  as = "p",
  per = "word",
  preset = "fade-in-blur",
  className = "",
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  once = false,
  amount = 0.15,
  style = {},
}) {
  const MotionTag = motion[as] || motion.p;

  const text = String(children);

  const segments =
    per === "line"
      ? text.split("\n")
      : per === "char"
        ? Array.from(text)
        : text.split(/(\s+)/);

  const animation = presets[preset] || presets.fade;

  const stagger = staggerValues[per] / Math.max(speedReveal, 0.1);

  const duration = 0.35 / Math.max(speedSegment, 0.1);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const itemVariants = {
    hidden: animation.hidden,
    visible: {
      ...animation.visible,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (!trigger) return null;

  return (
    <MotionTag
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
        margin: "0px 0px -30px 0px",
      }}
      aria-label={text}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${index}-${segment}`}
          variants={itemVariants}
          aria-hidden="true"
          className={
            per === "line"
              ? "block"
              : "inline-block"
          }
          style={{
            whiteSpace:
              per === "word" ? "pre-wrap" : "normal",
          }}
        >
          {segment}
        </motion.span>
      ))}
    </MotionTag>
  );
}
