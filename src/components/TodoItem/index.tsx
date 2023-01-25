import React from "react";
import { Pressable, Text, View } from "react-native";
import CheckIcon from "../../assets/icons/check.svg";
import TrashIcon from "../../assets/icons/trash.svg";
import { TodoItemType } from "../../screens/Home";
import { theme } from "../../styles/theme";

import { styles } from "./styles";

type Props = {
  todo: TodoItemType;
  onFinishTodo: () => void;
  onRemoveTodo: () => void;
};

const TodoItem = ({ todo, onFinishTodo, onRemoveTodo }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: todo.finished
              ? pressed
                ? theme.colors.purple
                : theme.colors.purpleDark
              : pressed
              ? `${theme.colors.blueDark}33`
              : "transparent",
            borderColor: todo.finished
              ? pressed
                ? theme.colors.purple
                : theme.colors.purpleDark
              : pressed
              ? theme.colors.blueDark
              : theme.colors.blue,
          },
          styles.todoItemCheck,
        ]}
        onPress={onFinishTodo}
      >
        {todo.finished && <CheckIcon />}
      </Pressable>
      <Text
        style={[
          {
            textDecorationLine: todo.finished ? "line-through" : undefined,
            color: todo.finished ? theme.colors.gray300 : theme.colors.gray100,
          },
          styles.todoItemText,
        ]}
      >
        {todo.activity}
      </Text>
      <Pressable style={styles.todoItemButton} onPress={onRemoveTodo}>
        {({ pressed }) => (
          <TrashIcon
            fill={pressed ? theme.colors.danger : theme.colors.gray300}
          />
        )}
      </Pressable>
    </View>
  );
};

export default TodoItem;
