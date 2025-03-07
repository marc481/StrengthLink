export const COLORS = {
  // Backgrounds
  background: "#F9EBD7", // Beige for app background
  headerBackground: "#002B5B", // Dark blue for headers
  footerBackground: "#002B5B", // Dark blue for footer navigation

  // Text
  headerText: "#F9EBD7", // White for header text
  bodyText: "#003049", //
  mutedText: "#5F5F5F", // Grey for secondary text
  infoHighlight: "#4A90E2", // Light blue for highlighted info text

  // Buttons
  buttonBackground: "#669BBC", // Light blue for buttons
  buttonText: "#FFFFFF", // White for button text
  buttonDangerBackground: "#DC3545", // RED for delete buttons
  buttonDangerText: "#FFFFFF", // White text for delete buttons
  error: "#DC3545", //  RED (keep it consistent)

  // Footer Tabs
  footerActiveText: "#FFFFFF", // White for active tab
  footerInactiveText: "#A1C4E6", // Light blue for inactive tab

  // Input Fields
  inputBackground: "#FFFFFF", // White for input fields
  inputBorder: "#CCCCCC", // Light grey for input borders
  inputText: "#000000", // Black for input text

  // Borders and Dividers
  divider: "#DADADA", // Light grey for dividers
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
  bold: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.bodyText,
  },
  infoHighlight: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.infoHighlight,
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
  extraLarge: 32,
};

export const STYLES = {
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  infoTray: {
    gap: SPACING.small,
    padding: SPACING.medium,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  boldText: {
    ...FONTS.bold,
  },
  mutedText: {
    ...FONTS.muted,
  },
  buttonTray: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SPACING.small,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: SPACING.small,
  },
};
