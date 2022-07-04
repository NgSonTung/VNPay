import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FBFF",
    overflow: "hidden",
  },
  main: {
    marginHorizontal: 11.5,
    paddingTop: 76.2,
    zIndex: 0,
    elevation: 4,
    // // animation
    // zIndex: 10,
  },
  bottomBar: {
    position: "absolute",
    bottom: -4,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  qrContainer: {
    flex: 1,
    backgroundColor: "#005AAB",
    width: 53,
    height: 53,
    bottom: 39,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  navMenu: {
    position: "absolute",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  navIcons: {
    color: "white",
  },
  navDesc: {
    color: "white",
    fontSize: 10.5,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
  },
  navCont: {
    flex: 1,
    alignItems: "center",
  },
  home: {
    marginLeft: -30,
  },
  notif: {
    marginLeft: -60,
  },
  shop: {
    marginRight: -60,
  },
  gift: {
    marginRight: -30,
  },
  qrLogo: {
    width: 55,
    aspectRatio: 3,
  },
});

export default styles;
