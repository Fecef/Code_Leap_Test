export const buttons = {
  variants: {
    default: {
      w: "6.9rem",
      h: "2rem",
      borderRadius: "8px",
      bg: "primary.1",
      color: "white",
      _hover: {
        bg: "primary.2",
        _disabled: {
          bg: "grey.2",
        },
      },
      _disabled: {
        bg: "grey.2",
        cursor: "not-allowed",
      },
    },
    warning: {
      w: "6.9rem",
      h: "2rem",
      borderRadius: "8px",
      bg: "warning.1",
      color: "white",
      _hover: { bg: "warning.2" },
    },
    success: {
      w: "6.9rem",
      h: "2rem",
      borderRadius: "8px",
      bg: "success.1",
      color: "white",
      _hover: { bg: "success.2" },
      _disabled: {
        bg: "grey.2",
        cursor: "not-allowed",
      },
    },
    outlined: {
      w: "6.9rem",
      h: "2rem",
      borderRadius: "8px",
      bg: "transparent",
      color: "black",
      border: "1px solid #999",
      _hover: { bg: "transparent" },
    },
  },
};
