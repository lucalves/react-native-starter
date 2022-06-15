import React from 'react';
import { useState } from "react"
import { StyleSheet, TextInput } from "react-native"

export default () => {

    const [email, setEmail] = useState('');
    return (
        <TextInput
            onChangeText={setEmail}
            style={styles.inputStyle}
        />
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: '#006eff7f',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        marginVertical: 12
    }
})