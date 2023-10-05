import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'

const CustomButton = ({ Title }) => {
    return (
        <View style={styles.Main_View}>
            <Text style={styles.Text_View}>{Title}</Text>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    Main_View: { backgroundColor: Colors.purple, padding: '5%', width: '100%', alignItems: 'center', borderRadius: 10 },
    Text_View: { color: Colors.white }
})