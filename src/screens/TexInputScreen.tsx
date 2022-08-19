import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler';
import useForm from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';



const TexInputScreen = () => {

    const { formulario, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>

                        <HeaderTitle title='Text Input' />

                        <TextInput style={stylesScreen.inputStyle} placeholder='Ingrese su nombre' onChangeText={(text) => { onChange(text, 'name') }} autoCorrect={false} autoCapitalize='words' keyboardType='name-phone-pad' />
                        <TextInput style={stylesScreen.inputStyle} placeholder='Ingrese su email' onChangeText={(text) => { onChange(text, 'email') }} keyboardType='email-address' />
                        <TextInput style={stylesScreen.inputStyle} placeholder='Ingrese su telefono' onChangeText={(text) => { onChange(text, 'phone') }} keyboardType='phone-pad' />
                        <View>
                            <Text>Is subscribed?</Text>
                            <CustomSwitch isOn={formulario.isSubscribed} onChange={(value) => { onChange(value, 'isSubscribed') }} />
                        </View>

                        <Text style={styles.title}>{JSON.stringify(formulario, null, 4)}</Text>
                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default TexInputScreen

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.3)',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 5

    },
})