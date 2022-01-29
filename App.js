import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList ,TouchableOpacity, ImageComponent,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from "./components/Header" ;
import Todolist from "./components/Todolist" ;
import GetTodos from './components/GetTodos';



export default function App() {
  const [todos,setTodos] =useState([
    {text:'Take coffee',key:'1'},
    {text:'Have Dinner',key:'2'},
    {text:'Do Homeworkk',key:'3'}
  ]);
  const pressHandler = (key) =>{
      setTodos(
        (alltodos)=> {
          return alltodos.filter(
          todo => todo.key != key)
          }
        
   
      );
        
  }
  const submitTodo = (val) => {
    if(val.length>=3)
    {
    setTodos((pvstodos) => [{text:val,key:Math.random().toString()},...pvstodos])
    }
    else
    {
      Alert.alert("Oops!","Your todo should be greater than three chars",[{text:"Understood"}])
    }
  }
  return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <GetTodos submitTodo={submitTodo}/>
        <View style={styles.container2}>
        <FlatList
          data={todos}
          renderItem={({item})=>
              <Todolist item={item} pressHandler={pressHandler}/>
              }
        />
        </View>
      </View>
    </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
     padding:40,
     flex:1,

  },
  container2:{
    
    flex:1
  }
});
