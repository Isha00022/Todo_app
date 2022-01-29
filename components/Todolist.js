import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Todolist({item,pressHandler}){
     
    return(

    <View>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
               <View style={styles.list}>
                  <MaterialIcons name="delete" size={24} color="#333" />
                  <Text style={styles.listItems}>{item.text}</Text>
               </View>
        </TouchableOpacity> 
    </View>   
    )
}

const styles=StyleSheet.create({
    
    list:{
        padding:10,
        paddingLeft:15,
        borderWidth:2,
        borderColor:'#bbb',
        marginTop:25,
        fontSize:18,
        borderRadius:10,
        borderStyle:'dashed',
        flexDirection:'row',


    },
    listItems:{
        
        marginLeft:4,
        paddingTop:4,
    }

});