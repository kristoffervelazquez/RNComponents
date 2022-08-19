import React from 'react'
import { View, Alert, Button } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import prompt from 'react-native-prompt-android';
import { styles } from '../theme/appTheme';

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

    const createPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alert Screen' />
            <Button title='Two button alert' onPress={createButtonAlert} />
            <Button title='Prompt' onPress={createPrompt} />
        </View>
    )
}

export default AlertScreen