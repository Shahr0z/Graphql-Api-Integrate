import { StyleSheet, View } from 'react-native'
import React from 'react'
import { CustomHeader } from '../../components'
import TopTabs from '../../routes/TopTab'

const Home = () => {
    return (
        <View style={styles.main_container}>
            <CustomHeader />
            <TopTabs />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    main_container: { flex: 1 }
})