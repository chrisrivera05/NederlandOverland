import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const TodoListScreen = () => {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        const newTodo = { text: inputValue };
        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const completeTodo = index => {
        const newTodoList = [...todoList];
        newTodoList[index] = {
            ...newTodoList[index],
            completed: true,
        };
        setTodoList(newTodoList);
    }

    const deleteTodo = index => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Add a todo"
                />
                <Button title="Add" onPress={addTodo} />
                {todoList.map((todo, index) => (
                    <View key={index}>
                        <Text>{todo.text}</Text>
                        <Button title='Complete' onPress={() => completeTodo(index)} />
                        <Button title='Delete' onPress={() => deleteTodo(index)} />
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
});

export default TodoListScreen;
