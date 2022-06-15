import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Button from "../../components/Button"
import InputTextField from "../../components/InputTextField";
import Modal from "../../components/Modal";
import { ScreenProps } from "../../routes";

type Props = NativeStackScreenProps<ScreenProps, 'LoginScreen'>;

export default ({ navigation }: Props) => {

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    }


    return (         
        <View style={styles.mainContainer}>
            <Modal closeFunction={closeModal} visible={modalVisible} modalText='Insira seu email para recuperação da senha:' />
            <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Login</Text>
            <View>
                <InputTextField />
                <InputTextField />
            </View>

            <Button title='Recuperar senha' isPositiveAction onPress={() => setModalVisible(true)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    
})