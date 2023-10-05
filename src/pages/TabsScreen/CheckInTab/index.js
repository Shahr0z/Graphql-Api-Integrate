import { View, FlatList, RefreshControl } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useQuery } from '@apollo/client';
import { My_Query } from '../../../apis';
import { CardView, HandleError, Loader } from '../../../components';

const CheckInTab = () => {
    const [refreshing, setRefreshing] = useState(false);
    const { loading, error, data, refetch } = useQuery(My_Query);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch()
            .then(() => setRefreshing(false))
            .catch(() => setRefreshing(false));
    }, [refetch]);
    console.log('line 10 ==>', data);
    const check_in = data?.check_in || [];
    if (loading) { return <Loader /> }
    if (error) { return <HandleError error={error} /> }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={check_in}
                renderItem={({ item }) => <CardView item={item} />}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    )
}

export default CheckInTab