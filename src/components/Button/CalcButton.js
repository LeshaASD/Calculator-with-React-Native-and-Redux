import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const CalcButton = props => {
    return (
        <TouchableOpacity style={props.style ? {
            height: '20%',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: .3,
            borderColor: '#b1423f',
            }
            : styles.inputButton} onPress={props.press}>
            <View name={props.operator}>
                <Text style={styles.inputText} >{props.operator}</Text>
            </View>
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create ({
    inputButton: {
        height: '20%',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .3,
        borderColor: '#b1423f'
    },
    inputText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
});