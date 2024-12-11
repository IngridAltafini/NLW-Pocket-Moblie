import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  logo: {
    height: 48,
    width: 48,
    marginTop: 24,
    marginBottom: 28,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: colors.gray[600],
  },
  subtitle: {
    marginTop: 12,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[500],
  }
})