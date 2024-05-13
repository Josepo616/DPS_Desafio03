import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const goToRecursosScreen = () => {
    navigation.navigate('recursos'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a IngeniaRecursos!</Text>
      <Text style={styles.subtitle}>Tu plataforma para acceder a recursos de aprendizaje de ingeniería de sistemas.</Text>
      <TouchableOpacity onPress={goToRecursosScreen} style={styles.button}>
        <Text style={styles.buttonText}>Explorar Recursos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0CB7F2', 
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000', 
    marginBottom: 30,
    textAlign: 'center', 
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#DEF7FF', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
