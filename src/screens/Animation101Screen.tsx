import { Animated, Button, StyleSheet, View } from 'react-native'
import React, { useRef } from 'react'
import { useFade } from '../hooks/useFade';

const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, top } = useFade()

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpuleBox, opacity, transform: [{
                    translateY: top
                }]
            }} />
            <Button title='Fade In' onPress={() => fadeIn()} />
            <Button title='Fade out' onPress={() => fadeOut()} />

        </View>
    )
}

export default Animation101Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpuleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
        marginBottom: 20,


    }
})