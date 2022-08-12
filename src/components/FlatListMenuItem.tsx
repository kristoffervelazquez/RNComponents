import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


interface Props {
    menuItem: MenuItem
}

const FlatListMenuItem = ({ menuItem: { component, icon, name } }: Props) => {

    const navigation = useNavigation()


    return (
        <TouchableOpacity activeOpacity={0.6} onPress={({ }) => navigation.navigate(component as any)}>
            <View style={styles.container}>
                <Icon name={icon} color='#5856d6' size={23} />
                <Text style={styles.itemText}>{name}</Text>

                <View style={{ flex: 1 }} />
                <Icon name='chevron-forward-outline' style={styles.arrow} color='#5856d6' size={23} />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    },
    arrow: {
        justifyContent: 'flex-end'
    }
})

export default FlatListMenuItem