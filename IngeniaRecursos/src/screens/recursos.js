import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Modal, Linking, TextInput } from 'react-native';

const RecursosScreen = () => {
  const [recursos, setRecursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecurso, setSelectedRecurso] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRecursos();
  }, []);

  const fetchRecursos = async () => {
    try {
      const response = await fetch('https://6538370fa543859d1bb150ca.mockapi.io/api/example/Material');
      const data = await response.json();
      setRecursos(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const renderRecursosItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => openModal(item)}>
      <Text style={styles.itemTitle}>{item.titulo}</Text>
      <Text style={styles.itemDescription}>{item.descripcion}</Text>
    </TouchableOpacity>
  );

  const openModal = (item) => {
    setSelectedRecurso(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedRecurso(null);
    setModalVisible(false);
  };

  const handleGoToRecurso = () => {
    Linking.openURL(selectedRecurso.enlace);
    setModalVisible(false);
  };

  const filteredRecursos = recursos.filter((recurso) =>
    recurso.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar recursos..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Text style={styles.title}>Recursos Disponibles</Text>
      <Text style={styles.subtitle}>En este apartado puedes encontrar diferentes libros, cursos y artículos relacionados a la Ingeniería en sistemas.</Text>
      <FlatList
        data={filteredRecursos}
        renderItem={renderRecursosItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedRecurso ? selectedRecurso.titulo : ''}</Text>
            <Text style={styles.modalDescription}>{selectedRecurso ? selectedRecurso.descripcion : ''}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.buttonText}>Cerrar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleGoToRecurso}>
                <Text style={styles.buttonText}>Ir al Recurso</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CB7F2',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#DEF7FF',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  itemDescription: {
    fontSize: 16,
    textAlign: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
     paddingHorizontal: 15,
  },
  modalContent: {
    backgroundColor: '#DEF7FF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#0CB7F2',
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

export default RecursosScreen;
