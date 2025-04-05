import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Text,
  Pressable,
  Keyboard,
} from 'react-native';
import HomeLayout from '../components/templates/HomeLayout';
import { useNavigation } from '@react-navigation/native';
import DiaryEditorBlock from '../components/molecules/DiaryEditorBlock';
import BottomActionBlock from '../components/molecules/BottomActionBlock';

const DiaryScreen = () => {
  const navigation = useNavigation();

  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handleToggleBold = () => setIsBold(!isBold);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const quotes = [
    { text: "Writing is the painting of the voice.", author: "Voltaire" },
    { text: "Fill your paper with the breathings of your heart.", author: "William Wordsworth" },
    { text: "The art of writing is the art of discovering what you believe.", author: "Gustave Flaubert" },
    { text: "Start writing, no matter what. The water does not flow until the faucet is turned on.", author: "Louis L’Amour" },
    { text: "You can make anything by writing.", author: "C.S. Lewis" },
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const handleExport = () => {
    console.log('Export diary:', text);
    setModalVisible(true);
  };

  return (
    <HomeLayout>
      <ScrollView contentContainerStyle={styles.content}>
        <DiaryEditorBlock
          text={text}
          onChangeText={setText}
          isBold={isBold}
          onToggleBold={handleToggleBold}
        />
        <BottomActionBlock
          onExport={handleExport}
          quoteText={randomQuote.text}
          author={randomQuote.author}
        />
      </ScrollView>

      {/* Modal Popup */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Success!</Text>
            <Text style={styles.modalText}>Your diary has been exported!</Text>
            <Pressable style={styles.okButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.okText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* FOOTER */}
      {!isKeyboardVisible && (
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/left.png')}
              style={styles.leftIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate('Weather')}>
            <Image
              source={require('../../assets/icons/wea.png')}
              style={styles.weatherIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate('Diary')}>
            <Image
              source={require('../../assets/icons/diary.png')}
              style={styles.diaryIcon}
            />
          </TouchableOpacity>
        </View>
      )}

    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    padding: 10,
  },
  leftIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  weatherIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  diaryIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
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
  okButton: {
    backgroundColor: '#7A3FFD',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  okText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DiaryScreen;