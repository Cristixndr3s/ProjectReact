import React from 'react'
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Hola mundo
      </Text>
      <View>
      <Text>Componentes basicos</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width:200, height:200}} />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth:1
        }}
        defaultValue="Escribe aquí"
        />
    </ScrollView>
  )
}

export default App;
