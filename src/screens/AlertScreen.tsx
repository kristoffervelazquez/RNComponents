import { View, Text, Alert, Button } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'

const AlertScreen = () => {

    const createButtonAlert = () => {
        Alert.alert('Titulo', 'Este es el mensaje de la alerta',
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
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('Dissmissed')
            }
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