import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import pagina2 from './pagina2'

const pagina1 = ({navigation}) => {
    const pase =() =>{
        alert('hola')
        navigation.navigate("paginar");
    }
    return (
        <View>
            
    
            <View style={styles.button}>
            <Text>hola</Text>

            <Button title="iniciar" onPress={pase} />

            </View>
        </View>
    )

    }
export default pagina1
const styles = StyleSheet.create({
    button: {
        color: "#C4C4C4",
        marginTop: 40,
      },
})

