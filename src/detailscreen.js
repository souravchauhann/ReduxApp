import React from "react";
import { View ,Text, SafeAreaView, Image,FlatList,
     useWindowDimensions, ScrollView,StyleSheet, Pressable,useColorScheme} from "react-native";


const DetailScreen=({route})=>{
    const data=route.params.item
    const isDarkTheme=useColorScheme()==='dark'
     
    return(
      <View style={[isDarkTheme?{backgroundColor:'black'}:{backgroundColor:'#fff'}]}>
             
       <ScrollView>

      {/* <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({item})=>( */}
        <Image
        style={{width:'100%',aspectRatio:1}}
        source={{uri:data?.image}}
        />
      {/* )}
      />
            */}
 
      <View style={{padding:10}}>
      <Text style={[{fontSize:34,
fontWeight:'500',
marginVertical:9,
},isDarkTheme?{color:'white'}:{color:'black'}]}>{data?.name}</Text>
      <Text style={styles.price}>${data?.price}</Text>
      <Text style={styles.description}>{data?.description}</Text>
      
      </View>
     </ScrollView>
      <Pressable 
      style={[{ backgroundColor:'black',
      position:'absolute',
      width:'90%',
      alignSelf:'center',
      padding:20,
      bottom:5,
      borderRadius:19},isDarkTheme?{backgroundColor:'white'}:{backgroundColor:'black'}]}>
      <Text style={[{   color:'white',
    textAlign:'center'},isDarkTheme?{color:'black'}:{color:'white'}]}>Add To Cart</Text>
      </Pressable>
       
     
        </View>


    )
}
export default DetailScreen

const styles=StyleSheet.create(
    {
title:{
fontSize:34,
fontWeight:'500',
marginVertical:9,
color:'black'
},
price:{
    fontWeight:'500',
    fontSize:16,
    letterSpacing:1.5
},
description:{
    fontSize:16,
    marginVertical:10,
    lineHeight:27,
    fontWeight:'300'

},
btn:{
    backgroundColor:'black',
    position:'absolute',
    width:'90%',
    alignSelf:'center',
    padding:20,
    bottom:5,
    borderRadius:19

},
addcarttxt:{
    color:'white',
    textAlign:'center'
}

    }
)