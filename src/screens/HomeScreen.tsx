import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface MenuItem {
    name: string
    icon: string
    component: string
}


const menuItem: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },
]



const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const renderMenuItem = ({ component, icon, name }: MenuItem) => {
        return (

            <View>
                <Text>{name} - {icon}</Text>
            </View>
        )
    }

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 10, marginBottom: 20 }}>
                <Text style={styles.title}>Opciones de Menú</Text>
            </View>
        )
    }


    const renderItemSeparator = () => {
        return (
            <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}}/>

        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItem}
                renderItem={({ item }) => renderMenuItem(item)}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </View>
    )
}

export default HomeScreen