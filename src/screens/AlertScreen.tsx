import { View, Text, Alert, Button } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'

const AlertScreen = () => {

    const createButtonAlert = () => {
        Alert.alert('Alerta', 'Hola mundo',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'default'
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                }
            ]
        )
    }

    return (
        <View>
            <HeaderTitle title='Alert Screen' />
            <Button title='Two button alert' onPress={createButtonAlert} />

        </View>
    )
}

export default AlertScreen