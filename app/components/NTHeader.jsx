import React from "react";
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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NTHeader({ balance, navigation, goBack }) {
  const [Show, setBalanceState] = React.useState(false);

  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  function showBalance() {
    setBalanceState((prevState) => !prevState);
  }

  return (
    <View>
      <View style={styles.headerSafeArea}>
        <View style={styles.headerCT}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            color="white"
            style={styles.headerCT_Backbtn}
            onPress={goBack}
          />
          <Text style={styles.headerCT_Text}>Nạp tiền vào ví </Text>
          <Text> </Text>
        </View>
      </View>

      <View style={styles.headerCT_Balance}>
        <Image
          source={require("../assets/Vnpay_Logo.png")}
          style={styles.icon}
        />
        <View>
          <Text style={styles.VNP}>Ví VNPAY</Text>
          <View style={styles.Money}>
            <Text style={styles.Currentcy}>
              {Show ? currencyFormat(balance) : "••••••"}
            </Text>
            <Pressable onPress={showBalance}>
              <Text>
                {" "}
                <Ionicons name="eye-off-sharp" size={20} color="gold" />{" "}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

//{Show ? (props.balance) : "••••••"}

const styles = StyleSheet.create({
  headerSafeArea: {
    //paddingTop: StatusBar.currentHeight,
    backgroundColor: "#469cd8",
  },

  headerCT: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  headerCT_Text: {
    color: "white",
    fontSize: 20,
    marginRight: 20,
  },

  headerCT_Backbtn: {
    marginLeft: 5,
  },

  icon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },

  headerCT_Balance: {
    flexDirection: "row",
    height: 95,
    alignItems: "center",
    paddingLeft: 10,
    borderBottomWidth: 10,
    borderBottomColor: "#f7f6f6",
    backgroundColor: "white",
  },

  VNP: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },

  Money: {
    flexDirection: "row",
  },
  Currentcy: {
    color: "#2456a8",
  },
});
