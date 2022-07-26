import React, { Component, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";

const Load = () => {
  const [showLoad, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(!showLoad);
    }, 1000);
  }, []);

  return (
    <>
      {showLoad && (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
          <>
            <ActivityIndicator size={80} color="red" />
            <Image
              style={styles.logo}
              source={require("../assets/logo1.png")}
            />
          </>
        </View>
      )}
    </>
  );
};

export default Load;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
  logo: {
    width: 60,
    height: 60,
    marginLeft: 175,
    marginTop: -70,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
