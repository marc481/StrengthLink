import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SPACING } from "../../../config/theme";

const ProfileItem = ({ label, value }) => {
  //View
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: SPACING.small,
  },
  label: {
    ...FONTS.bold,
  },
  value: {
    ...FONTS.body,
  },
});

export default ProfileItem;
