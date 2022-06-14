import React from "react"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface Props extends TouchableOpacityProps {
    title: string
}

export default ({ title, ...rest } : Props) => {
    return(
        <TouchableOpacity { ...rest } style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    buttonContainer: {
        backgroundColor: '#0a41d8',
        width: '80%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 20
    }
})