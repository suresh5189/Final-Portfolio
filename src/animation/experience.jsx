const rev = "reverse";

export const leftToRight = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export const leftToRightStiff = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      type: "spring",
          stiffness: 200,
          damping: 4,
    },
  },
};

export const linux = {
  initial: {
    opacity: 0.3,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: rev,
    },
  },
};

export const graphic = {
  initial: {
    scale: 1.2,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.1,
    },
  },
};