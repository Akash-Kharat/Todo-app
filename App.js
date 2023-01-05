import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task ,setTask] = useState();
  const [taskItems, settaskItems] = useState([]);
  const handleAddTask = () =>{
    console.log(task)
    settaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    settaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todo List</Text>
        <View style={styles.items}>
        {
          taskItems.map((item,index) =>{
           return <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
           
          })
        }

        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? 'padding' : 'height'}
        style = {styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} value={task} placeholder = {'write a task'} onChangeText={ text => setTask(text)}/>
        <TouchableOpacity onPress={()=> handleAddTask()}>
            <View style = {styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
    
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle :{
    fontSize:24,
    fontWeight: 'bold',
  },
  items : {
    marginTop:10,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom:0,
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input :{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: '#fff',
    borderRadius: 60,
    alignItems:'center',
    justifyContent: 'center',
  },
  addText:{

  }

});
