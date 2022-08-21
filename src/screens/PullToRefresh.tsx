import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

const PullToRefresh = () => {

    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('terminamos');
            setRefreshing(false);
        }, 1500)
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={false}
                    onRefresh={onRefresh}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />
            </View>
        </ScrollView>
    )
}

export default PullToRefresh