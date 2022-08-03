import { StyleSheet, View, Animated, PanResponder } from 'react-native';
import React, { useRef } from 'react'

const Animation102Screen = () => {


    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y,
            },
        ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }
            ).start();
        },
    });


    return (
        <View style={styles.container}>
            <Animated.View {...panResponder.panHandlers} style={[styles.purpuleBox, pan.getLayout()]} />
        </View>
    )
}

export default Animation102Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpuleBox: {
        backgroundColor: 'red',
        width: 150,
        height: 150,
        borderRadius: 10
    }
})