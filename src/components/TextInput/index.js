import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({ props, inputRef, placeholder, onChangeText }) => {
    return (
        <TextInput
            ref={inputRef}
            style={styles.textinput}
            inputMode='text'
            placeholder={placeholder ?? 'Enter Place Holder'}
            placeholderTextColor="#A7A7A7"
            onChangeText={onChangeText}
            autoCorrect={false}
            {...props}
        />
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textinput: {
        width: '100%',
        height: 55,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: '5%',
        marginBottom: '5%',
        color: '#000'
    },
})