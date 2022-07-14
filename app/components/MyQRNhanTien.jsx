import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  Modal,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
const windowHeight = Dimensions.get("screen").height;

export default function MyQRNhanTien(props) {
  const modalInputRef = useRef();
  const [showModal, setModal] = useState(false);
  const [amount, setAmount] = useState();
  const toggleModal = () => {
    if (showModal) {
      setModal(false);
    } else {
      Keyboard.dismiss();
      setModal(true);
      setTimeout(() => {
        modalInputRef.current.focus();
      }, 200);
    }
  };

  const ModalPopup = () => {
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackground} />
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Số tiền muốn nhận</Text>
          <Entypo
            onPress={toggleModal}
            style={styles.modalExit}
            name="cross"
            size={24}
            color="#757575"
          />
          <View style={styles.modalBar} />
          <TextInput
            value={amount}
            onChangeText={(value) => {
              setAmount(() => value);
            }}
            ref={modalInputRef}
            keyboardType={"numeric"}
            style={styles.modalInput}
            placeholder={"Nhập số tiền"}
          />
          <View
            onStartShouldSetResponder={toggleModal}
            style={styles.modalBtnCont}
          >
            <Text style={styles.modalBtn}>Xong</Text>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {showModal ? ModalPopup() : null}
      <Text style={styles.title}>MÃ QR DÙNG ĐỂ NHẬN TIỀN TRÊN VÍ</Text>
      <Image
        style={styles.logo}
        resizeMode={"contain"}
        source={require("../assets/logo3.png")}
      />
      <Image
        style={styles.qr}
        resizeMode={"contain"}
        source={require("../assets/QRthanhtoan.png")}
      />
      <Text style={styles.uName}>{props.name}</Text>
      <Text>09123123223</Text>
      <View style={styles.inputCont}>
        <TextInput
          value={amount}
          onFocus={toggleModal}
          style={styles.input}
          placeholder={"Nhập số tiền"}
        />
      </View>
    </View>
  );
}
0;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 15,
    marginTop: 20,
  },
  logo: {
    height: 45,
  },
  qr: {
    marginTop: windowHeight * 0.1,
    height: 200,
    width: 200,
  },
  uName: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 80,
  },
  input: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    height: 50,
    width: 350,
    borderColor: "#E8E8E8",
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "dashed",
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: -30,
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  modalText: {
    paddingVertical: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#757575",
  },
  modalExit: {
    padding: 5,
    position: "absolute",
    right: 10,
    top: 10,
  },
  modalBar: {
    width: "100%",
    height: 1,
    backgroundColor: "#E6E6E6",
  },
  modalInput: {
    height: 50,
    width: 330,
    backgroundColor: "#E6E6E6",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    borderRadius: 13,
    marginTop: 20,
  },
  modalBtnCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    width: 300,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#005BAA",
  },
  modalBtn: {
    color: "#005BAA",
    fontWeight: "600",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.5,
  },
});
