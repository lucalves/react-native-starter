import React from "react"
import { Alert, Modal, ModalProps, StyleSheet, Text, TextInput, View } from "react-native"
import Button from "./Button";
import InputTextField from "./InputTextField";
import ModalInputTextField from "./ModalInputTextField";

interface Props extends ModalProps {
    closeFunction: () => void;
    modalText: string;
}

export default ({ modalText, closeFunction,  ...rest }: Props) => {
    return (
        <Modal
            { ...rest }
            animationType='fade'
            transparent
            onRequestClose={() => {
                console.log('closed')
            }}
            style={styles.modalStyles}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalStyles}>
                    <Text>{modalText}</Text>
                    <ModalInputTextField />
                    <View style={styles.modalButtonsView}>
                        <View style={styles.eachButtonView}>
                            <Button title="Voltar" isPositiveAction={false} onPress={closeFunction} />
                        </View>
                        <View style={styles.eachButtonView}>
                            <Button title="Enviar" isPositiveAction/>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalStyles: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        width: '90%'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    eachButtonView: {
        width: '50%'
    }
})