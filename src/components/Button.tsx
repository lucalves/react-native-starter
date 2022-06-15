import React from "react"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface Props extends TouchableOpacityProps {
    title: string,
    isPositiveAction: boolean
}

export default ({ title, isPositiveAction, ...rest }: Props) => {
    
    if (!isPositiveAction) {
        return (
            <TouchableOpacity { ...rest } style={[styles.buttonContainer, styles.buttonBgRed]}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity { ...rest } style={[styles.buttonContainer, styles.buttonBgBlue]}>
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
    },
    buttonBgRed: {
        backgroundColor: '#e24a4a'
    },
    buttonBgBlue: {
        backgroundColor: '#0a41d8'
    },
})