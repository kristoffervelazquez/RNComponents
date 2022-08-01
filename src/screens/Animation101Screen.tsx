import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Animation101Screen = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.purpuleBox}/>
        </View>
    )
}

export default Animation101Screen

const styles = StyleSheet.create({
    purpuleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
})