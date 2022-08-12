import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';


interface Switches {
    isActive: boolean,
    isHungry: boolean,
    isHappy: boolean
}

const SwitchScreen = () => {

    const [state, setState] = useState<Switches>({
        isActive: true,
        isHungry: false,
        isHappy: true
    })


    const { isActive, isHappy, isHungry } = state;


    const onChange = (value: boolean, field: keyof Switches) => {
        setState({
            ...state,
            [field]: value
        })
    }


    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title='Switches' />

            <View>
                {/* 
                    *Este metodo es para hacer la creacion de switches de manera dinamica*
                {
                    Object.entries(state).map((switchValues) => (
                        <View style={styles.switchRow} key={switchValues[0]}>
                            <Text style={styles.switchText}>{switchValues[0]}</Text>
                            <CustomSwitch isOn={switchValues[1]} onChange={(value) => onChange(value, switchValues[0])} />
                        </View>
                    ))
                } */}
                {/* Este metodo hace la creación individual de cada switch */}
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>isActive</Text>
                    <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>isHungry</Text>
                    <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>isHappy</Text>
                    <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
                </View>


            </View>

            <Text>{JSON.stringify(state, null, 5)}</Text>

        </View>
    )
}

export default SwitchScreen;


const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }
})