import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import pagina1 from '../screen/pagina1'
import pagina2 from '../screen/pagina2'
const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
    <Stack.Navigator initialRouteName = "pagina">
      <Stack.Screen name="pagina" component={pagina1} />
      <Stack.Screen name="paginar" component={pagina2} />
    </Stack.Navigator>

  </NavigationContainer>
    )
}

export default MainStackNavigator

const styles = StyleSheet.create({})
