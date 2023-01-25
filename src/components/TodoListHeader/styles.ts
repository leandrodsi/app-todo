import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  todoListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray500,
  },
  todoListHeaderItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoListHeaderText: {
    fontFamily: theme.font.family.InterBold,
  },
  amountContainer: {
    borderRadius: 20,
    backgroundColor: theme.colors.gray400,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingBottom: 2,
    marginLeft: 8,
  },
  todoListHeaderAmount: {
    fontFamily: theme.font.family.InterBold,
    fontSize: theme.font.size.small,
    color: theme.colors.gray200,
  },
  todoListHeaderTextLeft: {
    color: theme.colors.blue,
  },
  todoListHeaderTextRight: {
    color: theme.colors.purple,
  },
});
