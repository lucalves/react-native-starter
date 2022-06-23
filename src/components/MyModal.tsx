import React, {useState} from 'react';
import {
  Modal,
  ModalProps,
  StyleSheet,
  Text,
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
              A senha foi enviada para o seu e-mail.
            </Text>
          ) : (
            <>
              <Text style={styles.titleText}>{modalText}</Text>
              <MyTextInput />
              <View style={styles.buttonsContainer}>
                <MyButton
                  style={{marginRight: 5}}
                  onPress={handleSendMail}
                  title="Enviar"
                />
                <MyButton onPress={closeFunction} title="Fechar" />
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
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
