import React from "react";
import { StyleSheet, View, Text, color, Pressable, Alert } from "react-native";
import { updateBalance, getKey } from "../../firebase.js";
export default function XNFooter(props) {
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const sendMoney = () => {
    const receiverID = getKey(props.receiver.number);
    const senderID = getKey(props.accountInfo.number);
    updateBalance(
      receiverID,
      parseFloat(props.receiver.balance) + parseFloat(props.sendAmount),
      props.receiver
    );
    updateBalance(
      senderID,
      parseFloat(props.accountInfo.balance) - parseFloat(props.sendAmount),
      props.accountInfo
    );
    props.BackHome();
    Alert.alert("Chuyển tiền thành công");
  };

  return (
    <View style={styles.mainXN_Container_BTN}>
      <View style={styles.mainXN_Container_Button}>
        <Text style={styles.mainXN_Info_TitleBTN}>Tổng tiền (VND) </Text>
        <Text style={styles.mainXN_InfoBTN}>
          {currencyFormat(props.sendAmount)}
        </Text>
      </View>
      <View style={styles.submit} onStartShouldSetResponder={sendMoney}>
        <Text style={styles.submit_Button}>Tiếp tục</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainXN_Container_BTN: {
    height: 300,
    //flex:3,
    //justifyContent: 'flex-end',
    flexDirection: "column",
    justifyContent: "flex-end",
    //alignSelf:'flex-end',
    //alignItems: 'flex-end'
  },
  submit: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    width: 300,
    backgroundColor: "#255aa4",
    borderColor: "#255aa4",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: "13.5%",
  },
  submit_Button: {
    color: "white",
  },
  mainXN_Container_Button: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#f7f6f6",
    borderTopWidth: 3,
    padding: 5,
  },
  mainXN_Info_TitleBTN: {
    fontSize: 15,
    marginLeft: 23,
    color: "grey",
  },
  mainXN_InfoBTN: {
    fontSize: 15,
    marginRight: 23,
    color: "blue",
  },
});
