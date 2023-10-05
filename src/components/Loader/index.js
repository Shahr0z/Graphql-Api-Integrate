import { View, ActivityIndicator, } from 'react-native'
import React from 'react'
import { Colors } from '../../theme/Colors'

const Loader = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} color={Colors.purple} />
    </View>
)

export default Loader