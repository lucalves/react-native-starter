import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

export default ({ description }) => {
    return (
        <ScrollView>
            <Text style={style.descriptionTitle}>Descrição: </Text>
            <Text style={style.descriptionContent}>{ description }</Text>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    descriptionTitle: {
        fontSize: 18,
        color: 'white',
        marginTop: '10%',
        marginBottom: '7%',
    },
    descriptionContent: {
        fontSize: 15,
        color: 'white',
    },
})