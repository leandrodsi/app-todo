import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray700,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -27,
  },
  input: {
    flex: 1,
    height: 54,
    color: theme.colors.gray100,
    backgroundColor: theme.colors.gray500,
    borderRadius: 6,
    marginRight: 4,
    padding: 16,
  },
  inputButton: {
    height: 54,
    width: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  emptyStateContainer: {
    alignItems: "center",
    marginTop: 48,
  },
  emptyStateText: {
    color: theme.colors.gray300,
    fontFamily: theme.font.family.InterBold,
    marginTop: 16,
  },
  emptyStateTextDescription: {
    color: theme.colors.gray300,
    fontFamily: theme.font.family.InterRegular,
  },
});
