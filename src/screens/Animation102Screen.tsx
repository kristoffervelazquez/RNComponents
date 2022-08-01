import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Animation102Screen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpuleBox}/>
        </View>
    )
}

export default Animation102Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpuleBox: {
        backgroundColor: 'red',
        width: 150,
        height: 150
    }
})