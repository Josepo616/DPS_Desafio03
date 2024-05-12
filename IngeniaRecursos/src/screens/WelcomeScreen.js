import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const goToRecursosScreen = () => {
    navigation.navigate('recursos'); // Nombre de la pantalla de recursos en tu navegación
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
    backgroundColor: '#fff', // Fondo blanco
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Color del texto
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2ecc71', // Color de fondo del botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
