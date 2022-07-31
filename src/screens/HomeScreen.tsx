import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


interface MenuItem {
    name: string
    icon: string
    component: string
}


const menuItem: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube outline',
        component: 'Animation101Screen'
    }
]



const HomeScreen = () => {

    const renderMenuItem = ({ component, icon, name }: MenuItem) => {
        return (

            <View>
                <Text>{name} - {icon}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={menuItem}
                renderItem={({ item }) => renderMenuItem(item)}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

export default HomeScreen