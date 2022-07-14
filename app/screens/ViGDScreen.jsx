import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar, StyleSheet, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function ViGD(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerCont}>
        <MaterialIcons
          style={styles.returnBtn}
          name="arrow-back-ios"
          size={18}
          color="white"
          onPress={props.navigation.goBack}
        />
        <Text style={styles.headerTitle}>Ví gia đình</Text>
        <View style={styles.support}>
          <Text style={styles.supportBtn}>Hỗ trợ</Text>
        </View>
      </View>
      <ScrollView pagingEnabled snapToInterval={300} snapToAlignment={"start"}>
        <View style={styles.mainCont}>
          <View style={styles.mainCard}>
            <Image
              style={styles.avatar}
              resizeMode={"contain"}
              source={require("../assets/avatarwring.png")}
            />
            <Text style={styles.number}>0987384535</Text>
            <Text style={styles.uName}>{props.name}</Text>
            <View style={styles.line}></View>
            <Text style={styles.cv}>Chủ ví</Text>
            <Text style={styles.active}>Hoạt động</Text>
            <Ionicons
              style={styles.activeIcon}
              name="checkmark-circle-sharp"
              size={19}
              color="#14BA75"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 13,
              width: "90%",
              height: 43,
            }}
          >
            <Text style={styles.member}>Thành viên gia đình</Text>
            <View style={styles.createCont}>
              <Text style={styles.createTxt}>Tạo mới</Text>
              <MaterialCommunityIcons
                name="plus-circle"
                size={20}
                color="#009EDB"
              />
            </View>
            <Text style={styles.manage}>Quản lý thành viên gia đình</Text>
          </View>
          <View style={styles.bottomCard}>
            <Image
              style={styles.family}
              resizeMode={"contain"}
              source={require("../assets/family.png")}
            />
            <Text style={styles.notice}>
              Quý khách chưa tạo thành viên gia đình
            </Text>
            <Text style={styles.noticeDesc}>
              Hãy tạo thành viên gia đình để có thể chia sẻ các tiện ích trải
              nghiệm trên ứng dụng Ví điện tử VNPAY với người khác
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style={"auto"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009EDB",
    overflow: "hidden",
    width: "100%",
  },
  headerCont: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  returnBtn: {
    padding: 5,
    position: "absolute",
    left: 10,
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  support: {
    position: "absolute",
    right: 10,
    paddingHorizontal: 13,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
  },
  supportBtn: {
    color: "white",
    fontWeight: "600",
  },
  mainCont: {
    alignItems: "center",
  },
  mainCard: {
    marginTop: 55,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 18,
    height: 160,
    alignItems: "center",
  },
  avatar: {
    height: 130,
    aspectRatio: 1,
    marginTop: -68,
  },
  number: {
    fontWeight: "700",
    fontSize: 17,
    marginTop: 2,
    letterSpacing: 0.4,
  },
  uName: {
    fontSize: 15,
  },
  line: {
    width: "100%",
    marginTop: 6,
    height: 1,
    backgroundColor: "gray",
    opacity: 0.3,
  },
  cv: {
    position: "absolute",
    left: 15,
    bottom: 14,
    fontWeight: "600",
    fontSize: 13,
  },
  active: {
    position: "absolute",
    right: 40,
    bottom: 14,
    color: "#14BA75",
  },
  activeIcon: {
    position: "absolute",
    right: 15,
    bottom: 12,
  },
  member: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  createCont: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 9,
    height: 24,
    alignItems: "center",
    borderRadius: 15,
    right: 2,
    position: "absolute",
  },
  createTxt: {
    color: "#009EDB",
    fontSize: 15,
    marginRight: 6,
  },
  manage: {
    position: "absolute",
    left: 0,
    bottom: 0,
    color: "#7CCDEC",
    fontSize: 13,
  },
  bottomCard: {
    marginTop: 23,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 18,
    height: 600,
    alignItems: "center",
    marginBottom: 100,
  },
  family: { marginTop: 17 },
  notice: {
    fontWeight: "bold",
    fontSize: 17,
  },
  noticeDesc: {
    color: "gray",
    textAlign: "center",
    width: "90%",
    marginTop: 15,
  },
});
