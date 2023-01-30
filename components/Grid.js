import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Grid extends React.Component {
    render(){
        return(
            <View style={s.frame}>
                <Text></Text>
            </View>
        );
    }
}

const s=StyleSheet.create({
    frame: {
        aspectRatio: 1,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: 2,
        margin: 20,
    }
});