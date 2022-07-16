import { NavigationContainer } from "@react-navigation/native";
import React, {useState}from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import { FlatList } from 'react-native-gesture-handler';
import { data } from "./thongbaodata"; 

const RenderItem = ({item, index}) => {
    return (
        <View>
            <Text> {item.image1}</Text>
        </View>
    )
}

export default function Swipenotion(){
    return(
    <View style={styles.container}>
        <FlatList data={data} renderItem={({item, index}) =>
          <RenderItem item = {item} index= {index}/>}>
        </FlatList>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: " white",
        fontSize: 18,
        flexDirection: "row",
        elevation: 9,
    }

})