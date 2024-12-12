import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    height: 4,
    width: 80,
    backgroundColor: colors.gray[300],
  },
  title: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[600],
    marginBottom: 16,
  }
})