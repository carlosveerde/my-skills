/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export function Home() {
  // States
  const [newSkill, setNewSkill] = useState(); // newSkill is the value of the input, setNewSkill is the function to change the value of newSkill as the user inputs.
  const [mySkills, setMySkills] = useState([]); // mySkills is the array of skills, setMySkills is the function to change the value of mySkills as the user adds a new skill.
  // Functions
  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]); // The spread operator is used to add the newSkill to the mySkills array. Also coud be used: setMySkills(anything => [...anything, newSkill]);
  }
  let skillKey = 0; // Used to give a unique key to each skill button.
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Carlos!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Add Skill</Text>
      </TouchableOpacity>
      <Text style={[styles.text, {marginTop: 50}]}>My Skills</Text>
      <ScrollView persistentScrollbar>
        {/* Map through the mySkills Array and render the button for each element */}
        {mySkills.map(skill => (
          <TouchableOpacity style={styles.skillButton} key={skillKey++}>
            <Text style={styles.skillButtonText}>{skill}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

// Styles
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
  skillButton: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  skillButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
