import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    backgroundColor: theme.colors.gray500,
    borderRadius: 8,
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 8,
    marginBottom: 8,
  },
  todoItemCheck: {
    width: 17,
    height: 17,
    borderRadius: 9,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  todoItemText: {
    flex: 1,
    color: theme.colors.gray100,
    fontSize: theme.font.size.medium,
    marginHorizontal: 8,
  },
  todoItemButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
