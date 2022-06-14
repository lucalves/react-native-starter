import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Button from "../../components/Button"
import InputTextField from "../../components/InputTextField";
import { ScreenProps } from "../../routes";

type Props = NativeStackScreenProps<ScreenProps, 'LoginScreen'>;

export default ({ navigation }: Props) => {

    const navigate = () => {
        navigation.navigate('RecoverPasswordScreen');
    }

    return(
        <View style={styles.mainContainer}>
            <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Login</Text>

            <View>
                <InputTextField />
                <InputTextField />
            </View>

            <Button title='Recuperar senha' onPress={navigate}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'space-around',
        maxHeight: '60%'

    }
})