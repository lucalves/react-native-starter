import React, {useState} from 'react';
import {
  Alert,
  Modal,
  ModalProps,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyButton} from './MyButton';
import {MyTextInput} from './MyTextInput';

interface Props extends ModalProps {
  closeFunction: () => void;
  modalText: string;
}

export default ({modalText, closeFunction, ...rest}: Props) => {
  const [sent, setSent] = useState<boolean>(false);

  const handleSendMail = () => {
    setSent(true);
  };

  return (
    <Modal
      {...rest}
      animationType="fade"
      transparent
      onRequestClose={closeFunction}>
      <TouchableOpacity style={styles.modalContainer} onPress={closeFunction}>
        <View style={styles.modalContent}>
          {sent ? (
            <Text style={styles.passwordSent}>
              The password has been sent to your email.
            </Text>
          ) : (
            <>
              <Text style={styles.titleText}>{modalText}</Text>
              <MyTextInput />
              <View style={styles.buttonsContainer}>
                <MyButton onPress={handleSendMail} title="Send" />
                <MyButton onPress={closeFunction} title="Close" />
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: 18,
    marginBottom: 10,
  },
  passwordSent: {
    fontSize: 15,
    textAlign: 'center',
  },
});
