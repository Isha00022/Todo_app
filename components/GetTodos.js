import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';

export default function GetTodos({submitTodo}) {

     const [newtodo,setNewtodo] = useState(" ")

     return(
         <View style={styles.container}>
            <TextInput 
            style={styles.inputtodos}
            placeholder='Create new todos.....'
            onChangeText={(val) => setNewtodo(val)}
            />
            <Button
            title='Create'
            color={'coral'}
            onPress={() => submitTodo(newtodo)}
            />
         </View>
     );

}
 const styles=StyleSheet.create({

     container:{
       
        
     },

     inputtodos:{
        padding:10,
        paddingLeft:15,
        borderWidth:2,
        fontSize:18,
        borderStyle:'dashed',
        borderColor:'#ddd',
        marginBottom:20,
        
        

     },

 });