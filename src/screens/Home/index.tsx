import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { v4 as uuidv4 } from "uuid";

import FileIcon from "../../assets/icons/file.svg";
import LogoIcon from "../../assets/icons/logo.svg";
import PlusCircleIcon from "../../assets/icons/plusCircle.svg";

import TodoItem from "../../components/TodoItem";
import TodoListHeader from "../../components/TodoListHeader";
import { theme } from "../../styles/theme";

import { styles } from "./styles";

export type TodoItemType = { id: string; activity: string; finished: boolean };

export const Home = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  const handleAddTodo = () => {
    if (!todo) return;

    setTodoList((prev) => [
      ...prev,
      { id: uuidv4(), activity: todo, finished: false },
    ]);
    setTodo("");
  };

  const handleRemoveTodo = (item: TodoItemType) => {
    Alert.alert(
      "Remover tarefa",
      `Ao concordar você removerá a tarefa:\n\n${item.activity}?`,
      [
        { text: "Não" },
        {
          text: "Sim",
          onPress: () =>
            setTodoList((prev) => prev.filter((todo) => todo.id !== item.id)),
          style: "destructive",
        },
      ],
      { cancelable: true },
    );
  };

  const finishedTodos = () => {
    return todoList.filter((todo) => todo.finished).length.toString();
  };

  const notFinishedTodos = () => {
    return todoList.filter((todo) => !todo.finished).length.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon />
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor: inputFocused
                  ? theme.colors.purpleDark
                  : "transparent",
              },
              styles.input,
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.gray300}
            value={todo}
            onChangeText={setTodo}
            autoCapitalize="sentences"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? theme.colors.blueDark
                  : theme.colors.blue,
              },
              styles.inputButton,
            ]}
            onPress={handleAddTodo}
          >
            <PlusCircleIcon />
          </Pressable>
        </View>
        <TodoListHeader
          finishedTodos={finishedTodos()}
          notFinishedTodos={notFinishedTodos()}
        />
        <FlatList
          data={todoList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onFinishTodo={() =>
                setTodoList((prev) =>
                  prev.map((todo) =>
                    todo.id === item.id
                      ? { ...todo, finished: !todo.finished }
                      : todo,
                  ),
                )
              }
              onRemoveTodo={() => handleRemoveTodo(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyStateContainer}>
              <FileIcon />
              <Text style={styles.emptyStateText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyStateTextDescription}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
