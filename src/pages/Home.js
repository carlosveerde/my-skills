/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

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
      <Button handle={handleAddNewSkill} />
      <Text style={[styles.text, {marginTop: 50}]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={() => skillKey++}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
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
});
