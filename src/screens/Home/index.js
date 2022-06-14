import React from 'react';
import { View, Text, Button } from 'react-native';

export default () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',  flex: 1 }}>
            <Text>Home</Text>
            <Button 
                title='Profile'
            />
            <Button 
                title='Another Screen'
            />
        </View>
    );
}