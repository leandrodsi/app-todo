export const theme = {
  colors: {
    purple: "#8284FA",
    purpleDark: "#5E60CE",
    blue: "#4EA8DE",
    blueDark: "#1E6F9F",
    gray700: "#0D0D0D",
    gray600: "#1A1A1A",
    gray500: "#262626",
    gray400: "#333333",
    gray300: "#808080",
    gray200: "#D9D9D9",
    gray100: "#F2F2F2",
    danger: "#E25858",
  },
  font: {
    family: {
      InterRegular: "Inter_400Regular",
      InterBold: "Inter_700Bold",
    },
    size: {
      small: 12,
      medium: 14,
      large: 16,
    },
    lineHeight: "140%",
  },
};

export type ThemeType = typeof theme;
export type ColorsType = keyof typeof theme.colors;
export type FontSizeType = keyof typeof theme.font.size;
export type FontFamilyType = keyof typeof theme.font.family;
