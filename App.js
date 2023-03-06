import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        const newTodo = { text: inputValue, completed: false};
        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const toggleCompleted = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newtodos = [...todos];
        newtodos.splice(index, 1);
        setTodos(newTodos);
    };

    const renderItem = ({ item, index }) => {
        const buttonTitle = item.completed ? 'Incomplete' : 'Complete';
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.text}</Text>
                <Button title={buttonTitle} onPress={() => toggleCompleted(index)} />
            </View>
        );
    };


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeHolder="Add todo"
                />
                <Button title="Add" onPress={addTodo} />
                <FlatList
                    data={todos}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
    itemContainer: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        // Add any additional styling for the content inside the container here
    },
});


export default App;
