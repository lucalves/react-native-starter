import * as React from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line react/prop-types
export default ({ route }) => {

    // eslint-disable-next-line react/prop-types
    const { id } = route.params;

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',  flex: 1 }}>
            <Text>Profile - id {id}</Text>
        </View>
    );
}