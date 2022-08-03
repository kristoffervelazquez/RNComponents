import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import React, { useRef } from 'react'
import { useAnimation } from '../hooks/useAnimation';

const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, postion, startMovingPosition } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpuleBox, opacity, transform: [{
                    translateY: postion
                }]
            }} />
            <Button title='Fade In' onPress={() => { fadeIn(); startMovingPosition(-100, Easing.circle) }} />
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