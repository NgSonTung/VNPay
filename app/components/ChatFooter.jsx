import React from "react";
import { StyleSheet, View, Text, color, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function ChatFooter(props) {
  return (
    <View style={styles.CTDV_Container_BTN}>
      <View style={styles.FTContainer}>
        <Ionicons name="chatbubble-ellipses" size={24} color="#1569a3" style={styles.iconFT} />
        <Text style={{color: 'black'}}>Trò chuyện</Text>
      </View>
      <View style={styles.FTContainer}>
        <AntDesign name="contacts" size={30} color="black" style={styles.iconFT}/>
        <Text style={{color: 'black'}}>Danh bạ</Text>
      </View>
      <View style={styles.FTContainer}>
      <Ionicons name="md-person-circle" size={24} color="black" style={styles.iconFT}/>
        <Text style={{color: 'black'}}>Cá nhân</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
    CTDV_Container_BTN:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 20,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      FTContainer:{
        // flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
      },
      iconFT:{
          marginTop: 4,
          textAlign: 'center',
      }
    
})
