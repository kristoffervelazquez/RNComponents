import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler';



const TexInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const onChange = (value: string, field: string) => {
        setForm({ ...form, [field]: value })
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.globalMargin}>

                    <HeaderTitle title='Text Input' />

                    <TextInput style={stylesScreen.inputStyle} placeholder='Ingrese su nombre' onChangeText={(text) => { onChange(text, 'name') }} autoCorrect={false} autoCapitalize='words' keyboardType='name-phone-pad' />
                    <TextInput style={stylesScreen.inputStyle} placeholder='Ingrese su email' onChangeText={(text) => { onChange(text, 'email') }} keyboardType='email-address' />
                    <TextInput style={stylesScreen.inputStyle} placeholder='Ingrese su telefono' onChangeText={(text) => { onChange(text, 'phone') }} keyboardType='phone-pad' />

                    <Text style={styles.title}>{JSON.stringify(form, null, 4)}</Text>
                    <Text style={styles.title}>{JSON.stringify(form, null, 4)}</Text>
                    <Text style={styles.title}>{JSON.stringify(form, null, 4)}</Text>
                    <View style={{ height: 100 }} />
                </View>
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