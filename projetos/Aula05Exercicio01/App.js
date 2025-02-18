import React, {useState}  from 'react';
import{ View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import logo ftom './assets/Nativelogo.png';
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

    const lidarComClique = ()=> {
      if (nome){
        setMensagem('Olá, ${nome}!');
           }
    };

       return (
      <ScrollView style={styles.container}>
       <View View style={styles.view}>
          <Image 
          source={{ uri: 'logo' }}
          style= {styles.logo}
          />
        <Text style={styles.text}>
        Exemplo de elementos gráficos intrativos em React Native
        </Text>
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholeder="Digite seu nome"
          onChangeText={setNome}
          value={nome}
          />
          <Button title="Enviar" onPress={lidarComClique} />
        </View>

        {mensagem ? (
          <View style= {styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
          </View>
        ) : null}

        <TouchableOpaCity style={styles.button} onPress={() => {}}>
         <Text style={styles.buttonText}>Botão customizado</Text>
         </TouchableOpaCity>
         </ScrollView>
 );
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view :{
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 10, marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10
},
messageContainer: {
  marginBottom: 20,
},
message: {
  fontSize: 16,
},
button: {
  backgroundColor: 'blue',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default App;

