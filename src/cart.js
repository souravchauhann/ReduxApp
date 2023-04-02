import React from "react";
import { FlatList, Image ,View,Text, TouchableOpacity,useColorScheme} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeItemToCart } from "../redux/action/Actions";
import product from './data/product'
const Cart=({navigation})=>{
  
  const data=useSelector(state=>state)
  const isDarkTheme=useColorScheme()==='dark'

  const dispatch=useDispatch();
  const removeItem=index=>{
    dispatch(removeItemToCart(index))
  }
  
  return(
    <View style={[{flex:1},isDarkTheme?{backgroundColor:'black'}:{backgroundColor:'white'}]}>
      <TouchableOpacity 
       
       onPress={()=>navigation.goBack()}>
      <Text style={[{color:'black',fontSize:19,fontWeight:'500',
      marginVertical:10,marginHorizontal:10},isDarkTheme?{color:'white'}:{color:'balck'}]}>Back</Text>
      </TouchableOpacity>

      <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item})=>(
        <View style={{width:'100%',height:200,height:200}}>
           <Image
       style={{width:'100%',height:'100%',resizeMode:'center'}}
       source={{uri:item.image}}
       />
       <TouchableOpacity 
       onPress={()=>removeItem(0)}
       style={{position:'absolute',bottom:5,right:0,
       borderWidth:0.4,borderRadius:10,backgroundColor:'red',right:8}}>
       <Text style={{color:'white',fontSize:14,fontWeight:'500',
       marginVertical:7,marginHorizontal:7}}>Remove To Cart</Text>
     
       </TouchableOpacity> 


       
        </View>
      
      )}
      
      />

    </View>
  )
}
export default Cart



 