import React from 'react'
import { View , Text , StyleSheet } from 'react-native'
function Task(props) {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style = {styles.textItem}>{props.text}</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square:{
        width: 24,
        height:24,
        backgroundColor: '#558cf6',
        opacity:0.4,
        borderRadius: 5,
    }
    textItem:{
        
    }
})
export default Task