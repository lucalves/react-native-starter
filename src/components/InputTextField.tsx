import React from "react"
import { StyleSheet, TextInput, TextInputProps } from "react-native"

export default (rest : TextInputProps) => {
    return(
        <TextInput { ...rest } style={styles.InputField}/>
    )
}

const styles = StyleSheet.create({
    InputField: {
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: 'white'
    },
})