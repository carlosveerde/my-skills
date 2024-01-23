import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Carlos!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Adicionar habilidade</Text>
      </TouchableOpacity>
      <Text style={[styles.text, {marginTop: 50}]}>{newSkill}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    backgroundColor: '#121015',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    width: '100%',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
