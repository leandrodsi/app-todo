import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  finishedTodos: string;
  notFinishedTodos: string;
};

const TodoListHeader = ({ finishedTodos, notFinishedTodos }: Props) => {
  return (
    <View style={styles.todoListHeader}>
      <View style={styles.todoListHeaderItem}>
        <Text
          style={[styles.todoListHeaderText, styles.todoListHeaderTextLeft]}
        >
          Criadas
        </Text>
        <View style={styles.amountContainer}>
          <Text style={styles.todoListHeaderAmount}>{notFinishedTodos}</Text>
        </View>
      </View>
      <View style={styles.todoListHeaderItem}>
        <Text
          style={[styles.todoListHeaderText, styles.todoListHeaderTextRight]}
        >
          Concluídas
        </Text>
        <View style={styles.amountContainer}>
          <Text style={styles.todoListHeaderAmount}>{finishedTodos}</Text>
        </View>
      </View>
    </View>
  );
};

export default TodoListHeader;
