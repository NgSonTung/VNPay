import React from "react";
import {
    StyleSheet,
    Image,
    View
  } from "react-native";
import { TextInput } from "react-native-gesture-handler";

  const Searchbar1 = () => {
    return(
        <View style={styles.input} > 
            <Image style={styles.barIcons} source={require("../assets/search.png")}/>
            <TextInput style={{fontSize : 17}}  placeholder="Tìm kiếm"></TextInput>
        </View>
    )
  }
  export default Searchbar1;

  const styles = StyleSheet.create({
    barIcons:{
        height: 20,
        width:20,
        margin: 10,
        marginLeft: 20,
    },
    input:{
        margin: 20,
        backgroundColor:"white",
        padding: 5,
        borderRadius: 50,
        flexDirection: 'row'
    }
  });