import { useRef } from 'react'
import { Animated, Easing } from 'react-native'


export const useFade = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const top = useRef(new Animated.Value(-100)).current;


    const fadeIn = (callback?: Function) => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(() => callback ? callback() : null)


        Animated.timing(top, {
            toValue: 0,
            useNativeDriver: true,
            duration: 700,
            easing: Easing.bounce
        }).start()
    }


    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

    return { fadeIn, fadeOut, opacity, top }

}
