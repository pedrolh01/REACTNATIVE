import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight ,
} from 'react-native';
import DetailScreen from '../Detail/Detail';

const List = props =>{ 
    //console.log(this.props.elnavigation)
    let resul = <Text>EMPTY</Text>
    if(props.lista.length > 0){
        resul = props.lista.map((elemento,index)=>(
            <View style={styles.viewv} key={index} key={index}>
                <TouchableHighlight  style={styles.btn} 
                onPress={() => this.props.elNavigation.navigate('Detail')} >
                    <Text style={styles.txt}>{elemento.name}</Text>
                </TouchableHighlight   >
            </View> 
        ))
    }
     
   /*props.lista.map((elemento,index)=>(
    <View  >{props.lista[0].name}
      <TouchableHighlight      >
      <Text  >{elemento} juan</Text>
        </TouchableHighlight   >
    </View>
  ))//<Text> juan</Text>/**/ 
  return resul;
} 
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    alignItems: 'center', 
    width: '100%',
  },
   txt: {
    fontSize:30,
    color: 'green', 
  },
  viewv: {
    borderColor:'#f2f2f2',borderBottomWidth:1,
    backgroundColor: 'orange',
    alignItems: 'center', 
    width: '100%',
  },
});

export default List