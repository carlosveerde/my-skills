import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill, skillKey}) {
  return (
    <TouchableOpacity style={styles.skillButton} key={skillKey++}>
      <Text style={styles.skillButtonText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
