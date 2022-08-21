import { View, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

const PullToRefresh = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();


    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('terminamos');
            setRefreshing(false);
            setData('Hola Mundo');
        }, 1500)
    }

    return (
        <ScrollView
            // RefreshControll (Top spinner)
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor='#5856D6'
                    colors={['white', 'red', 'orange'] }
                    style={{backgroundColor: '#5856D6'}}
                    tintColor='white'
                    title='Refreshing'
                />
            }
        >
            <View style={styles.globalMargin}>
                
                <HeaderTitle title='Pull to refresh' />
                {
                    data && <HeaderTitle title={data} />
                }

            </View>
        </ScrollView>
    )
}

export default PullToRefresh