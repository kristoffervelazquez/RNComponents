import { View, FlatList } from 'react-native';
import React from 'react'
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItem } from '../data/MenuItems';
import HeaderTitle from '../components/HeaderTitle';


const HomeScreen = () => {

    const renderItemSeparator = () => {
        return (
            <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItem}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={<HeaderTitle title='Opciones de Menú' />}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </View>

    )
}




export default HomeScreen;