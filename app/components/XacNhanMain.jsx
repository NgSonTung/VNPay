import React from "react";
import { StyleSheet, View, Text, color } from "react-native";
import NTMain from "./NTMain";
export default function XNMain(props) {
  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <View>
      <Text style={styles.mainXN_Text}>XÁC NHẬN THÔNG TIN</Text>
      <View style={styles.container}>
        <View style={styles.mainXN_Container_SetOne}>
          <Text style={styles.mainXN_Info_Title}>Nguồn tiền</Text>
          <Text style={styles.mainXN_Info}>
            {"*******" + props.accountInfo.number.slice(6)}
          </Text>
        </View>
        <View style={styles.mainXN_Container_SetTwo}>
          <Text style={styles.mainXN_Info_Title}>Ngân hàng liên kết</Text>
          <Text style={styles.mainXN_BankInfo}>
            Ngân hàng TMCP Tiên Phong - TPBank
          </Text>
        </View>
        <View style={styles.mainXN_Container_SetThree}>
          <Text style={styles.mainXN_Info_Title}>Tên tài khoản/Thẻ nạp</Text>
          <Text style={styles.mainXN_Info}>{props.name}</Text>
        </View>
        <Text style={styles.Border}></Text>
      </View>

      <View style={styles.container_two}>
        <View style={styles.mainXN_Container_SetFour}>
          <Text style={styles.mainXN_Info_TitleTwo}>Số tiền nạp (VND) </Text>
          <Text style={styles.mainXN_InfoTwo}>
            {currencyFormat(props.sendAmount)}
          </Text>
        </View>
        <View style={styles.mainXN_Container_SetFive}>
          <Text style={styles.mainXN_Info_TitleTwo}>Phí giao dịch (VND) </Text>
          <Text style={styles.mainXN_InfoTwo}>Miễn phí</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#f7f6f6",
    borderBottomWidth: 3,
    marginLeft: 15,
    marginRight: 15,
  },
  mainXN_Text: {
    padding: 15,
    paddingBottom: 0,
    paddingLeft: 18,
    fontSize: 15,
    fontWeight: "bold",
  },
  mainXN_Container_SetOne: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mainXN_Container_SetTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mainXN_Container_SetThree: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mainXN_Info_Title: {
    fontSize: 15,
    padding: 16,
    paddingLeft: 10,
    color: "grey",
  },
  mainXN_Info: {
    fontSize: 15,
    flexWrap: "wrap",
    padding: 16,
    paddingRight: 10,
    fontWeight: "bold",
  },
  mainXN_BankInfo: {
    flex: 1,
    height: 50,
    flexWrap: "wrap",
    flexDirection: "row",
    fontSize: 15,
    marginTop: 17,
    fontWeight: "bold",
  },

  container_two: {
    marginLeft: 15,
    marginRight: 15,
  },
  mainXN_Container_SetFour: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainXN_Container_SetFive: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainXN_Info_TitleTwo: {
    fontSize: 15,
    padding: 16,
    paddingLeft: 10,
    color: "grey",
  },
  mainXN_InfoTwo: {
    fontSize: 15,
    flexWrap: "wrap",
    padding: 16,
    paddingRight: 10,
    fontWeight: "bold",
  },
});
