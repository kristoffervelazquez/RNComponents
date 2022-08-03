import { useRef } from 'react'
import { Animated, Easing, EasingFunction, EasingStatic } from 'react-native'


export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const postion = useRef(new Animated.Value(0)).current;


    const fadeIn = (callback?: Function) => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(() => callback ? callback() : null)

    }


    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    }


    const startMovingPosition = (initPosition: number, easing?: EasingFunction, duration: number = 700 ) => {

        postion.setValue(initPosition)

        Animated.timing(postion, {
            toValue: 0,
            useNativeDriver: true,
            duration,
            easing: easing 
        }).start()

    }

    return { fadeIn, fadeOut, opacity, postion, startMovingPosition }

}
