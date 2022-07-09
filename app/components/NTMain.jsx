import React from "react";
import { StyleSheet, Image, View, ScrollView, Platform, Text, StatusBar, color, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function NTMain(){
    return(
        <View style={styles.mainNT}>
            <Text style={styles.mainNT_Text}>
                Nguồn tiền
            </Text>

            <View style={styles.mainNT_Balance}>
                <Image 
                    source={require("../assets/TPBank_Logo.png")}
                    style={styles.icon1}
                />

                <View>
                    <Text style={styles.VNP}>TPBANK</Text>
                     <Text>********8910</Text>
                </View>
            </View>

            <View style={styles.mainNT_Input}>
                <View style={styles.mainNT_InputBox}>
                    <Ionicons name="cash" size={24} color="black" />
                    <TextInput placeholder="Số tiền nạp (VND)" style={styles.mainNT_Input_Placeholder}/>
                </View>
                <View style={styles.mainNT_Input_Question}>
                    <Text> Hạn mức </Text>
                    <AntDesign name="questioncircle" size={24} color="black" />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainNT:{
        height: 100,
    },
    mainNT_Text:{
        fontSize: 15,
        color: "grey",
        padding: 20,
        paddingBottom: 0,
    },

    icon1:{
        width: 60,
        height: 60,
        marginRight: 15,
        marginLeft: 7,
        marginTop: 3,
    },
  
    mainNT_Balance:{
        flexDirection: "row",
        height: 95,
        alignItems: 'center',
        paddingLeft: 30,
        borderBottomWidth: 3,
        borderBottomColor: '#f7f6f6' 
    },

    VNP:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },

    mainNT_Input:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 3,
        borderBottomColor: '#f7f6f6' 
    },
    mainNT_InputBox:{
        flexDirection: 'row',
    },
    mainNT_Input_Question:{
        flexDirection: 'row',
    },
    mainNT_Input_Placeholder:{
        marginLeft: 10,
        fontSize: 15,
    }
})