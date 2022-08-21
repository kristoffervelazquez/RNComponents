import { View, FlatList } from 'react-native';
import React from 'react'
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItem } from '../data/MenuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';


const HomeScreen = () => {   

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItem}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={<HeaderTitle title='Opciones de Menú' />}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>

    )
}




export default HomeScreen;