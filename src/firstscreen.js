import React, { useEffect, useState } from "react";
import { FlatList, Image ,View,Text, TouchableOpacity,Pressable,useColorScheme} from "react-native";
import { State } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/action/Actions";
import product from './data/product'

    const FirstScreen=({navigation})=>{
    const dispatch=useDispatch();
    const addItem=item=>{
      dispatch(addItemToCart(item))
    }
  
    const isDarkTheme=useColorScheme()==='dark'
    const item=useSelector(state=>state)
    let arrr=[];
    arrr=item;
 
    return(
    <View style={[{flex:1},isDarkTheme?{backgroundColor:'black'}:{backgroundColor:'white'}]}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,marginHorizontal:5}}>
    <TouchableOpacity >
     <Text style={[{color:'white',fontSize:24,fontWeight:'500',marginVertical:5
      ,marginHorizontal:5,padding:3,borderRadius:10},isDarkTheme?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}]}>THEME</Text>
       </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
      <Text style={{backgroundColor:'green',color:'white',fontSize:24,fontWeight:'500',marginVertical:5
      ,marginHorizontal:5,padding:3,borderRadius:10}}>cart {arrr.length}</Text>
      </TouchableOpacity>
        </View>
     
      <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={product}
      renderItem={({item})=>(
      <Pressable
       onPress={()=>navigation.navigate('DetailScreen',{"item":item})}
      style={{width:'50%',padding:1.9}}>
      <Image
       style={{width:'100%',aspectRatio:1}}
       source={{uri:item.image}}
       />
       <TouchableOpacity 
       onPress={()=>addItem(item)}
       style={{position:'absolute',bottom:5,right:0,borderWidth:0.4,borderRadius:10,backgroundColor:'black',right:8}}>
       <Text style={{color:'white',fontSize:14,fontWeight:'500',marginVertical:7,marginHorizontal:7}}>Add To Cart</Text>
       </TouchableOpacity>
        </Pressable>
      
      )}
      
      />

    </View>
  )
}
export default FirstScreen

