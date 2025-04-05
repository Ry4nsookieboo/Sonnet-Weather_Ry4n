import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Modal, View, Pressable } from 'react-native';

export default function ResetDiaryButton({ onClear }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    onClear();               // Lakuin aksi clear
    setModalVisible(false);  // Tutup modal
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Clear All</Text>
      </TouchableOpacity>

      {/* Modal Confirm */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Reset Diary</Text>
            <Text style={styles.modalText}>Are you sure you want to start a new diary entry?</Text>

            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Pressable style={[styles.modalButton, { backgroundColor: '#ccc' }]} onPress={() => setModalVisible(false)}>
                <Text style={{ color: '#333' }}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={handleConfirm}>
                <Text style={{ color: '#fff' }}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'violet',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7A3FFD',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#7A3FFD',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
});
