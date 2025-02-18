import React,{useState} from 'react';
import {View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, StyleSheet} from 'react-native';

const App = () => {
  const [text, setText] = useState('';
    const [items,setItems] = useState([
      { id: '1', name: 'Item 1'},
      { id: '2', name: 'Item 2'},
      { id: '3', name: 'Item 3'},
    ]);

    const handlePresd = () => {
      alert ('Botão pressionado!');
    };

    const addItem = () => {
      stItems ([...items, { id: Date.now(), name: text}]);
      setText('');
    };

    return (
      <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
        source={{ uri: 'https;//reactive.dev/img/react_native_logo.png'}}
        style={styles.image}
        />
    
    <TextInput 
    styl={styles.title}>Exemplo de App React Native</TextInput></TextInput>
     </View>
     
    <TextInputstyle={styles.input}
    placeholder="Digite algo"
    value={text}
    onChangeText={setText}
    />

    <Button title="Adicionar Item" onPress={addItem}

    <FlatList
    data={items}
    renderItem={ ({item}) =>  (
      <View style={StyleSheet.item}>
        <Text>{item.name}</Text>
      </View>
    )}
  keyExtractor={(item) => item.id}
  />
  <Touchableopacity style={styles.button}onPress={handlePress}></Touchableopacity>
   </ScrollView>
   
  );
};

const styles =StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
  },
  header: 
  alignItems: 'center'
marginBottom:20,
},
})