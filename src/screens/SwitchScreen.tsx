import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);



    return (
        <View style={{ marginHorizontal: 20}}>
            <HeaderTitle title='Switches' />
            <Switch
                trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
                thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default SwitchScreen

const styles = StyleSheet.create({})