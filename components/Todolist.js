import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';

export default function Todolist({item,pressHandler}){
     
    return(

    <View>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
               <View>
                  <Text style={styles.list}>{item.text}</Text>
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




    }

});