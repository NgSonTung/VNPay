import React from "react";
import { StyleSheet, View, Text, color, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function CTFooter(props) {
  return (
    <View style={styles.CTDV_Container_BTN}>
      <View style={styles.FTContainer}>
        <AntDesign name="contacts" size={30} color="white" style={styles.iconFT}/>
        <Text style={{color: 'white'}}>Quản lý danh bạ thụ hưởng</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CTDV_Container_BTN:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 20,
  },
  FTContainer:{
    flexDirection: 'row',
    backgroundColor: "#469cd8",
    borderColor: "#469cd8",
    width: 175,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
  },
  iconFT:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  }
})

