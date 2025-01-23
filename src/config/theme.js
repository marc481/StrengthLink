export const COLORS = {
  // Backgrounds
  background: "#F9EBD7", // Beige for app background
  headerBackground: "#002B5B", // Dark blue for headers
  footerBackground: "#002B5B", // Dark blue for footer navigation

  // Text
  headerText: "#FFFFFF", // White for header text
  bodyText: "#000000", // Black for general text
  mutedText: "#5F5F5F", // Grey for secondary text

  // Buttons
  buttonBackground: "#4A90E2", // Light blue for buttons
  buttonText: "#FFFFFF", // White for button text

  // Footer Tabs
  footerActiveText: "#FFFFFF", // White for active tab
  footerInactiveText: "#A1C4E6", // Light blue for inactive tab

  // Input Fields
  inputBackground: "#FFFFFF", // White for input fields
  inputBorder: "#CCCCCC", // Light grey for input borders
  inputText: "#000000", // Black for input text
};

export const FONTS = {
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.headerText,
  },
  body: {
    fontSize: 16,
    fontWeight: "normal",
    color: COLORS.bodyText,
  },
  muted: {
    fontSize: 14,
    fontWeight: "normal",
    color: COLORS.mutedText,
  },
  button: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.buttonText,
  },
  footer: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.footerActiveText,
  },
};

export const SPACING = {
  small: 8,
  medium: 16,
  large: 24,
};
