import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'

const CustomHeader = (title) => {
    return (
        <View style={styles.Main_Container}>
            <Text style={styles.Header_Text}>{'Checkins' || title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Main_Container: {
        backgroundColor: Colors.white,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Header_Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black
    }
})

export default CustomHeader