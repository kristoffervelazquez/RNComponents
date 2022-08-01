import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Animation102Screen = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.purpuleBox}/>
        </View>
    )
}

export default Animation102Screen;

const styles = StyleSheet.create({
    purpuleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
})