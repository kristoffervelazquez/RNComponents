import { View, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PullToRefresh = () => {

    const { top } = useSafeAreaInsets()
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [data, setData] = useState<string>();


    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            console.log('terminamos');
            setIsRefreshing(false);
            setData('Hola Mundo');
        }, 1500)
    }

    return (
        <ScrollView
            style={{ marginTop: isRefreshing ? top : 0 }}
            // RefreshControll (Top spinner)
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor='#5856D6'
                    colors={['white', 'red', 'orange']}
                    // style={{ backgroundColor: '#5856D6' }}
                    // tintColor='white'
                    // title='Refreshing'
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