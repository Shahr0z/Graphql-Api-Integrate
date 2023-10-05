import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const HandleError = ({ error }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: '5%' }}>
        <Text style={{ color: Colors.red, fontSize: 20 }} >{error?.message}</Text>
    </View>
)

export default HandleError