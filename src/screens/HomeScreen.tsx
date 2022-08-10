import { View, Text, FlatList } from 'react-native';
import React from 'react'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItem } from '../data/MenuItems';


const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 10, marginBottom: 20 }}>
                <Text style={styles.title}>Opciones de Menú</Text>
            </View>
        )
    }

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
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </View>
    )
}




export default HomeScreen;