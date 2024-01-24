/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

type SkillData = {
  id: string;
  name: string;
};

export function Home() {
  // States
  const [newSkill, setNewSkill] = useState(''); // newSkill is the value of the input, setNewSkill is the function to change the value of newSkill as the user inputs.
  const [mySkills, setMySkills] = useState<SkillData[]>([]); // mySkills is the array of skills, setMySkills is the function to change the value of mySkills as the user adds a new skill.
  const [greeting, setGreeting] = useState(''); // greeting is the value of the greeting text, setGreeting is the function to change the value of greeting.
  // Functions
  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()), // Creates a unique id for each skill.
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]); // The spread operator is used to add the newSkill to the mySkills array. Also coud be used: setMySkills(anything => [...anything, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours(); // Gets the current hour.
    if (currentHour < 12) {
      setGreeting('Good morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good night!');
    }
  }, []); // This useEffect is used to change the greeting text according to the time of the day.

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Carlos!</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button title={'Add'} onPress={handleAddNewSkill} activeOpacity={0.7} />
      <Text style={[styles.text, {marginTop: 40, marginBottom: 10}]}>
        My Skills
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SkillCard skill={item.name} />}
      />
    </View>
  );
}
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: '#121015',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    width: '100%',
    height: 60,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
