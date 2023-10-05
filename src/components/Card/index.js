import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment';
import { Colors } from '../../theme/Colors';

const CardView = ({ item }) => {

    const originalDate = item?.created_at;
    const formattedDate = moment(originalDate).format('Do [of] MMMM YYYY');

    return (
        <View style={styles.MainView}>
            {item?.image_url &&
                <View style={styles.ImageView}>
                    <Image source={{ uri: item?.image_url }} style={styles.ImageStyle} resizeMode='cover' />
                </View>}
            <View style={styles.TextView}>
                <View style={styles.Avatar}>
                    <Ionicons name="people" size={20} color={'white'} />
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={styles.DescText} >{item?.name}</Text>
                    <Text style={styles.DescText} >{formattedDate}</Text>
                </View>
            </View>
            <View style={styles.ComArea}>
                {item?.comment ? <Text style={styles.DescText} numberOfLines={3} >{item?.comment}</Text> : <Text style={styles.DescText}>Lorem ipsum dolor is the dummy text</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainView: { flex: 1, backgroundColor: Colors.white, marginHorizontal: '5%', marginVertical: '3%', borderRadius: 10 },
    ImageView: { alignItems: 'center', height: 140, width: '100%', marginTop: '2%' },
    ImageStyle: { flex: 1, height: '50%', width: '90%', borderRadius: 6, overflow: 'hidden' },
    TextView: { flexDirection: 'row', marginTop: '2%', marginHorizontal: '5%' },
    Avatar: { backgroundColor: 'lightgrey', padding: 6, borderRadius: 8, marginRight: '2%' },
    DescText: { color: Colors.black, fontSize: 14 },
    ComArea: { marginHorizontal: '5%', marginVertical: '2%' }
})

export default CardView