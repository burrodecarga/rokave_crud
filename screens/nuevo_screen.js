import React, { useState } from 'react'
import { Button, Headline, TextInput } from 'react-native-paper'
import { Alert, StyleSheet, View } from 'react-native'
import globalStyles from './styles/global'
import  axios from 'axios'


export default function NuevoScreen() {
  const [nombre, setNombre] = useState('Edwin Henriquez')
  const [telefono, setTelefono] = useState('04144753555')
  const [correo, setCorreo] = useState('burrodecarga62@gmail.com')
  const [direccion, setDireccion] = useState('calle 181 Valle Verde, Naguanagua')
  
  const guardarCliente = async ()=>{

    //validar
    if(nombre==='' || telefono==='' || correo==='' || direccion===''){
      Alert.alert('Error', 'Todos los campos son obligatorios', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
       
      ]);
    }

    const cliente = {nombre,telefono,correo,direccion}

    
    //IOS const url = 'http://localhost:3000/clientes'
    const url ='http://10.0.2.2:3000/clientes'
    try {
      await axios.post(url, cliente)
      console.log('Negado...', cliente)
    
    } catch (error) {
     console.log(error) 
    }

  }
  return (
    <View style={styles.container}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
       <TextInput
       label='Nombre y Apellido'
       placeholder='Nombre y Apellido'
       onChangeText={(e)=>setNombre(e)}
       style={styles.input}
       />

<TextInput
       label='Teléfono'
       placeholder='Teléfono'
       onChangeText={(e)=>setTelefono(e)}
       style={styles.input}
       />


<TextInput
       label='Correo electrónico'
       placeholder='Correo electrónico'
       onChangeText={(e)=>setCorreo(e)}
       style={styles.input}
       />

<TextInput
       label='Dirección'
       placeholder='Dirección'
       onChangeText={(e)=>setDireccion(e)}
       style={styles.input}
       />



       <Button 
       style={styles.button}
       icon="pluscircleo" mode="contained" onPress={guardarCliente}>
    Press me
  </Button>
    </View>   
  )
}

const styles = StyleSheet.create({
  input:{
    marginBottom:20,
    
  },
  button: {
    paddingHorizontal:20,
    paddingVertical:10,
    marginHorizontal:20,
    marginVertical:5,
    backgroundColor:'#1f3dc0',
    color:'#fff',
  }
})
