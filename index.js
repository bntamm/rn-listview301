import {
  AppRegistry, Text , View ,StatusBar,StyleSheet ,
  TouchableOpacity, Button , Image,TextInput,ListView
        } from 'react-native';
import App from './App';
import PropTypes from 'prop-types';
import React , {Component} from "react";


var DATA = [
  {khoahoc:"android" , giangvien:"tambui"},
  {khoahoc:"java" , giangvien:"hehehe"},
  {khoahoc:"laravel" , giangvien:"khoapham"},
  {khoahoc:"react native" , giangvien:"google"},
  {khoahoc:"c++" , giangvien:"web"},
];

class ListViewDemo extends Component{

constructor(props) {
   super(props);
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {
     dataSource: ds.cloneWithRows(DATA),
   };
 }

 taoHang(property){
   return(
     <View style={{paddingTop:20}}>
      <Text>{property.khoahoc}</Text>
      <Text>{property.giangvien}</Text>
     </View>
   );
 }

  render(){
    return(
      <View style={{paddingTop:50}}>

      <ListView
              dataSource={this.state.dataSource}
              renderRow={this.taoHang}
            />

      </View>
    );
  }
}



AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
