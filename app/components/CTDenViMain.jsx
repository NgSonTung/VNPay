import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Platform,
  Text,
  StatusBar,
  color,
  Pressable,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CTDenViMain({name}){
    return(
      <View style={styles.mainNT_BGC}>
        <View style={styles.mainNT_Conteiner}>
            <View style={styles.mainNT_InputBox_Top}>
              <View style={styles.mainNT_InputBox_SDT}>
                  <Ionicons name="cash" size={30} color="#469cd8"style={styles.mainNT_InputBox_IconMoney}/>
                    <TextInput 
                        placeholder="Nhập số điện thoại" 
                        style={styles.mainNT_Input_Placeholder}
                        keyboardType= 'decimal-pad'
                    />
              </View>
              <View>
                  <AntDesign name="contacts" size={30} color="gold" />
              </View>
            </View>

            <View style={styles.mainNT_InputBox_Bottom}>
                <MaterialIcons name="message" size={30} color="#469cd8" style={styles.mainNT_InputBox_Icon}/>
                <View style={styles.mainNT_InputBox_Message}>
                    <Text>Nội dung</Text>
                    <TextInput 
                        placeholder= "Text"
                        style={styles.mainNT_Input_Placeholder}
                    />
                </View>
            </View>
        </View>

        <View style={styles.mainNT_Conteiner_Middle}>
            <View style={styles.mainNT_InputBox_Money}>
            <MaterialCommunityIcons name="hand-coin" size={24} color="#469cd8" style={styles.mainNT_InputBox_IconCoin} /> 
              <TextInput 
                  placeholder="Số tiền (VND)" 
                  style={styles.mainNT_Input_Placeholder}
                  keyboardType= 'decimal-pad'
              />
            </View>
        </View>

        <View style={styles.mainNT_Conteiner_Bottom}>
            <Text style={styles.mainNT_Text}>Danh Sách Nhận Tiền (0/10)</Text>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
  mainNT_Conteiner:{
    borderBottomColor: '#f7f6f6',
    borderBottomWidth: 10,
    borderTopColor: '#f7f6f6',
    borderTopWidth: 10,
    backgroundColor: 'white',
},
  mainNT_InputBox_Top:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    paddingBottom: 5,
    borderBottomColor: '#f7f6f6',
    borderBottomWidth: 2,
},
  mainNT_InputBox_Bottom:{
  flexDirection: 'row',
  margin: 30,
  marginTop: 5,
  paddingBottom: 5,
  borderBottomColor: '#f7f6f6',
  borderBottomWidth: 2,

},
mainNT_InputBox_SDT:{
  flexDirection: 'row',
},
mainNT_InputBox_Message:{
  marginBottom: 10,
},
mainNT_InputBox_Icon:{
  marginTop: 8,
  marginRight: 5,
},
mainNT_InputBox_IconMoney:{
  marginTop: 4,
  marginRight: 5,
},

mainNT_InputBox_Money:{
  flexDirection: 'row',
  margin: 30,
  paddingBottom: 5,
  borderBottomColor: '#f7f6f6',
  borderBottomWidth: 2,
},
mainNT_InputBox_IconCoin:{
  marginRight: 10,
},

mainNT_Conteiner_Middle:{
  borderBottomColor: '#f7f6f6',
  borderBottomWidth: 10,
  backgroundColor: 'white',
},
mainNT_Conteiner_Bottom:{
  borderBottomColor: '#f7f6f6',
  borderBottomWidth: 2,
  backgroundColor: 'white',
},
mainNT_Text:{
  margin: 30,
  marginTop: 15,
  marginBottom: 15,
  color: 'grey',
}




  
  });

