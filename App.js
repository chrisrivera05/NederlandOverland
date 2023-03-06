import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        setTodoList([...todoList, {text: inputValue}]);
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

    const renderItem = ({ item }) => {
        const containerStyle = item.completed ? styles.completedItemContainer : styles.itemContainer;
        return (
            <View style={containerStyle}>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        );
    };


    return (
        <SafeAreaView>
            <View>
                <TextInput
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Add a todo"
                />
                <Button title="Add" onPress={addTodo} />
                {todoList.map((todo, index) => (
                    <View key={index} style={todo.completed ? styles.completed : styles.incomplete}>
                        <Text style={styles.text}>{todo.text}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Button title='Complete' onPress={() => completeTodo(index)} />
                            <Button title='Delete' onPress={() => deleteTodo(index)} />
                        </View>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = {
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        padding: 20,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    completed: {
        backgroundColor: 'gainsboro',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        padding: 20,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    incomplete: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        padding: 20,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        fontSize: 20,
    },
    content: {
        // Add any additional styling for the content inside the container here
    },
};


export default App;
